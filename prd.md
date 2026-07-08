# Product Requirements Document (PRD)

## Website Portofolio Software Engineer

**Versi:** 2.0
**Tanggal:** 6 Juli 2026
**Pemilik Produk:** [Nama Anda]
**Status:** Draft
**Referensi Benchmark:**

- https://abdulrehmanwaseem.me/
- https://allanim.com/
- https://www.aniketj.dev/
- https://jithin.dev/

---

## 1. Latar Belakang & Tujuan

### 1.1 Latar Belakang

Sebagai software engineer, portofolio online berfungsi sebagai representasi digital dari kemampuan, pengalaman, dan proyek yang telah dikerjakan. Website ini dibutuhkan untuk mendukung pencarian kerja, personal branding, dan sebagai referensi bagi recruiter maupun klien freelance.

### 1.2 Tujuan Produk

- Menampilkan profil profesional secara ringkas dan menarik.
- Menampilkan portofolio proyek dengan detail teknis yang relevan.
- Memudahkan recruiter/klien menghubungi pemilik website.
- Meningkatkan personal branding melalui blog/artikel teknis.
- Menjadi bukti kemampuan teknis (website itu sendiri adalah showcase skill front-end/back-end).
- Membangun kredibilitas melalui bukti sosial (kontribusi GitHub, sertifikasi, penghargaan, testimoni).

### 1.3 Target Pengguna

| Persona                  | Kebutuhan                                                |
| ------------------------ | -------------------------------------------------------- |
| Recruiter/HR             | Melihat pengalaman, skill, dan CV dengan cepat           |
| Hiring Manager/Tech Lead | Menilai kualitas kode & proyek teknis, arsitektur sistem |
| Klien Freelance          | Melihat portofolio proyek & cara menghubungi             |
| Sesama Developer         | Referensi/inspirasi, kolaborasi, membaca tulisan teknis  |

---

## 2. Insight dari Referensi (Benchmark Analysis)

Berikut pola-pola umum yang ditemukan dari 4 website referensi, dan bagaimana pola tersebut diadopsi ke dalam PRD ini:

| Situs                    | Insight Utama                                                                                                                                                                                                                             | Diadopsi?                                                                                       |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **abdulrehmanwaseem.me** | Command palette (⌘K search), grafik kontribusi GitHub live, blog terintegrasi di homepage, section Honors & Awards, Certifications, Testimonials, section "Brand" (logo/logotype), footer dengan RSS & `llms.txt`                         | Ya — command palette, GitHub graph, blog, awards, certifications masuk fase MVP/Fase 2          |
| **allanim.com**          | Dukungan multi-bahasa (EN/KO/JA), statistik coding real-time dari WakaTime (AI vs human coding %), grafik bahasa pemrograman, minimalis & terminal-style UI (`~/`, `zsh` motif)                                                           | Multi-bahasa masuk Fase 2 (opsional); WakaTime widget jadi nice-to-have                         |
| **aniketj.dev**          | Ilustrasi diagram arsitektur sistem di hero section, animated counter (years, certifications, products shipped), section "Core Expertise" terpisah dari "Tech Stack", command-line style info block, status "Available for opportunities" | Animated counter & availability badge masuk MVP; diagram arsitektur jadi elemen desain opsional |
| **jithin.dev**           | Struktur konten klasik: Summary → Skills → Experience → Education, tanpa proyek terpisah — fokus ke narasi pengalaman kerja                                                                                                               | Dijadikan baseline minimum jika waktu/scope terbatas                                            |

**Kesimpulan:** Website portofolio yang kompetitif saat ini tidak hanya statis, tetapi juga menampilkan **sinyal kredibilitas real-time** (GitHub activity, coding stats), **navigasi power-user** (command palette), dan **struktur konten yang kaya** (Blog, Awards, Certifications, Testimonials) di samping halaman inti (About, Projects, Experience, Contact).

---

## 3. Ruang Lingkup (Scope)

### 3.1 Termasuk dalam scope (MVP)

