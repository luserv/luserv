import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

/**
 * Configuración del proyecto Firebase de la app Chiro (control de gastos).
 * Se usa únicamente en la página pública de eliminación de cuenta
 * (/[locale]/chiro/delete), requisito de Data Safety de Google Play.
 *
 * Es una named app ("chiro") para no colisionar con la app default por si
 * el portfolio usara Firebase en el futuro. Estas claves son públicas por
 * diseño (config de cliente); la seguridad la dan las Firebase Security Rules.
 */
const firebaseConfig = {
  apiKey: 'AIzaSyB-dFd0BZJY38tU8nOY788oyFT8OevUDck',
  authDomain: 'segast0.firebaseapp.com',
  projectId: 'segast0',
  storageBucket: 'segast0.firebasestorage.app',
  messagingSenderId: '282199354699',
  appId: '1:282199354699:web:0cf2417fc5e93bb47accce',
};

const app =
  getApps().find((a) => a.name === 'chiro') ?? initializeApp(firebaseConfig, 'chiro');

export const chiroAuth = getAuth(app);
export const chiroDb = getFirestore(app);
