/**
 * Contenido bilingüe de la sección pública de Chiro (landing + legales).
 * Se mantiene aquí en vez de en messages/*.json porque la prosa legal es larga
 * y queda más legible/mantenible como datos tipados.
 */
import { defaultLocale } from '@/i18n/locales';

export const CONTACT_EMAIL = 'k4ento@gmail.com';
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.luserv.chiro';
export const LAST_UPDATED = '2026-05-29';

interface Feature {
  icon: string;
  title: string;
  text: string;
}

interface Section {
  heading: string;
  body: string[];
}

interface ChiroContent {
  nav: { features: string; privacy: string; terms: string };
  hero: {
    badge: string;
    title: string;
    tagline: string;
    description: string;
    cta: string;
    free: string;
  };
  featuresTitle: string;
  features: Feature[];
  footer: { terms: string; privacy: string; delete: string; contact: string; rights: string };
  terms: { title: string; updated: string; intro: string; sections: Section[] };
  privacy: { title: string; updated: string; intro: string; sections: Section[] };
}

const es: ChiroContent = {
  nav: { features: 'Características', privacy: 'Privacidad', terms: 'Términos' },
  hero: {
    badge: 'Disponible para Android',
    title: 'Chiro',
    tagline: 'Tu control de gastos, siempre contigo.',
    description:
      'Registrá ingresos y gastos, organizá tus cuentas y entendé en qué se te va la plata. Funciona sin conexión y tus datos viven en tu dispositivo.',
    cta: 'Descargar en Google Play',
    free: 'Gratis · Sin conexión · Tus datos son tuyos',
  },
  featuresTitle: 'Todo lo que necesitás para tus finanzas',
  features: [
    { icon: '💸', title: 'Ingresos y gastos', text: 'Registrá cada movimiento con categoría, cuenta y fecha en segundos.' },
    { icon: '📊', title: 'Estadísticas claras', text: 'Resumen mensual de ingresos, gastos y balance, con gráficos por categoría.' },
    { icon: '🎯', title: 'Presupuestos', text: 'Definí topes por categoría y seguí cuánto te queda durante el mes.' },
    { icon: '🤝', title: 'Préstamos', text: 'Llevá la cuenta de lo que prestaste y lo que te deben, persona por persona.' },
    { icon: '🏦', title: 'Múltiples cuentas y monedas', text: 'Billeteras, efectivo o banco, cada una en su moneda.' },
    { icon: '☁️', title: 'Respaldo en Google Drive', text: 'Guardá una copia de tu base de datos en tu propio Drive cuando quieras.' },
  ],
  footer: {
    terms: 'Términos y Condiciones',
    privacy: 'Política de Privacidad',
    delete: 'Eliminar cuenta',
    contact: 'Contacto',
    rights: 'Todos los derechos reservados.',
  },
  terms: {
    title: 'Términos y Condiciones',
    updated: 'Última actualización',
    intro:
      'Estos Términos y Condiciones rigen el uso de la aplicación Chiro ("la App"). Al instalar o usar la App aceptás estos términos. Si no estás de acuerdo, no la uses.',
    sections: [
      {
        heading: '1. Descripción del servicio',
        body: [
          'Chiro es una aplicación de control de gastos personales que funciona principalmente sin conexión. Los datos financieros que ingresás (gastos, ingresos, cuentas, categorías, presupuestos y préstamos) se guardan localmente en tu dispositivo.',
        ],
      },
      {
        heading: '2. Cuenta y acceso',
        body: [
          'Podés usar la App como invitado o iniciar sesión con tu cuenta de Google. El inicio de sesión se usa para gestionar tu licencia (eliminación de anuncios) y para habilitar el respaldo opcional en Google Drive.',
        ],
      },
      {
        heading: '3. Licencia y compras',
        body: [
          'La App es gratuita e incluye anuncios. Podés adquirir una licencia para remover los anuncios. El pago de la licencia es un cargo único asociado a tu cuenta. No se realizan reembolsos salvo que la ley aplicable lo exija.',
        ],
      },
      {
        heading: '4. Respaldo en Google Drive',
        body: [
          'Si lo activás, la App puede subir una copia de tu base de datos a tu propio Google Drive usando el permiso "drive.file", que solo da acceso a los archivos creados por la App. Vos sos responsable de esos respaldos.',
        ],
      },
      {
        heading: '5. Uso aceptable',
        body: [
          'Te comprometés a no usar la App con fines ilegales ni a intentar vulnerar, descompilar o interferir con su funcionamiento.',
        ],
      },
      {
        heading: '6. Limitación de responsabilidad',
        body: [
          'La App se provee "tal cual", sin garantías de ningún tipo. No nos hacemos responsables por pérdidas de datos, decisiones financieras tomadas en base a la información mostrada, ni por daños derivados del uso de la App. Hacé respaldos regularmente.',
        ],
      },
      {
        heading: '7. Cambios',
        body: [
          'Podemos actualizar estos términos en cualquier momento. Los cambios se publican en esta página con su fecha de actualización.',
        ],
      },
      {
        heading: '8. Contacto',
        body: [`Ante cualquier consulta, escribinos a ${CONTACT_EMAIL}.`],
      },
    ],
  },
  privacy: {
    title: 'Política de Privacidad',
    updated: 'Última actualización',
    intro:
      'Esta Política de Privacidad describe cómo Chiro ("la App") maneja tu información. Diseñamos la App con un enfoque offline-first: tus datos financieros viven en tu dispositivo, no en nuestros servidores.',
    sections: [
      {
        heading: '1. Datos que se guardan en tu dispositivo',
        body: [
          'Tus gastos, ingresos, cuentas, categorías, presupuestos y préstamos se almacenan localmente en tu dispositivo (base de datos SQLite). Esta información no se envía a nuestros servidores.',
        ],
      },
      {
        heading: '2. Datos asociados a tu cuenta',
        body: [
          'Si iniciás sesión con Google, recibimos tu identificador de usuario y correo electrónico para gestionar tu licencia. Guardamos un documento mínimo de licencia en Firebase (Google) asociado a tu identificador. No almacenamos tus datos financieros en la nube.',
        ],
      },
      {
        heading: '3. Respaldo en Google Drive',
        body: [
          'Si activás el respaldo, una copia de tu base de datos se sube a tu propio Google Drive mediante el permiso "drive.file". Solo accedemos a los archivos que la App crea; nunca al resto de tu Drive.',
        ],
      },
      {
        heading: '4. Publicidad',
        body: [
          'La versión gratuita muestra anuncios a través de Google AdMob, que puede recolectar identificadores del dispositivo conforme a su propia política de privacidad. Si adquirís la licencia, se eliminan los anuncios.',
        ],
      },
      {
        heading: '5. Servicios de terceros',
        body: [
          'Usamos servicios de Google (Firebase Authentication, Firestore, Google Drive y AdMob). El tratamiento de datos por parte de Google se rige por sus propias políticas.',
        ],
      },
      {
        heading: '6. Eliminación de tu cuenta y datos',
        body: [
          'Podés eliminar tu cuenta y los datos asociados (licencia e identificadores) en cualquier momento desde la App o desde la página de eliminación de cuenta. Los datos guardados localmente en tu dispositivo se borran limpiando los datos de la App desde los Ajustes del sistema.',
        ],
      },
      {
        heading: '7. Menores',
        body: ['La App no está dirigida a menores de 13 años y no recolectamos conscientemente datos de menores.'],
      },
      {
        heading: '8. Contacto',
        body: [`Si tenés preguntas sobre esta política, escribinos a ${CONTACT_EMAIL}.`],
      },
    ],
  },
};