- Hero section (nama, role, tagline, foto/avatar, CTA, social links)
- Status badge "Available for opportunities / Open to work"
- Halaman/Section About Me
- Animated counter (tahun pengalaman, jumlah proyek, sertifikasi, dll.)
- Halaman/Section Projects (portofolio) dengan filter kategori
- Halaman/Section Skills & Tech Stack (dikelompokkan per kategori, dengan icon)
- Halaman/Section Experience & Education (timeline, dengan tech tags per role)
- Halaman/Section Certifications
- Halaman/Section Honors & Awards
- Halaman Contact (form + kontak langsung)
- Resume/CV downloadable (PDF)
- Responsive design (mobile, tablet, desktop)
- Dark/Light mode
- SEO dasar (meta tags, OG image, sitemap)

### 3.2 Fase 2 (Enhancement)

- Blog/Writing engine (artikel teknis, integrasi preview di homepage)
- Command palette / search (⌘K) untuk navigasi cepat
- Grafik kontribusi GitHub live (via GitHub API)
- Widget statistik coding (WakaTime atau sejenis) — opsional, cocok untuk audiens teknikal
- Section Testimonials
- Multi-bahasa (ID/EN, atau tambahan sesuai target pasar)
- Ilustrasi/diagram arsitektur sistem interaktif di hero (khusus profil arsitek/senior)
- Sistem CMS ringan (Markdown/MDX/Notion API) agar konten mudah di-update
- `llms.txt` & RSS feed untuk keterbukaan data ke AI crawler/reader
- Analytics dashboard internal
- Newsletter integration

---

## 4. User Stories & Functional Requirements

### 4.1 Hero / Landing Section

**User Story:** Sebagai pengunjung, saya ingin langsung tahu siapa pemilik website, spesialisasinya, dan status ketersediaannya dalam 5 detik pertama.

**Requirements:**

- FR-1: Menampilkan nama, role/headline (misal "Fullstack Software Engineer", "Software Architect"), dan tagline singkat yang mencerminkan value proposition.
- FR-2: Badge status: "Available for opportunities" / "Open to work" / "Currently at [Perusahaan]".
- FR-3: Tombol CTA ganda: primer ("View my Work" / "Lihat Proyek") dan sekunder ("Read CV" / "Get in Touch").
- FR-4: Menampilkan link sosial media (GitHub, LinkedIn, X/Twitter, email, opsional Stack Overflow/Discord).
- FR-5: Animated counter ringkas (contoh: "4+ Tahun Pengalaman", "14 Proyek", "6x Sertifikasi") yang muncul dengan animasi count-up saat scroll/load.
- FR-6 _(opsional, fase 2)_: Ilustrasi diagram arsitektur sistem atau visual dekoratif sebagai elemen hero, relevan untuk profil senior/architect.

### 4.2 About Me

**User Story:** Sebagai recruiter, saya ingin membaca ringkasan latar belakang dan value proposition kandidat.

**Requirements:**

- FR-7: Foto profil / avatar.
- FR-8: Deskripsi naratif (3-5 paragraf) tentang latar belakang, minat teknis, filosofi kerja, dan tujuan karier.
- FR-9: Highlight statistik tambahan (tahun pengalaman, jumlah industri/domain yang pernah ditangani, sertifikasi).
- FR-10: Block info gaya command-line/terminal (opsional dekoratif): nama, role, lokasi, fokus keahlian — sebagai elemen desain khas developer.

### 4.3 Projects / Portofolio

**User Story:** Sebagai hiring manager, saya ingin melihat detail proyek termasuk tech stack, peran, dan hasil.

**Requirements:**

- FR-11: Grid/list kartu proyek: nama, thumbnail/screenshot atau ilustrasi generatif, deskripsi singkat, kategori (Web/Mobile/AI/Web3/dll.), badge tech stack, link demo, link source code.
- FR-12: Filter proyek berdasarkan kategori/tech stack.
- FR-13: Detail view/modal per proyek: problem statement, solusi, peran individu, tantangan teknis, hasil/dampak, periode pengerjaan.
- FR-14: Minimal 4-6 proyek unggulan; opsional "Show More/Less" jika jumlah proyek banyak (>10).

### 4.4 Skills & Tech Stack

**User Story:** Sebagai recruiter, saya ingin cepat memindai skill teknis yang dikuasai, sekaligus memahami area keahlian inti (bukan cuma daftar tools).

**Requirements:**

