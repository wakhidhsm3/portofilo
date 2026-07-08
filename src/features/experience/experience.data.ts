export interface WorkExperience {
  company: string;
  role: string;
  type: 'Full-time' | 'Part-time' | 'Freelance' | 'Magang';
  period: string;
  techStack: string[];
  description: string[];
}

export interface Education {
  institution: string;
  major: string;
  period: string;
  gpa: string;
}

export const workExperiencesList: WorkExperience[] = [
  {
    company: 'Direktorat Perencanaan dan Keuangan Amikom (DPK)',
    role: 'Fullstack Website Developer',
    type: 'Freelance',
    period: 'Nov 2023 – Feb 2025',
    techStack: ['React JS', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Express JS'],
    description: [
      'Melakukan optimasi UI/UX sistem perencanaan dan penganggaran universitas.',
      'Melakukan perbaikan bug krusial, pemeliharaan berkelanjutan, serta pengoptimalan query database.',
      'Mengembangkan RESTful API baru untuk mempermudah integrasi sistem antar bagian.'
    ]
  },
  {
    company: 'Direktorat Perencanaan dan Keuangan Amikom (DPK)',
    role: 'Fullstack Website Developer',
    type: 'Magang',
    period: 'Agu 2023 – Nov 2023',
    techStack: ['React (TypeScript)', 'Tailwind CSS', 'Node.js (Express)', 'PostgreSQL'],
    description: [
      'Membangun modul frontend responsif menggunakan React dengan TypeScript.',
      'Mendesain dan menyusun backend API menggunakan Express JS serta mengelola skema database PostgreSQL.',
      'Bekerja sama dalam tim internal DPK untuk migrasi sistem lama ke arsitektur modern.'
    ]
  },
  {
    company: 'Baby Cloudfoam Indonesia',
    role: 'Fullstack Website Developer',
    type: 'Freelance',
    period: 'Agu 2023 – Okt 2023',
    techStack: ['CodeIgniter 3', 'Bootstrap', 'MySQL', 'JavaScript'],
    description: [
      'Menangani debugging sistem e-commerce serta optimasi basis data MySQL.',
      'Meningkatkan performa transaksi dan performa checkout untuk meniadakan data pesanan ganda.',
      'Melakukan pemeliharaan fitur panel admin dan laporan penjualan.'
    ]
  },
  {
    company: 'Kantor Urusan Agama Ngampilan (KUA)',
    role: 'Fullstack Website Developer',
    type: 'Freelance',
    period: 'Des 2021 – Feb 2022',
    techStack: ['CodeIgniter 3', 'Bootstrap', 'SCSS', 'MySQL', 'Figma'],
    description: [
      'Menerjemahkan rancangan antarmuka Figma menjadi kode frontend menggunakan Bootstrap dan kustomisasi SCSS.',
      'Mengembangkan modul pendaftaran nikah online dan administrasi surat-menyurat di backend.',
      'Mengintegrasikan database MySQL dan menguji fungsionalitas sistem sebelum dirilis.'
    ]
  },
  {
    company: 'Aspeksindo',
    role: 'Backend Developer',
    type: 'Freelance',
    period: 'Sep 2021 – Nov 2021',
    techStack: ['CodeIgniter 3', 'MySQL', 'RESTful API'],
    description: [
      'Merancang dan mengimplementasikan RESTful API untuk integrasi data keanggotaan maritim.',
      'Mengoptimalkan query database MySQL serta melakukan debugging pada endpoint keanggotaan.',
      'Menyusun dokumentasi endpoint API bagi developer frontend.'
    ]
  },
  {
    company: 'Kementerian Agama Kab. Ngemplak (KEMENAG)',
    role: 'Backend Developer',
    type: 'Magang',
    period: 'Apr 2021 – Jun 2021',
    techStack: ['CodeIgniter 3', 'MySQL', 'Query Optimization'],
    description: [
      'Membantu pengembangan modul data pengajuan magang dan surat rekomendasi.',
      'Mengoptimalkan kinerja query laporan internal dan merapikan struktur data.',
      'Melakukan pemecahan masalah bug fungsional di lingkungan staging.'
    ]
  }
]

export const educationList: Education[] = [
  {
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 Sistem Informasi',
    period: '2022 – 2024',
    gpa: '3.89'
  },
  {
    institution: 'Universitas Amikom Yogyakarta',
    major: 'D3 Manajemen Informatika',
    period: '2019 – 2022',
    gpa: '3.85'
  }
]
