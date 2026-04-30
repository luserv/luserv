export const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
];

export const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

export const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 30, suffix: "+", label: "Satisfied Clients" },
  { value: 50, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Client Retention Rate" },
];

export const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

export const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

export const techStackImgs = [
  { name: "Next.js Developer", imgPath: "/images/logos/react.png" },
  { name: "TypeScript Developer", imgPath: "/images/logos/python.svg" },
  { name: "Backend Developer", imgPath: "/images/logos/node.png" },
  { name: "Database Engineer", imgPath: "/images/logos/three.png" },
  { name: "DevOps & Linux", imgPath: "/images/logos/git.svg" },
];

export const techStackIcons = [
  {
    name: "Next.js Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: "TypeScript Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0] as [number, number, number],
  },
  {
    name: "Database Engineer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: "DevOps & Linux",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0] as [number, number, number],
  },
];

export const expCards = [
  {
    review:
      "Kaento brought incredible technical depth to our platform. His work on our Node.js backend and PostgreSQL layer significantly improved reliability and developer experience.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Backend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Designed and maintained RESTful APIs with NestJS and PostgreSQL for production services.",
      "Collaborated with frontend teams to ensure seamless API integrations.",
      "Optimized query performance and implemented caching strategies using Redis.",
    ],
  },
  {
    review:
      "Kaento's full-stack contributions elevated our product quality. He consistently delivered clean, maintainable solutions across the entire stack.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2021 - December 2022",
    responsibilities: [
      "Built and deployed full-stack applications using Next.js and NestJS.",
      "Implemented CI/CD pipelines on Debian-based servers with Docker.",
      "Worked with backend engineers to integrate third-party services and APIs.",
    ],
  },
  {
    review:
      "Kaento's expertise in cloud architecture helped us scale our infrastructure reliably. His knowledge of Linux systems and automation saved us countless hours.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Cloud & DevOps Engineer",
    date: "March 2020 - May 2021",
    responsibilities: [
      "Managed Debian-based server infrastructure and automated deployments with Ansible.",
      "Set up monitoring and alerting with Prometheus and Grafana.",
      "Containerized services using Docker and orchestrated with Docker Compose.",
    ],
  },
];

export const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

export const testimonials = [
  {
    name: "Santiago Mora",
    mentions: "@santiagomora_dev",
    review:
      "Kaento is an exceptional developer. He took our complex requirements and delivered a robust, production-ready API. His problem-solving skills and attention to performance are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Valeria Torres",
    mentions: "@valeriatorres",
    review:
      "Working with Kaento was a fantastic experience. He modernized our legacy backend into a clean NestJS architecture. His dedication to code quality and best practices is unmatched.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Diego Fuentes",
    mentions: "@diegofuentes",
    review:
      "Collaborating with Kaento was an absolute pleasure. His professionalism and deep knowledge of TypeScript and PostgreSQL were evident throughout the project. He is the ideal partner for any serious software initiative.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Andrea Paredes",
    mentions: "@andreaparedes",
    review:
      "Kaento turned our unstable server setup into a reliable, automated infrastructure. He delivered everything on time with clear documentation. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Mateo Guzmán",
    mentions: "@mateoguzman",
    review:
      "Kaento's expertise in Next.js and cloud deployments is truly impressive. Since he revamped our platform, performance has significantly improved and our users are much happier.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Fernanda Ríos",
    mentions: "@fernandarios",
    review:
      "Kaento understood our requirements perfectly and delivered a full-stack solution that exceeded expectations. His skills across frontend, backend, and DevOps are top-notch.",
    imgPath: "/images/client6.png",
  },
];

export const socialImgs = [
  { name: "insta", imgPath: "/images/insta.png" },
  { name: "fb", imgPath: "/images/fb.png" },
  { name: "x", imgPath: "/images/x.png" },
  { name: "linkedin", imgPath: "/images/linkedin.png" },
];