- FR-15: Section "Core Expertise" — 4-8 kartu area keahlian tingkat tinggi (misal: Software Architecture, Cloud Infrastructure, AI & Data Systems), masing-masing dengan deskripsi 1 baris.
- FR-16: Section "Tech Stack" terpisah — daftar lengkap tools/bahasa/framework dikelompokkan per kategori (Languages, Backend, Cloud & Infra, DevOps, Database, Design Tools, dll.) dengan icon.
- FR-17: Hindari klaim "level ahli" yang tidak terukur (progress bar subjektif); gunakan pengelompokan & kategori sebagai gantinya.

### 4.5 Experience & Education

**User Story:** Sebagai recruiter, saya ingin melihat riwayat pekerjaan dan pendidikan dalam format timeline yang detail.

**Requirements:**

- FR-18: Timeline pengalaman kerja: logo perusahaan, nama posisi, tipe kerja (full-time/part-time/freelance), periode, daftar tanggung jawab, tag tech stack yang dipakai di role tersebut.
- FR-19: Untuk pengalaman freelance, tampilkan sub-list "Key Projects" dengan deskripsi singkat dan link.
- FR-20: Riwayat pendidikan (institusi, periode, gelar/jurusan).

### 4.6 Certifications & Honors/Awards

**User Story:** Sebagai recruiter, saya ingin memverifikasi kredibilitas melalui sertifikasi dan penghargaan yang pernah diraih.

**Requirements:**

- FR-21: Section Certifications: nama sertifikasi, issuer/lembaga, tanggal terbit, link verifikasi (Credly/Google Drive/dsb).
- FR-22: Section Honors & Awards: nama kompetisi/acara, jenis penghargaan (Winner/Top 5/dsb.), tanggal, link bukti (opsional).

### 4.7 Blog / Writing (Fase 2)

**User Story:** Sebagai sesama developer, saya ingin membaca tulisan teknis pemilik portofolio untuk menilai kedalaman pemahamannya.

**Requirements:**

- FR-23: List artikel dengan judul, tanggal publish, tag/kategori, dan preview singkat.
- FR-24: Preview 2-4 artikel terbaru ditampilkan di homepage, dengan link "View all/All Posts".
- FR-25: Halaman detail artikel mendukung format Markdown/MDX.

### 4.8 Testimonials (Fase 2)

**User Story:** Sebagai klien/recruiter, saya ingin membaca pandangan orang lain (rekan kerja/klien) tentang pemilik portofolio.

**Requirements:**

- FR-26: Kartu testimoni: nama pemberi testimoni, jabatan/perusahaan, foto (opsional), isi testimoni singkat.

### 4.9 Contact

**User Story:** Sebagai klien, saya ingin cara mudah menghubungi pemilik website.

**Requirements:**

- FR-27: Form kontak (nama, email, pesan) terkirim ke email pemilik.
- FR-28: Validasi form & anti-spam (captcha/honeypot).
- FR-29: Alternatif kontak langsung: email, LinkedIn, WhatsApp (opsional).
- FR-30: Notifikasi sukses/gagal setelah submit form.

### 4.10 Resume/CV

**User Story:** Sebagai recruiter, saya ingin mengunduh CV dalam format PDF.

**Requirements:**

- FR-31: Tombol download CV (PDF) yang selalu versi terbaru.
- FR-32 _(opsional)_: Halaman Résumé terpisah yang menampilkan CV dalam format web (bukan hanya PDF).

### 4.11 Navigasi & Fitur Pendukung (Fase 2)

**User Story:** Sebagai pengunjung power-user, saya ingin bernavigasi cepat tanpa harus scroll manual.

**Requirements:**

- FR-33: Command palette (trigger `⌘K` / `Ctrl+K`) untuk mencari & lompat ke section/halaman/proyek tertentu.
- FR-34: Toggle tema Dark/Light, tersimpan sesuai preferensi browser pengguna.
- FR-35 _(opsional)_: Toggle bahasa (ID/EN) jika target audiens termasuk internasional.
- FR-36 _(opsional)_: Grafik kontribusi GitHub (heatmap ala GitHub profile) yang diambil live via GitHub API.
- FR-37 _(opsional, niche)_: Widget statistik coding (jam ngoding, bahasa terbanyak dipakai, rasio AI-assisted vs manual coding) via WakaTime API — cocok untuk membangun narasi "developer yang transparan soal proses kerja".

---

## 5. Non-Functional Requirements

