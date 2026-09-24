<script lang="ts">
  import { getLocale } from '$lib/i18n';
  import ChiroNav from '../ChiroNav.svelte';
  import ChiroFooter from '../ChiroFooter.svelte';
  import { getChiroContent } from '../content';
  import { onMount } from 'svelte';

  const c = $derived(getChiroContent(getLocale()));

  let btnEl: HTMLButtonElement;
  let btnText = $state('');
  let btnClass = $state('chiro-del__btn chiro-del__btn--primary');
  let status = $state<'idle' | 'working' | 'done'>('idle');
  let error = $state<string | null>(null);
  let ready = $state(false);
  let user = $state<any>(null);
  let introText = $state('');
  let doneTitle = $state('');
  let doneText = $state('');
  let signInHint = $state('');
  let signInBtn = $state('');
  let titleText = $state('');
  let item1 = $state('');
  let item2 = $state('');
  let localNote = $state('');
  let deleteBtn = $state('');
  let deleting = $state('');
  let confirmText = $state('');
  let accountText = $state('');

  const chiroDeleteMessages = {
    es: {
      title: 'Eliminar cuenta de Chiro',
      intro: 'Al eliminar tu cuenta se borrarán de forma permanente y no se podrán recuperar:',
      item1: 'Tu licencia y datos de acceso',
      item2: 'Tu historial de uso en nuestros servidores',
      localNote: 'Los gastos guardados localmente en tu dispositivo no se eliminan automáticamente.',
      signInHint: 'Iniciá sesión con la cuenta que querés eliminar:',
      signInBtn: 'Iniciar sesión con Google',
      deleteBtn: 'Eliminar mi cuenta',
      deleting: 'Eliminando…',
      confirm: '¿Estás seguro? Esta acción eliminará tu cuenta y todos tus datos de forma permanente. No se puede deshacer.',
      doneTitle: 'Cuenta eliminada',
      doneText: 'Tu cuenta y todos tus datos en nuestros servidores fueron eliminados permanentemente.',
      errorGeneric: 'Ocurrió un error al eliminar la cuenta. Intentá de nuevo.'
    },
    en: {
      title: 'Delete your Chiro account',
      intro: 'Deleting your account will permanently and irreversibly remove:',
      item1: 'Your license and sign-in data',
      item2: 'Your usage history on our servers',
      localNote: 'Expenses stored locally on your device are not deleted automatically.',
      signInHint: 'Sign in with the account you want to delete:',
      signInBtn: 'Sign in with Google',
      deleteBtn: 'Delete my account',
      deleting: 'Deleting…',
      confirm: 'Are you sure? This will permanently delete your account and all your data. This cannot be undone.',
      doneTitle: 'Account deleted',
      doneText: 'Your account and all your data on our servers have been permanently deleted.',
      errorGeneric: 'Something went wrong while deleting your account. Please try again.'
    }
  };

  function setTranslations(locale: string) {
    const d = getChiroContent(locale);
    const msgs = locale === 'es-ES' ? chiroDeleteMessages.es : chiroDeleteMessages.en;

    titleText = msgs.title;
    doneTitle = msgs.doneTitle;
    doneText = msgs.doneText;
    signInHint = msgs.signInHint;
    signInBtn = msgs.signInBtn;
    item1 = msgs.item1;
    item2 = msgs.item2;
    localNote = msgs.localNote;
    introText = msgs.intro;
    deleteBtn = msgs.deleteBtn;
    deleting = msgs.deleting;
    confirmText = msgs.confirm;
  }

  onMount(async () => {
    setTranslations(getLocale());

    const { initializeApp, getApps } = await import('firebase/app');
    const { getAuth, GoogleAuthProvider, signInWithPopup, deleteUser, reauthenticateWithPopup, signOut, onAuthStateChanged } = await import('firebase/auth');
    const { getFirestore, deleteDoc, doc } = await import('firebase/firestore');

    const firebaseConfig = {
      apiKey: 'AIzaSyB-dFd0BZJY38tU8nOY788oyFT8OevUDck',
      authDomain: 'segast0.firebaseapp.com',
      projectId: 'segast0',
      storageBucket: 'segast0.firebasestorage.app',
      messagingSenderId: '282199354699',
      appId: '1:282199354699:web:0cf2417fc5e93bb47accce'
    };

    const app = getApps().find(a => a.name === 'chiro') ?? initializeApp(firebaseConfig, 'chiro');
    const auth = getAuth(app);
    const db = getFirestore(app);

    ready = true;

    onAuthStateChanged(auth, (u) => {
      user = u;
      if (u) {
        btnText = deleteBtn;
        btnClass = 'chiro-del__btn chiro-del__btn--danger';
        accountText = `Cuenta: ${u.email}`;
      }
    });

    if (btnEl) {
      btnEl.addEventListener('click', async () => {
        if (user) {
          if (!confirm(confirmText)) return;
          status = 'working';
          try {
            try { await deleteDoc(doc(db, 'licenses', user.uid)); } catch {}
            try { await deleteUser(user); } catch (e: any) {
              if (e.code === 'auth/requires-recent-login') {
                const p = new GoogleAuthProvider();
                p.setCustomParameters({ prompt: 'select_account' });
                await reauthenticateWithPopup(user, p);
                await deleteUser(user);
              } else throw e;
            }
            await signOut(auth);
            status = 'done';
          } catch (e: any) {
            error = e.message ?? 'Error';
            status = 'idle';
          }
        } else {
          const p = new GoogleAuthProvider();
          p.setCustomParameters({ prompt: 'select_account' });
          await signInWithPopup(auth, p);
        }
      });
    }
  });
</script>

<svelte:head>
  <title>Eliminar cuenta de Chiro</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="chiro">
  <ChiroNav />

  <main class="chiro__wrap" style="padding: 80px 24px;">
    <div class="chiro-del__card">
      {#if status === 'done'}
        <span class="chiro-del__icon" aria-hidden="true">✅</span>
        <h1 class="chiro-del__title">{doneTitle}</h1>
        <p class="chiro-del__text">{doneText}</p>
      {:else}
        <span class="chiro-del__icon" aria-hidden="true">⚠️</span>
        <h1 class="chiro-del__title">{titleText}</h1>
        <p class="chiro-del__text">{introText}</p>
        <ul class="chiro-del__list">
          <li>{item1}</li>
          <li>{item2}</li>
        </ul>
        <p class="chiro-del__note">{localNote}</p>

        {#if !ready}
          <p class="chiro-del__hint">…</p>
        {:else if !user}
          <p class="chiro-del__hint">{signInHint}</p>
          <button bind:this={btnEl} class={btnClass}>
            {signInBtn}
          </button>
        {:else}
          <p class="chiro-del__account">{accountText}</p>
          <button
            bind:this={btnEl}
            class={btnClass}
            disabled={status === 'working'}
          >
            {status === 'working' ? deleting : deleteBtn}
          </button>
        {/if}

        {#if error}
          <p class="chiro-del__error">{error}</p>
        {/if}
      {/if}
    </div>
  </main>

  <ChiroFooter />
</div>

<style>
  .chiro-del__card {
    width: 100%; max-width: 440px; margin: 0 auto;
    background: #16161c; border: 1px solid #26262f; border-radius: 20px;
    padding: 32px 28px; box-shadow: 0 12px 40px rgba(0,0,0,.45); color: #e5e5ea;
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
</style>
