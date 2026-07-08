export interface Article {
  id: string;
  title: string;
  description: string;
  category: 'Tech' | 'Tutorial' | 'Database' | 'Productivity';
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export const articlesList: Article[] = [
  {
    id: 'sql-optimasi',
    title: '5 Cara Ampuh Optimasi Query SQL yang Lambat',
    description: 'Panduan praktis melakukan query tuning, memahami execution plan, serta memanfaatkan indexing secara tepat untuk menaikkan performa database.',
    category: 'Database',
    date: '02 Jul 2026',
    readTime: '6 min read',
    image: '/images/blog/sql-optimasi.png',
    content: 'Query database yang lambat merupakan salah satu penyebab utama bottleneck pada aplikasi web berskala besar. Banyak developer cenderung langsung meningkatkan spesifikasi server (scale-up) tanpa menyadari bahwa optimasi query SQL dapat memberikan hasil yang jauh lebih signifikan dengan biaya nol.\n\nBeberapa langkah krusial dalam melakukan optimasi meliputi:\n\n1. Membaca dan Memahami Execution Plan menggunakan command EXPLAIN.\n2. Membuat indeks yang tepat pada kolom filter (WHERE) dan sorting (ORDER BY).\n3. Menghindari operasi SELECT * dan hanya mengambil kolom yang dibutuhkan.\n4. Mengganti subquery tidak efisien dengan query JOIN yang tepat.\n5. Rutin melakukan monitoring query-query lambat menggunakan slow query log.\n\nDengan mempraktikkan langkah-langkah di atas secara konsisten, Anda dapat mengurangi latency respon database secara dramatis dan meningkatkan throughput aplikasi web Anda.'
  },
  {
    id: 'react-future',
    title: 'Masa Depan React: Memahami Server Actions',
    description: 'Menyelami fitur terbaru React Server Actions untuk memproses mutasi data secara langsung dari komponen server tanpa REST API boilerplate.',
    category: 'Tech',
    date: '28 Jun 2026',
    readTime: '8 min read',
    image: '/images/blog/react-future.png',
    content: 'React terus berevolusi untuk menjembatani batasan antara client dan server secara mulus. Salah satu inovasi terbesar baru-baru ini adalah Server Actions, sebuah mekanisme yang memungkinkan developer mendefinisikan fungsi server-side yang dapat dipanggil langsung dari komponen client React.\n\nFitur ini mengurangi kebutuhan boilerplate route API REST konvensional seperti POST/PUT handlers, parser payload JSON, serta state management pengiriman manual di sisi client. Menggunakan Server Actions membuat kode lebih bersih, memperkecil ukuran bundle JavaScript sisi client, dan secara otomatis mendukung fitur rendering hybrid yang dinamis.\n\nIni adalah perubahan paradigma yang besar bagi ekosistem fullstack JavaScript, khususnya bagi framework modern seperti Next.js.'
  },
  {
    id: 'clean-code',
    title: 'Seni Refactoring: Dari Legacy CI3 ke Laravel Modern',
    description: 'Langkah taktis memetakan, menulis ulang, dan memindahkan kode usang berbasis PHP lama ke arsitektur MVC yang bersih dan testable.',
    category: 'Tutorial',
    date: '15 Jun 2026',
    readTime: '10 min read',
    image: '/images/blog/clean-code.png',
    content: 'Mengerjakan aplikasi warisan (legacy) PHP sering kali menghadirkan tantangan tersendiri, terutama jika codebase tersebut ditulis bertahun-tahun yang lalu tanpa standar pengujian atau pola desain yang jelas.\n\nMigrasi dari framework klasik seperti CodeIgniter 3 ke Laravel modern tidak harus dilakukan secara drastis dalam satu malam. Strategi terbaik adalah dengan membaginya ke dalam fase terukur:\n\n1. Pemetaan Arsitektur: Petakan seluruh database dan jalur kontrol endpoint.\n2. Slicing logic: Pindahkan logic database dari controller lama ke dalam Model/Repository baru.\n3. Implementasi ORM: Manfaatkan Eloquent Laravel untuk menyederhanakan manipulasi data.\n4. Writing Tests: Buat integrasi test dasar untuk memastikan endpoint krusial tetap bekerja pasca migrasi.\n\nMelalui pendekatan evolusioner ini, risiko downtime sistem dapat ditekan seminimal mungkin sambil terus meningkatkan kualitas kode baru.'
  },
  {
    id: 'api-design',
    title: 'Panduan Mendesain RESTful API yang Bersih dan Aman',
    description: 'Mengulas prinsip perancangan endpoint yang intuitif, pengelolaan status code, serta proteksi keamanan API dari ancaman umum.',
    category: 'Tech',
    date: '08 Jun 2026',
    readTime: '7 min read',
    image: '/images/blog/api-design.png',
    content: 'RESTful API yang didesain secara serampangan akan merepotkan siapa saja yang mengonsumsinya—baik tim frontend internal Anda sendiri maupun developer pihak ketiga.\n\nAPI yang baik haruslah intuitif, konsisten, dan aman sejak awal. Beberapa prinsip utama meliputi:\n\n- Penggunaan Nouns untuk URL resource (misal `/api/v1/users` bukan `/api/v1/getAllUsers`).\n- Memanfaatkan HTTP Methods dengan benar (GET untuk membaca, POST membuat baru, PUT mengganti penuh, PATCH modifikasi sebagian, DELETE menghapus).\n- Pengembalian HTTP Status Code yang tepat (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Error).\n- Keamanan berlapis dengan HTTPS, pembatasan rate-limit, enkripsi payload, dan autentikasi token JWT/OAuth2 yang terenkripsi.\n\nInvestasi waktu di awal untuk mendesain API yang bersih akan menghemat ratusan jam waktu debugging di masa mendatang.'
  },
  {
    id: 'git-workflow',
    title: 'Strategi Git Branching yang Efektif untuk Tim Developer',
    description: 'Mengenal Workflow Git Branching terbaik seperti GitFlow vs Trunk-Based Development untuk mempercepat proses deployment.',
    category: 'Productivity',
    date: '01 Jun 2026',
    readTime: '5 min read',
    image: '/images/blog/git-workflow.png',
    content: 'Kolaborasi tim dalam penulisan kode tanpa strategi branching git yang disepakati akan berakhir pada bencana merge conflict berulang dan hilangnya produktivitas.\n\nAda dua kubu utama dalam alur git branching:\n\n1. GitFlow: Cocok untuk rilis versi terjadwal. Menggunakan cabang `feature`, `develop`, `release`, dan `hotfix` yang terstruktur.\n2. Trunk-Based Development: Sangat direkomendasikan untuk tim CI/CD cepat. Developer berkontribusi langsung pada cabang utama (`main`/`master`) dalam bentuk commit kecil harian yang dilindungi oleh Feature Flags.\n\nMemilih alur yang tepat sangat tergantung pada kompleksitas sistem rilis produk dan ukuran tim pengembang Anda.'
  },
  {
    id: 'git-workflow-v2',
    title: 'Strategi Git Branching Efektif v2',
    description: 'Penerapan trunk-based development dan release management dalam tim pengembang modern.',
    category: 'Productivity',
    date: '01 Jun 2026',
    readTime: '5 min read',
    image: '/images/blog/git-workflow.png',
    content: 'Penyusunan alur kontribusi Git yang cepat untuk tim scale-up. Fokus utama dari workflow ini adalah integrasi kode berkala guna menghindari merge conflict yang menumpuk.'
  },
  {
    id: 'sql-optimasi-v2',
    title: 'Optimasi Query SQL Lanjutan v2',
    description: 'Menulis query database yang efisien serta mengidentifikasi query yang menyebabkan kemacetan database.',
    category: 'Database',
    date: '02 Jul 2026',
    readTime: '6 min read',
    image: '/images/blog/sql-optimasi.png',
    content: 'Panduan mendalam tentang query index tuning. Kami mengulas cara kerja b-tree index pada relational database serta optimalisasi join.'
  },
  {
    id: 'react-future-v2',
    title: 'React Server Actions & Form Status v2',
    description: 'Mengoptimalkan validasi input form menggunakan API useFormStatus dan useActionState di React 19.',
    category: 'Tech',
    date: '28 Jun 2026',
    readTime: '8 min read',
    image: '/images/blog/react-future.png',
    content: 'Bagian kedua dari seri Server Actions. Kali ini kita membahas penanganan error forms, status pending, dan sinkronisasi status UI client.'
  },
  {
    id: 'clean-code-v2',
    title: 'Migrasi Database Legacy v2',
    description: 'Memetakan data lama dari sistem non-relasional ke skema tabel terstruktur.',
    category: 'Tutorial',
    date: '15 Jun 2026',
    readTime: '10 min read',
    image: '/images/blog/clean-code.png',
    content: 'Melanjutkan seri refactoring. Kita mengulas pemetaan data migrasi bertahap menggunakan migration tools bawaan framework modern.'
  },
  {
    id: 'api-design-v2',
    title: 'API Security & Rate Limiting v2',
    description: 'Menerapkan proteksi keamanan tingkat lanjut untuk REST API Anda dari serangan DDoS dan Brute Force.',
    category: 'Tech',
    date: '08 Jun 2026',
    readTime: '7 min read',
    image: '/images/blog/api-design.png',
    content: 'Mendesain rate limiter yang handal menggunakan memory store redis. Artikel ini mengulas strategi penentuan limitasi trafik API.'
  }
];