| Kategori           | Requirement                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| Performance        | Lighthouse score minimal 90 (Performance, Accessibility, SEO)                                                |
| Responsiveness     | Mendukung breakpoint mobile (<768px), tablet, desktop                                                        |
| SEO                | Meta tags, Open Graph, Twitter Card, sitemap.xml, structured data (schema.org Person), `llms.txt` (opsional) |
| Accessibility      | Kontras warna sesuai WCAG AA, alt text pada gambar, navigasi keyboard, dukungan command palette via keyboard |
| Security           | HTTPS, sanitasi input form, rate limiting pada form kontak                                                   |
| Browser Support    | Chrome, Firefox, Safari, Edge (2 versi terakhir)                                                             |
| Load Time          | First Contentful Paint < 2 detik                                                                             |
| Hosting/Deploy     | Static/SSR hosting (Vercel/Netlify) dengan custom domain                                                     |
| Internasionalisasi | Struktur i18n disiapkan sejak awal jika multi-bahasa direncanakan di Fase 2                                  |

---

## 6. Tech Stack (Rekomendasi)

Berdasarkan pola dari referensi (Next.js, Astro, Tailwind mendominasi), berikut rekomendasi:

| Layer           | Opsi                                                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend        | Next.js (React) — cocok untuk App Router + MDX blog; alternatif: Astro (ringan, cocok untuk konten statis dominan seperti allanim.com) |
| Styling         | Tailwind CSS + shadcn/ui atau Radix UI (untuk komponen command palette, modal, dsb.)                                                   |
| Blog/Content    | MDX / Markdown-based content collection (Astro Content Collections atau Next.js + Contentlayer)                                        |
| Command Palette | Library `cmdk` (dipakai luas untuk fitur ⌘K)                                                                                           |
| Hosting         | Vercel / Netlify                                                                                                                       |
| Form Handling   | Formspree / EmailJS / API Route sendiri                                                                                                |
| Analytics       | Google Analytics / Plausible / Vercel Analytics                                                                                        |
| GitHub Stats    | GitHub REST/GraphQL API + library `react-github-calendar` atau serupa                                                                  |
| CMS (Fase 2)    | Contentful / Notion API / Markdown-based (MDX)                                                                                         |
| Animasi         | Framer Motion / Motion untuk micro-interaction dan animated counter                                                                    |

_Catatan: pemilihan tech stack juga berfungsi sebagai demonstrasi kemampuan teknis pemilik portofolio — sama seperti pendekatan di keempat situs referensi._

---

## 7. Metrik Keberhasilan (Success Metrics)

- Jumlah pengunjung unik per bulan
- Rata-rata durasi kunjungan (target > 1.5 menit)
- Jumlah klik "Download CV"
- Jumlah submit form kontak
- Conversion rate: pengunjung → kontak masuk
- Lighthouse Performance Score ≥ 90
- Jumlah interaksi command palette (Fase 2, indikator engagement power-user)
- Jumlah view halaman Blog (Fase 2)

---

## 8. Timeline (Estimasi)

| Fase                  | Durasi    | Deliverable                                                                                         |
| --------------------- | --------- | --------------------------------------------------------------------------------------------------- |
| Discovery & Wireframe | 3 hari    | Wireframe low-fidelity, content outline, riset referensi                                            |
| UI Design (Hi-Fi)     | 4-5 hari  | Desain Figma seluruh section (termasuk dark/light mode)                                             |
| Development MVP       | 8-10 hari | Website fungsional (Hero, About, Projects, Skills, Experience, Certifications, Awards, Contact, CV) |
| Content Filling       | 2 hari    | Isi konten real (proyek, CV, foto, sertifikasi)                                                     |
| Testing & QA          | 2 hari    | Cross-browser, responsive, performance test                                                         |
| Deploy & Launch MVP   | 1 hari    | Live di domain custom                                                                               |
| Fase 2 (opsional)     | 5-7 hari  | Blog, command palette, GitHub stats, testimonials, multi-bahasa                                     |

**Total estimasi MVP: ± 3-4 minggu, Fase 2 tambahan: ± 1-1.5 minggu**

---

## 9. Risiko & Mitigasi

