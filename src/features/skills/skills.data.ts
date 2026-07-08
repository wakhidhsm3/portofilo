export interface CoreExpertise {
  title: string;
  description: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const coreExpertiseList: CoreExpertise[] = [
  {
    title: 'Fullstack Web Development',
    description: 'Membangun aplikasi terintegrasi penuh dari antarmuka interaktif React hingga REST API Node.js/Express.',
  },
  {
    title: 'Legacy PHP Modernization',
    description: 'Melakukan migrasi, pemeliharaan, dan refactoring aplikasi PHP lawas (CodeIgniter 3, Laravel) ke standar modern.',
  },
  {
    title: 'Database Optimization & API Design',
    description: 'Merancang skema database PostgreSQL/MySQL yang efisien dan mengoptimalkan query untuk mengurangi waktu respon API.',
  },
  {
    title: 'Figma-to-Code Implementation',
    description: 'Menerjemahkan desain high-fidelity Figma menjadi kode frontend yang pixel-perfect, responsif, dan kaya animasi.',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'SASS' },
      { name: 'Javascript' },
      { name: 'Typescript' },
      { name: 'PHP' },
      { name: 'Golang' },
    ],
  },
  {
    title: 'Frontend & Styling',
    skills: [
      { name: 'React JS' },
      { name: 'Next Js' },
      { name: 'Tailwind CSS' },
      { name: 'Chakra UI' },
    ],
  },
  {
    title: 'Backend & Framework',
    skills: [
      { name: 'Node JS' },
      { name: 'Express Js' },
      { name: 'Nest Js' },
      { name: 'Laravel' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Mongo DB' },
    ],
  },
]
