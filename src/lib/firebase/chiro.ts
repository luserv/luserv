/**
 * Firebase client for the Chiro app (expense tracker).
 * Used only by the public account deletion page (/chiro/delete),
 * required by Google Play Data Safety.
 *
 * It is a named app ("chiro") to avoid colliding with a default app.
 * These keys are public by design (client config); security is enforced
 * by Firebase Security Rules.
 */
const firebaseConfig = {
  apiKey: 'AIzaSyB-dFd0BZJY38tU8nOY788oyFT8OevUDck',
  authDomain: 'segast0.firebaseapp.com',
  projectId: 'segast0',
  storageBucket: 'segast0.firebasestorage.app',
  messagingSenderId: '282199354699',
  appId: '1:282199354699:web:0cf2417fc5e93bb47accce'
};

/** Lazily loads Firebase so it never ships in the SSR bundle or other pages. */
export async function loadChiroFirebase() {
  const { initializeApp, getApps } = await import('firebase/app');
  const { getAuth } = await import('firebase/auth');
  const { getFirestore } = await import('firebase/firestore');

  const app = getApps().find((a) => a.name === 'chiro') ?? initializeApp(firebaseConfig, 'chiro');

  return { auth: getAuth(app), db: getFirestore(app) };
}