| Risiko                                                                                          | Mitigasi                                                                                          |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Konten portofolio kurang lengkap/menarik                                                        | Siapkan minimal 4-6 proyek dengan studi kasus mendalam                                            |
| Website terlihat generik/template                                                               | Gunakan desain khas, tambahkan micro-interaction, elemen unik (command palette, animated counter) |
| Form kontak dipenuhi spam                                                                       | Gunakan captcha/honeypot                                                                          |
| Konten cepat basi (jarang update)                                                               | Pertimbangkan CMS ringan atau MDX di fase 2                                                       |
| Fitur "nice to have" (WakaTime, GitHub live stats) menambah kompleksitas & dependency eksternal | Jadikan opsional/Fase 2, pastikan fallback jika API down                                          |
| Command palette menambah kompleksitas dev                                                       | Gunakan library matang (`cmdk`) alih-alih membangun dari nol                                      |

---

## 10. Open Questions

- Apakah perlu fitur Blog di MVP atau cukup Fase 2?
- Apakah target audiens lebih ke recruiter lokal (ID) atau internasional (perlu versi EN atau multi-bahasa)?
- Apakah butuh custom domain atau cukup subdomain gratis (vercel.app, dll)?
- Apakah ingin menampilkan statistik coding real-time (WakaTime) — apakah ini relevan dengan personal brand yang diinginkan?
- Apakah profil lebih condong ke "hands-on engineer" (fokus proyek & tech stack, seperti abdulrehmanwaseem.me) atau "architect/senior" (fokus sistem desain & diagram arsitektur, seperti aniketj.dev)?

---

_Dokumen ini bersifat living document dan dapat diperbarui sesuai perkembangan kebutuhan proyek. Referensi diambil dari analisis benchmark 4 website portofolio software engineer per 6 Juli 2026._

---

## Appendix A: Data Sumber (Draft Konten Berdasarkan CV Asli)

**Sumber:** CV — Wakhid Hasim (Node JS Developer), diunggah 6 Juli 2026.

> Bagian ini adalah draft konten nyata untuk mengisi setiap section pada website, disusun ulang dari CV agar siap dipakai developer/desainer saat implementasi. Nomor telepon, alamat rumah, agama, dan tanggal lahir lengkap **sengaja tidak ditampilkan** di website publik (lihat catatan privasi di akhir).

### A.1 Hero Section

- **Nama:** Wakhid Hasim
- **Role/Headline:** Fullstack Web Developer — Node.js & React Specialist
- **Tagline (draft):** "Membangun website dan API yang rapi, cepat, dan mudah dipelihara — dari rancangan antarmuka hingga arsitektur backend."
- **Lokasi:** Yogyakarta, Indonesia
- **Status badge:** "Open to Work" / "Available for Freelance Projects"
- **Counter (draft, sesuaikan dengan preferensi):**
  - 4+ Tahun Pengalaman (Apr 2021 – Feb 2025, freelance & magang)
  - 6 Proyek/Klien Ditangani
  - 1 Penghargaan Nasional

### A.2 About Me (draft paragraf)

> Wakhid Hasim adalah Fullstack Web Developer lulusan Sistem Informasi, Universitas Amikom Yogyakarta (IPK 3.89), dengan latar belakang tambahan di Manajemen Informatika (IPK 3.85) dari kampus yang sama. Sejak 2021, ia telah menangani berbagai proyek freelance dan magang untuk instansi pemerintah, kampus, hingga bisnis retail — mulai dari membangun RESTful API, migrasi antarmuka, hingga optimasi query database.
>
> Ia terbiasa bekerja di kedua sisi stack: dari slicing desain Figma menjadi kode frontend (React, Tailwind CSS, SCSS), sampai membangun backend dan API menggunakan Node.js/Express, Laravel, dan CodeIgniter. Pada 2023, timnya meraih **Juara 1 Gemasi 2023** untuk kategori Aplikasi Sistem Informasi.

_(Catatan: paragraf ini draft awal — sebaiknya direview ulang oleh pemilik CV agar gaya bahasanya terasa personal/otentik.)_

### A.3 Experience Timeline