const en: ChiroContent = {
  nav: { features: 'Features', privacy: 'Privacy', terms: 'Terms' },
  hero: {
    badge: 'Available for Android',
    title: 'Chiro',
    tagline: 'Your expense tracker, always with you.',
    description:
      'Log income and expenses, organize your accounts and understand where your money goes. Works offline and your data stays on your device.',
    cta: 'Get it on Google Play',
    free: 'Free · Offline · Your data is yours',
  },
  featuresTitle: 'Everything you need for your finances',
  features: [
    { icon: '💸', title: 'Income & expenses', text: 'Record every transaction with category, account and date in seconds.' },
    { icon: '📊', title: 'Clear stats', text: 'Monthly summary of income, expenses and balance, with charts by category.' },
    { icon: '🎯', title: 'Budgets', text: 'Set limits per category and track how much you have left this month.' },
    { icon: '🤝', title: 'Loans', text: 'Keep track of what you lent and what you are owed, person by person.' },
    { icon: '🏦', title: 'Multiple accounts & currencies', text: 'Wallets, cash or bank, each in its own currency.' },
    { icon: '☁️', title: 'Google Drive backup', text: 'Save a copy of your database to your own Drive whenever you want.' },
  ],
  footer: {
    terms: 'Terms & Conditions',
    privacy: 'Privacy Policy',
    delete: 'Delete account',
    contact: 'Contact',
    rights: 'All rights reserved.',
  },
  terms: {
    title: 'Terms & Conditions',
    updated: 'Last updated',
    intro:
      'These Terms & Conditions govern the use of the Chiro application ("the App"). By installing or using the App you accept these terms. If you do not agree, do not use it.',
    sections: [
      {
        heading: '1. Service description',
        body: [
          'Chiro is a personal expense tracking app that works mainly offline. The financial data you enter (expenses, income, accounts, categories, budgets and loans) is stored locally on your device.',
        ],
      },
      {
        heading: '2. Account and access',
        body: [
          'You can use the App as a guest or sign in with your Google account. Sign-in is used to manage your license (ad removal) and to enable the optional Google Drive backup.',
        ],
      },
      {
        heading: '3. License and purchases',
        body: [
          'The App is free and ad-supported. You may purchase a license to remove ads. The license is a one-time charge linked to your account. No refunds are issued unless required by applicable law.',
        ],
      },
      {
        heading: '4. Google Drive backup',
        body: [
          'If enabled, the App can upload a copy of your database to your own Google Drive using the "drive.file" scope, which only grants access to files created by the App. You are responsible for those backups.',
        ],
      },
      {
        heading: '5. Acceptable use',
        body: [
          'You agree not to use the App for unlawful purposes or to attempt to breach, decompile or interfere with its operation.',
        ],
      },
      {
        heading: '6. Limitation of liability',
        body: [
          'The App is provided "as is", without warranties of any kind. We are not liable for data loss, financial decisions made based on displayed information, or damages arising from use of the App. Back up your data regularly.',
        ],
      },
      {
        heading: '7. Changes',
        body: ['We may update these terms at any time. Changes are posted on this page with the update date.'],
      },
      {
        heading: '8. Contact',
        body: [`For any questions, contact us at ${CONTACT_EMAIL}.`],
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated',
    intro:
      'This Privacy Policy describes how Chiro ("the App") handles your information. The App is designed offline-first: your financial data lives on your device, not on our servers.',
    sections: [
      {
        heading: '1. Data stored on your device',
        body: [
          'Your expenses, income, accounts, categories, budgets and loans are stored locally on your device (SQLite database). This information is not sent to our servers.',
        ],
      },
      {
        heading: '2. Data linked to your account',
        body: [
          'If you sign in with Google, we receive your user ID and email to manage your license. We store a minimal license document in Firebase (Google) linked to your ID. We do not store your financial data in the cloud.',
        ],
      },
      {
        heading: '3. Google Drive backup',
        body: [
          'If you enable backup, a copy of your database is uploaded to your own Google Drive via the "drive.file" scope. We only access files the App creates; never the rest of your Drive.',
        ],
      },
      {
        heading: '4. Advertising',
        body: [
          'The free version shows ads through Google AdMob, which may collect device identifiers under its own privacy policy. Purchasing the license removes ads.',
        ],
      },
      {
        heading: '5. Third-party services',
        body: [
          'We use Google services (Firebase Authentication, Firestore, Google Drive and AdMob). Google’s data processing is governed by its own policies.',
        ],
      },
      {
        heading: '6. Deleting your account and data',
        body: [
          'You can delete your account and associated data (license and identifiers) at any time from the App or the account deletion page. Data stored locally on your device is removed by clearing the App data in your system settings.',
        ],
      },
      {
        heading: '7. Minors',
        body: ['The App is not directed to children under 13 and we do not knowingly collect data from minors.'],
      },
      {
        heading: '8. Contact',
        body: [`If you have questions about this policy, contact us at ${CONTACT_EMAIL}.`],
      },
    ],
  },
};

const byLocale: Record<string, ChiroContent> = { 'es-ES': es, 'en-US': en };

export function getChiroContent(locale: string): ChiroContent {
  return byLocale[locale] ?? byLocale[defaultLocale] ?? en;
}
