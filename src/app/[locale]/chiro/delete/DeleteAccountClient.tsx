'use client';

import {
  deleteUser,
  GoogleAuthProvider,
  onAuthStateChanged,
  reauthenticateWithPopup,
  signInWithPopup,
  signOut,
  type User,
} from 'firebase/auth';
import { deleteDoc, doc } from 'firebase/firestore';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { chiroAuth, chiroDb } from '@/lib/firebaseChiro';

type Status = 'idle' | 'working' | 'done';

export default function DeleteAccountClient() {
  const t = useTranslations('chiroDelete');
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(chiroAuth, (u) => {
      setUser(u);
      setReady(true);
    });
    return unsub;
  }, []);

  const provider = () => {
    const p = new GoogleAuthProvider();
    p.setCustomParameters({ prompt: 'select_account' });
    return p;
  };

  const handleSignIn = async () => {
    setError(null);
    try {
      await signInWithPopup(chiroAuth, provider());
    } catch (e) {
      const err = e as { code?: string; message?: string };
      if (err.code === 'auth/popup-closed-by-user' || err.code === 'auth/cancelled-popup-request') return;
      setError(err.message ?? t('errorGeneric'));
    }
  };

  const handleDelete = async () => {
    if (!user) return;
    if (!window.confirm(t('confirm'))) return;

    setStatus('working');
    setError(null);
    try {
      // 1. Borrar el documento de licencia en Firestore (si existe).
      try {
        await deleteDoc(doc(chiroDb, 'licenses', user.uid));
      } catch {
        // El doc puede no existir; continuar igual.
      }

      // 2. Borrar el usuario de Firebase Auth, reautenticando si es necesario.
      try {
        await deleteUser(user);
      } catch (e) {
        const err = e as { code?: string };
        if (err.code === 'auth/requires-recent-login') {
          await reauthenticateWithPopup(user, provider());
          await deleteUser(user);
        } else {
          throw e;
        }
      }

      await signOut(chiroAuth);
      setStatus('done');
    } catch (e) {
      const err = e as { message?: string };
      setError(err.message ?? t('errorGeneric'));
      setStatus('idle');
    }
  };

  return (
    <main className="chiro-del">
      <div className="chiro-del__card">
        {status === 'done' ? (
          <>
            <span className="chiro-del__icon" aria-hidden>✅</span>
            <h1 className="chiro-del__title">{t('doneTitle')}</h1>
            <p className="chiro-del__text">{t('doneText')}</p>
          </>
        ) : (
          <>
            <span className="chiro-del__icon" aria-hidden>⚠️</span>
            <h1 className="chiro-del__title">{t('title')}</h1>
            <p className="chiro-del__text">{t('intro')}</p>
            <ul className="chiro-del__list">
              <li>{t('item1')}</li>
              <li>{t('item2')}</li>
            </ul>
            <p className="chiro-del__note">{t('localNote')}</p>

            {!ready ? (
              <p className="chiro-del__hint">…</p>
            ) : !user ? (
              <>
                <p className="chiro-del__hint">{t('signInHint')}</p>
                <button className="chiro-del__btn chiro-del__btn--primary" onClick={handleSignIn}>
                  {t('signInBtn')}
                </button>
              </>
            ) : (
              <>
                <p className="chiro-del__account">{t('account', { email: user.email ?? '' })}</p>
                <button
                  className="chiro-del__btn chiro-del__btn--danger"
                  onClick={handleDelete}
                  disabled={status === 'working'}
                >
                  {status === 'working' ? t('deleting') : t('deleteBtn')}
                </button>
              </>
            )}

            {error && <p className="chiro-del__error">{error}</p>}
          </>
        )}
      </div>

      <style>{`
        .chiro-del {
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: #0b0b0f;
          color: #e5e5ea;
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
        }
        .chiro-del__card {
          width: 100%;
          max-width: 440px;
          background: #16161c;
          border: 1px solid #26262f;
          border-radius: 20px;
          padding: 32px 28px;
          box-shadow: 0 12px 40px rgba(0,0,0,.45);
        }
        .chiro-del__icon { font-size: 40px; display: block; text-align: center; margin-bottom: 12px; }
        .chiro-del__title { font-size: 24px; font-weight: 700; text-align: center; margin: 0 0 14px; color: #fff; }
        .chiro-del__text { font-size: 15px; line-height: 1.6; color: #b9b9c2; margin: 0 0 14px; }
        .chiro-del__list { margin: 0 0 14px; padding-left: 20px; color: #b9b9c2; font-size: 15px; line-height: 1.7; }
        .chiro-del__note { font-size: 13px; line-height: 1.6; color: #8a8a95; margin: 0 0 22px; }
        .chiro-del__hint { font-size: 14px; color: #b9b9c2; margin: 0 0 12px; }
        .chiro-del__account { font-size: 14px; font-weight: 600; color: #fff; text-align: center; margin: 0 0 16px; }
        .chiro-del__btn {
          width: 100%; border: 0; border-radius: 12px; padding: 14px;
          font-size: 16px; font-weight: 700; color: #fff; cursor: pointer;
          transition: opacity .15s ease;
        }
        .chiro-del__btn:disabled { opacity: .6; cursor: default; }
        .chiro-del__btn--primary { background: #0a84ff; }
        .chiro-del__btn--danger { background: #ff3b30; }
        .chiro-del__error { color: #ff6961; font-size: 13px; text-align: center; margin: 14px 0 0; }
      `}</style>
    </main>
  );
}