| Perusahaan/Instansi                              | Posisi                      | Tipe      | Periode             | Tech Stack                                                      |
| ------------------------------------------------ | --------------------------- | --------- | ------------------- | --------------------------------------------------------------- |
| Direktorat Perencanaan dan Keuangan Amikom (DPK) | Fullstack Website Developer | Freelance | Nov 2023 – Feb 2025 | Optimasi UI/UX, query database, bug fixing                      |
| Direktorat Perencanaan dan Keuangan Amikom (DPK) | Fullstack Website Developer | Magang    | Agu 2023 – Nov 2023 | React (TypeScript), Tailwind CSS, Node.js (Express), PostgreSQL |
| Baby Cloudfoam Indonesia                         | Fullstack Website Developer | Freelance | Agu 2023 – Okt 2023 | Bootstrap, CodeIgniter 3, MySQL                                 |
| Kantor Urusan Agama Ngampilan (KUA)              | Fullstack Website Developer | Freelance | Des 2021 – Feb 2022 | Figma-to-code (SCSS, Bootstrap), CodeIgniter 3, MySQL           |
| Aspeksindo                                       | Backend Developer           | Freelance | Sep 2021 – Nov 2021 | RESTful API, CodeIgniter 3, MySQL                               |
| Kementerian Agama Kab. Ngemplak (KEMENAG)        | Backend Developer           | Magang    | Apr 2021 – Jun 2021 | CodeIgniter 3, MySQL, query optimization                        |

**Ringkasan tanggung jawab yang konsisten muncul di berbagai role:**

- Redesign UI/UX untuk meningkatkan pengalaman pengguna
- Optimasi kode & query database untuk performa dan maintainability
- Membangun & mengintegrasikan RESTful API
- Deploy ke lingkungan produksi
- Debugging dan pemeliharaan sistem berjalan

### A.4 Education

| Institusi                     | Jurusan                    | Periode     | IPK  |
| ----------------------------- | -------------------------- | ----------- | ---- |
| Universitas Amikom Yogyakarta | Sistem Informasi (S1)      | 2022 – 2024 | 3.89 |
| Universitas Amikom Yogyakarta | Manajemen Informatika (D3) | 2019 – 2022 | 3.85 |

### A.5 Skills & Tech Stack

| Kategori            | Skill                                        |
| ------------------- | -------------------------------------------- |
| Frontend            | HTML, CSS, SCSS, Tailwind CSS, React JS      |
| Bahasa Pemrograman  | JavaScript, TypeScript, PHP                  |
| Backend & Framework | Express JS (Node.js), Laravel, CodeIgniter 3 |
| Database            | MySQL, PostgreSQL                            |
| Tools/DevOps        | Docker, Git                                  |

**Core Expertise (draft, hasil sintesis dari pola pengalaman kerja):**

- Fullstack Web Development (React + Node.js/Express)
- Legacy PHP Modernization (CodeIgniter 3 & Laravel)
- Database Optimization & RESTful API Design
- UI/UX Implementation dari Figma ke kode produksi

### A.6 Honors & Awards

| Penghargaan    | Penyelenggara | Tahun | Kategori                  |
| -------------- | ------------- | ----- | ------------------------- |
| Juara 1 Gemasi | Gemasi 2023   | 2023  | Aplikasi Sistem Informasi |

### A.7 Projects — Perlu Dilengkapi

CV tidak mencantumkan nama proyek/produk spesifik beserta demo link atau repository. Untuk mengisi section **Projects** (bagian paling menentukan penilaian teknis recruiter), disarankan menambahkan minimal 4-6 proyek dengan detail:

- Nama proyek & screenshot
- Link demo & source code (jika ada, atau bisa disamarkan bila milik instansi/klien)
- Studi kasus singkat: masalah → solusi → hasil

**Pertanyaan untuk dilengkapi:**

1. Apakah proyek-proyek dari DPK, KUA, Aspeksindo, Baby Cloudfoam bisa ditampilkan (izin dari klien), atau perlu versi anonim/"Confidential Client Project"?
2. Apakah ada proyek personal/side-project di luar pekerjaan freelance di atas (misal di GitHub) yang bisa ditambahkan agar section Projects lebih variatif?

### Catatan Privasi

Data berikut **tidak direkomendasikan** untuk ditampilkan di website publik demi keamanan pribadi:

- Tanggal lahir lengkap & alamat rumah detail (cukup tampilkan kota, misal "Yogyakarta, Indonesia")
- Nomor HP pribadi (gunakan form kontak atau email sebagai gantinya)
- Agama & jenis kelamin (tidak relevan untuk portofolio profesional)
