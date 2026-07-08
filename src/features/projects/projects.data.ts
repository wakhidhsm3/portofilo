export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Fullstack' | 'Backend' | 'Frontend' | 'Legacy';
  tech: string[];
  problem: string;
  solution: string;
  role: string;
  impact: string;
  image?: string;
  linkDemo?: string;
  linkRepo?: string;
}

export const projectsList: Project[] = [
  {
    id: 'dpk-financial-system',
    title: 'DPK Amikom Financial System Redesign',
    description: 'Optimasi antarmuka pengguna (UI/UX), optimasi query database PostgreSQL, dan perbaikan bug sistem perencanaan & keuangan universitas.',
    category: 'Fullstack',
    tech: ['React (TypeScript)', 'Tailwind CSS', 'Node.js (Express)', 'PostgreSQL'],
    image: '/images/projects/dpk-financial-system.png',
    problem: 'Sistem keuangan kampus sebelumnya lambat saat memuat data anggaran besar, serta memiliki antarmuka yang kurang responsif bagi staf keuangan.',
    solution: 'Melakukan penulisan ulang beberapa halaman penting dengan React dan Tailwind CSS untuk performa yang lebih responsif. Saya juga mengoptimalkan query database yang kompleks dan menambahkan indexing pada tabel transaksi.',
    role: 'Fullstack Web Developer (Magang & Freelance)',
    impact: 'Meningkatkan waktu respon halaman laporan anggaran sebesar 40% dan memberikan antarmuka modern yang memangkas waktu kerja administrasi staf.'
  },
  {
    id: 'gemasi-winner',
    title: 'Gemasi 2023: Sistem Informasi Kredibilitas Akademik',
    description: 'Aplikasi berprestasi Juara 1 Gemasi 2023 yang dirancang untuk mengelola dan memverifikasi sertifikasi serta prestasi akademik mahasiswa.',
    category: 'Fullstack',
    tech: ['React JS', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    image: '/images/projects/gemasi-winner.png',
    problem: 'Proses verifikasi prestasi mahasiswa secara manual sering kali lambat dan rawan kesalahan pencatatan di tingkat program studi.',
    solution: 'Merancang arsitektur database relasional PostgreSQL serta mengimplementasikan dashboard administrasi berbasis React yang dilengkapi fitur verifikasi berjenjang.',
    role: 'Lead Developer & System Architect',
    impact: 'Meraih Juara 1 Gemasi kategori Aplikasi Sistem Informasi dan berhasil memotong waktu verifikasi berkas dari 5 hari kerja menjadi beberapa jam saja.'
  },
  {
    id: 'baby-cloudfoam-ecommerce',
    title: 'Baby Cloudfoam E-Commerce Platform',
    description: 'Pemeliharaan, pemecahan masalah bug, dan modernisasi sistem e-commerce ritel berbasis CodeIgniter 3.',
    category: 'Legacy',
    tech: ['CodeIgniter 3', 'Bootstrap', 'MySQL', 'JavaScript'],
    image: '/images/projects/baby-cloudfoam-ecommerce.png',
    problem: 'Aplikasi e-commerce mengalami masalah pemrosesan pesanan ganda dan lambatnya query pencarian produk pada inventori besar.',
    solution: 'Mengoptimalkan skema database, memperbaiki logika validasi transaksi di backend, dan mengimplementasikan mekanisme anti-double-submit di frontend.',
    role: 'Fullstack Web Developer (Freelance)',
    impact: 'Menghilangkan insiden pesanan ganda (double-order) sepenuhnya dan mempercepat waktu pencarian produk hingga 50%.'
  },
  {
    id: 'kua-public-portal',
    title: 'KUA Ngampilan Public Service Portal',
    description: 'Slicing desain Figma menjadi kode frontend, integrasi template Bootstrap/SCSS, dan implementasi backend CodeIgniter 3.',
    category: 'Legacy',
    tech: ['CodeIgniter 3', 'SCSS', 'Bootstrap', 'MySQL', 'Figma'],
    image: '/images/projects/kua-public-portal.png',
    problem: 'Masyarakat kesulitan mendapatkan informasi pelayanan KUA yang jelas dan pendaftaran nikah online yang sebelumnya terpisah-pisah.',
    solution: 'Menerjemahkan rancangan Figma menjadi antarmuka responsif yang rapi. Saya mengintegrasikannya dengan backend CodeIgniter 3 untuk mengonsolidasikan layanan informasi publik.',
    role: 'Frontend & Backend Developer (Freelance)',
    impact: 'Membantu KUA Ngampilan meluncurkan portal terintegrasi pertama mereka, memudahkan pendaftaran layanan oleh warga lokal.'
  },
  {
    id: 'aspeksindo-api',
    title: 'Aspeksindo Maritime Member RESTful API',
    description: 'Perancangan dan pembangunan layanan RESTful API untuk basis data keanggotaan maritim nasional.',
    category: 'Backend',
    tech: ['CodeIgniter 3 (REST API)', 'MySQL', 'Postman'],
    image: '/images/projects/aspeksindo-api.png',
    problem: 'Sistem keanggotaan lama tidak memiliki endpoint terpusat, menyulitkan sinkronisasi data antar platform internal.',
    solution: 'Membangun RESTful API yang aman dengan CodeIgniter 3, mengoptimalkan query MySQL, serta menyiapkan dokumentasi API lengkap.',
    role: 'Backend Developer (Freelance)',
    impact: 'Menyediakan endpoint terpadu yang aman untuk integrasi data keanggotaan maritim dengan waktu respon API di bawah 200ms.'
  },
  {
    id: 'kemenag-management-system',
    title: 'Kemenag Internship Management Portal',
    description: 'Pemeliharaan backend, optimasi query database, dan debugging bug krusial di portal magang instansi pemerintah.',
    category: 'Backend',
    tech: ['CodeIgniter 3', 'MySQL', 'jQuery'],
    image: '/images/projects/kemenag-management-system.png',
    problem: 'Database mengalami bottleneck akibat pemrosesan data magang mahasiswa yang tidak terstruktur.',
    solution: 'Melakukan pembersihan query SQL, mengimplementasikan caching sederhana, dan melakukan debugging pada modul approval berkas.',
    role: 'Backend Developer (Magang)',
    impact: 'Meningkatkan reliabilitas portal magang selama masa puncak pendaftaran mahasiswa baru.'
  },
  {
    id: 'dpk-financial-system-v2',
    title: 'DPK Amikom Financial System v2',
    description: 'Pengembangan modul pelaporan keuangan lanjutan dengan ekosistem modern React dan Node.js.',
    category: 'Fullstack',
    tech: ['React (TypeScript)', 'Tailwind CSS', 'Node.js (Express)', 'PostgreSQL'],
    image: '/images/projects/dpk-financial-system.png',
    problem: 'Sistem membutuhkan pembukuan ganda otomatis yang terintegrasi dengan bank kampus.',
    solution: 'Membangun modul rekonsiliasi bank otomatis serta mengoptimalkan alur kerja pelaporan neraca saldo.',
    role: 'Fullstack Web Developer',
    impact: 'Mempercepat penutupan buku tahunan universitas dari 2 minggu menjadi hanya 2 hari kerja.'
  },
  {
    id: 'kua-public-portal-v2',
    title: 'KUA Ngampilan Portal v2',
    description: 'Pembaruan arsitektur portal publik KUA untuk meningkatkan kecepatan loading dan kepatuhan aksesibilitas.',
    category: 'Legacy',
    tech: ['CodeIgniter 3', 'SCSS', 'Bootstrap', 'MySQL'],
    image: '/images/projects/kua-public-portal.png',
    problem: 'Waktu loading situs lambat saat diakses menggunakan jaringan seluler di daerah terpencil.',
    solution: 'Melakukan optimalisasi aset gambar, kompresi berkas CSS/JS, dan pembersihan script legacy yang tidak terpakai.',
    role: 'Web Developer',
    impact: 'Kecepatan pemuatan halaman portal meningkat 60%, mempermudah akses warga lokal via smartphone.'
  },
  {
    id: 'aspeksindo-api-v2',
    title: 'Aspeksindo Maritime API Gate v2',
    description: 'Optimalisasi gateway API maritim nasional untuk memproses lalu lintas data keanggotaan berskala besar.',
    category: 'Backend',
    tech: ['CodeIgniter 3 (REST API)', 'MySQL'],
    image: '/images/projects/aspeksindo-api.png',
    problem: 'Terjadi kegagalan pemrosesan data keanggotaan massal saat periode registrasi serentak.',
    solution: 'Mengoptimalkan indexing database MySQL, merefaktor query kompleks, dan menerapkan limitasi rate api.',
    role: 'Backend Developer',
    impact: 'Menjamin ketersediaan API portal 99.9% tanpa down saat lonjakan trafik data.'
  },
  {
    id: 'kemenag-management-system-v2',
    title: 'Kemenag Portal v2',
    description: 'Penyusunan dashboard monitoring program magang instansi dengan analitik visual.',
    category: 'Backend',
    tech: ['CodeIgniter 3', 'MySQL', 'Chart.js'],
    image: '/images/projects/kemenag-management-system.png',
    problem: 'Pimpinan instansi kesulitan melihat grafik visual persentase penerimaan magang dari waktu ke waktu.',
    solution: 'Mengintegrasikan pustaka Chart.js dengan data agresi SQL dinamis dari basis data.',
    role: 'Backend Developer',
    impact: 'Menyediakan dasbor analitik real-time yang mempermudah keputusan rekrutmen.'
  }
]
