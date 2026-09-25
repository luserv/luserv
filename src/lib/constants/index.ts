export const navLinks = [
  { name: 'Work', link: '#work' },
  { name: 'Experience', link: '#experience' },
  { name: 'Skills', link: '#skills' }
];

export const words = [
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' }
];

export const abilities = [
  { icon: 'wifi-off', title: 'Offline-first', desc: 'Apps that work without a connection and back up to Google Drive.' },
  { icon: 'monitor-smartphone', title: 'Cross-platform', desc: 'Android, Windows, Linux and the web from one product.' },
  { icon: 'layers', title: 'End-to-end', desc: 'Frontend, API, database and deployment, all owned by me.' }
];

export const techStackIcons = [
  { name: 'React, Next.js & React Native', modelPath: '/models/react_logo-transformed.glb', scale: 1, rotation: [0, 0, 0] as [number, number, number] },
  { name: 'Node.js & NestJS', modelPath: '/models/node-transformed.glb', scale: 5, rotation: [0, -Math.PI / 2, 0] as [number, number, number] },
  { name: 'Git, CI/CD & Linux', modelPath: '/models/git-svg-transformed.glb', scale: 0.05, rotation: [0, -Math.PI / 4, 0] as [number, number, number] }
];

// Brand-icon skill chips shown below the 3D tech cards. Colors are the
// official brand hex, except black logos (Next.js, Vercel) which render
// white to stay readable on the dark background.
export const skillChips = [
  { name: 'Go', icon: 'siGo', color: '#00ADD8' },
  { name: 'TypeScript', icon: 'siTypescript', color: '#3178C6' },
  { name: 'SvelteKit', icon: 'siSvelte', color: '#FF3E00' },
  { name: 'Next.js', icon: 'siNextdotjs', color: '#FFFFFF' },
  { name: 'NestJS', icon: 'siNestjs', color: '#E0234E' },
  { name: 'PostgreSQL', icon: 'siPostgresql', color: '#4169E1' },
  { name: 'React Native', icon: 'siReact', color: '#61DAFB' },
  { name: 'Supabase', icon: 'siSupabase', color: '#3FCF8E' },
  { name: 'Cloudflare', icon: 'siCloudflare', color: '#F38020' },
  { name: 'Vercel', icon: 'siVercel', color: '#FFFFFF' }
];

// Deployment stack shown on project cards that are actually live on this
// infrastructure (Chiro, Contacts). Do not add cards here without a verified
// live deployment.
export const deploymentStack = [
  { name: 'Cloudflare', icon: 'siCloudflare', color: '#F38020' },
  { name: 'Vercel', icon: 'siVercel', color: '#FFFFFF' },
  { name: 'Supabase', icon: 'siSupabase', color: '#3FCF8E' }
];

// Real project & learning timeline (no formal jobs — see odd/tasks/portfolio-real-content.md).
// icon/color follow the same brandIcons lookup as skillChips/deploymentStack.
export const expCards = [
  {
    imgPaths: ['/images/projects/contacts.webp'],
    icon: 'siReact',
    color: '#61DAFB',
    title: 'Contacts — offline-first contacts app',
    date: 'Early 2024',
    responsibilities: [
      'Built a cross-platform contacts manager with React Native (Android) and Electron (Windows and Linux) on a local SQLite database.',
      'Backed up the .db file to Google Drive (app-created files only, drive.file scope) and restored it on another device after Google Sign-In through Firebase.',
      'Features: VCF/vCard import, birthday calendar and notifications, advanced search filters, English/Spanish i18n.'
    ]
  },
  {
    imgPaths: ['/images/projects/chiro.webp'],
    icon: 'siReact',
    color: '#61DAFB',
    title: 'Chiro — offline-first personal finance app',
    date: 'Late 2024',
    responsibilities: [
      'Reused the same offline-first architecture (Expo / React Native + Electron + expo-sqlite, Google Drive backup, Firebase Google Sign-In) for expenses, budgets and loans.',
      'The Android app is in closed testing on Google Play.'
    ]
  },
  {
    imgPaths: ['/images/projects/frontend-mentor.webp'],
    icon: 'siNextdotjs',
    color: '#FFFFFF',
    title: 'Frontend Mentor challenges',
    date: 'July 2025',
    responsibilities: [
      'Solved 9 Frontend Mentor challenges across newbie, junior and intermediate levels, from a QR code component to a todo app.',
      'Built with Next.js 15, React 19, TypeScript and Tailwind CSS 4, following each design closely and responsive down to mobile.'
    ]
  },
  {
    imgPaths: ['/images/projects/chiro.webp', '/images/projects/contacts.webp'],
    icon: 'siGo',
    color: '#00ADD8',
    title: 'Scaling to the web: Go, SvelteKit and PostgreSQL',
    date: '2026',
    responsibilities: [
      'Rebuilt Chiro and Contacts as web apps with a SvelteKit frontend, a Go API and PostgreSQL.',
      'Deployed the frontend on Cloudflare, the API on Vercel and the database on Supabase.',
      'All projects remain active and maintained.'
    ]
  },
  {
    imgPaths: ['/images/projects/planner.webp'],
    icon: 'siGo',
    color: '#00ADD8',
    title: 'Planner — task planner with visual countdown timers',
    date: 'Now — in progress',
    responsibilities: [
      'Task planner with visual countdown timers, class schedules and day planning.',
      'Built with a Go API (Chi router, pgx), a SvelteKit 5 frontend and PostgreSQL.'
    ]
  }
];

export const socialLinks = [
  { name: 'GitHub', icon: 'siGithub', href: 'https://github.com/luserv' },
  { name: 'Instagram', icon: 'siInstagram', href: 'https://www.instagram.com/luser.v2/' },
  { name: 'Facebook', icon: 'siFacebook', href: 'https://www.facebook.com/profile.php?id=61579794090838' },
  { name: 'Email', icon: 'mail', href: 'mailto:u3.dev@icloud.com' }
];

// Chiro lives on its own site; update here when it moves to a custom domain.
export const CHIRO_URL = 'https://chiro-4rs.pages.dev';
export const CONTACTS_URL = 'https://contacts-9m7.pages.dev';
