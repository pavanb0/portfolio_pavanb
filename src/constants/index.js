import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  android,
  python,
  MetaBackground
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [

  {
    name: 'JavaScript',
    icon: javascript,
  },
  
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'docker',
    icon: docker,
  },


];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'MetaFortess',
    description: "MetaFortress, backed by React, offers seamless cloud backup for mobile and web. Safeguard photos, videos, and more on Android and beyond. Your digital fortress for ultimate data security.",
     tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: MetaBackground,
    repo: 'https://github.com/pavanb0/MetaFortess',
    demo: 'https://github.com/pavanb0/MetaFortess',
  },
  {
    id: 'project-2',
    name: 'VideoDownloader',
    description:
      'Youtube Video downloader app for android and ios built with React Native',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: MetaBackground,
    repo: 'https://github.com/pavanb0/VideoDownload',
    demo: 'https://github.com/pavanb0/VideoDownload',
  },
  {
    id: 'project-3',
    name: 'GoodMorning Detector',
    description: 'image gallary which filters goodmorning images mainly shared on platform like whatsapp, built with flask and tesseract for optical charachter recognition',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: MetaBackground,
    repo: 'https://github.com/pavanb0/Goodmorningdetector',
    demo: 'https://github.com/pavanb0/Goodmorningdetector',
  },
  {
    id: 'project-4',
    name: 'ToolForAndroidDevs',
    description: "give basic commands to your android device from your machine through gui",
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: MetaBackground,
    repo: 'https://github.com/pavanb0/ToolForAndroidDevs',
    demo: 'https://github.com/pavanb0/ToolForAndroidDevs',
  },
  {
    id: 'project-5',
    name: 'InfinyRun',
    description:
      'A game created in unity game engine which has infinity running with gameover and points',
      tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: MetaBackground,
    repo: 'https://github.com/pavanb0/InfinityRunner',
    demo: 'https://github.com/pavanb0/InfinityRunner',
  },
];

export { services, technologies, experiences, projects };
