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
  { imgPath: '/images/seo.png', title: 'Quality Focus', desc: 'Delivering high-quality results while maintaining attention to every detail.' },
  { imgPath: '/images/chat.png', title: 'Reliable Communication', desc: 'Keeping you updated at every step to ensure transparency and clarity.' },
  { imgPath: '/images/time.png', title: 'On-Time Delivery', desc: 'Making sure projects are completed on schedule, with quality & attention to detail.' }
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

export const expCards = [
  {
    imgPath: '/images/exp1.png',
    logoPath: '/images/logo1.png',
    title: 'Backend Developer',
    date: 'January 2023 - Present',
    responsibilities: [
      'Designed and maintained RESTful APIs with NestJS and PostgreSQL for production services.',
      'Collaborated with frontend teams to ensure seamless API integrations.',
      'Optimized query performance and implemented caching strategies using Redis.'
    ]
  },
  {
    imgPath: '/images/exp2.png',
    logoPath: '/images/logo2.png',
    title: 'Full Stack Developer',
    date: 'June 2021 - December 2022',
    responsibilities: [
      'Built and deployed full-stack applications using Next.js and NestJS.',
      'Implemented CI/CD pipelines on Debian-based servers with Docker.',
      'Worked with backend engineers to integrate third-party services and APIs.'
    ]
  },
  {
    imgPath: '/images/exp3.png',
    logoPath: '/images/logo3.png',
    title: 'Cloud & DevOps Engineer',
    date: 'March 2020 - May 2021',
    responsibilities: [
      'Managed Debian-based server infrastructure and automated deployments with Ansible.',
      'Set up monitoring and alerting with Prometheus and Grafana.',
      'Containerized services using Docker and orchestrated with Docker Compose.'
    ]
  }
];

export const socialImgs = [
  { name: 'insta', imgPath: '/images/insta.png' },
  { name: 'fb', imgPath: '/images/fb.png' },
  { name: 'x', imgPath: '/images/x.png' },
  { name: 'linkedin', imgPath: '/images/linkedin.png' }
];

// Chiro lives on its own site; update here when it moves to a custom domain.
export const CHIRO_URL = 'https://chiro-4rs.pages.dev';
export const CONTACTS_URL = 'https://contacts-9m7.pages.dev';
