# Capstone Project Hacktiv8 - RIEBER (10 Minutes Reading Timer)

### Description
#### Latar Belakang
Membaca merupakan kegiatan sederhana yang memiliki banyak manfaat bagi perkembangan intelektual dan kesehatan mental seseorang. Namun, tidak semua orang memiliki waktu dan kebiasaan untuk membaca secara rutin ini. Salah satu cara yang paling mudah untuk membangun kebiasaan ini adalah dengan mulai meluangkan waktu 10 menit setiap hari. 

Walaupun waktu tersebut terbilang singkat, kebiasaan sederhana seperti ini dapat berdampak besar, seperti memperluas wawasan, meningkatkan fokus, mempertajam cara berpikir, dan meningkatkan kreativitas, serta mendukung kesehatan mental. 

Untuk mendukung upaya ini, RIEBER hadir sebagai “pendamping” digital yang menemani pengguna dalam memulai dan mempertahankan kebiasaan rutin membaca selama 10 menit setiap hari. RIEBER dirancang pendekatan yang ringan, ramah pengguna, dan mudah digunakan, khususnya bagi pemula yang ingin memulai membentuk kebiasaan positif ini. 

#### Tujuan
Aplikasi RIEBER bertujuan untuk menjadi personal reading timer yang membantu pengguna dalam membangun kebiasaan membaca buku minimal 10 menit setiap hari. 

Dengan pendekatan sederhana, ringan, dan fokus selama 10 menit, aplikasi ini diharapkan dapat mendorong terbentuknya kebiasaan positif membaca secara konsisten dan menjadi “teman” bagi pengguna dalam perjalanan literasi sehari-hari.

### Technologies Used
Project pembangunan RIEBER ini menggunakan pendekatan vanilla web development tanpa framework apapun supaya tetap ringan, sederhana dan mudah diakses, serta memudahkan pemahaman pengguna maupun pengembang pemula untuk memahami struktur kode aplikasi. Berikut merupakan teknologi utama bahasa pemrograman yang digunakan, yaitu:

- HTML (HyperText Markup Language) digunakan untuk menyusun struktur utama halaman website RIEBER, termasuk elemen tombol, layout, dan teks.

- CSS (Cascading Style Sheets) digunakan untuk memberikan tampilan visual berupa warna dan animasi, serta responsivitas antarmuka yang menarik. 

- Vanilla JavaScript digunakan untuk membangun logika utama aplikasi, seperti perhitungan waktu mundur 10 menit, memberikan logika sesuai dengan fungsionalitas pada setiap tombol, dan menampilkan alert disertai dengan suara bel untuk menandakan waktu selesai. 

Alasan Pemilihan Teknologi:
Pemanfaatan teknologi sederhana seperti HTML, CSS, dan JavaScript sangat relevan untuk digunakan pada proses pembangunan aplikasi RIEBER yang menjadikan “timer” sebagai fungsi utamanya. Pendekatan ini juga membantu dalam mengoptimalkan performa aplikasi, mengurangi kompleksitas kode, serta memudahkan proses deployment.

### Features
RIEBER memiliki tiga fitur utama dalam sistem penghitung waktunya, yaitu sebagai berikut:
1. Tombol Start untuk memulai perhitungan waktu secara mundur selama 10 menit hingga mencapai 0. Ketika tombol start ditekan, timer akan mulai berjalan mundur hingga mencapai 0. Ketika selesai, akan terdengar suara bel dan notifikasi di layar pengguna berupa pop-up alert.
2. Tombol Stop untuk memberhentikan timer sementara. Ketika tombol stop ditekan, perhitungan waktu akan terhenti pada angka terakhir dan dapat dilanjutkan kembali dengan menekan tombol start.
3. Tombol Reset untuk mengembalikan timer ke 10 menit. Ketika tombol reset ditekan, pengatur waktu akan memulai kembali dari awal.

### Setup Instructions
Untuk menggunakan RIEBER, cukup mengunjungi tautan berikut: https://rieber.netlify.app/

### AI Support Explanation
Dalam proses pengembangan proyek ini, AI terlibat dalam memberikan bantuan teknis, seperti logika pengkodean. Platform AI yang digunakan adalan IBM Granite. Cara penggunaan yang pengembang lakukan adalah dengan memberikan prompt se-spesifik mungkin untuk mencapai output yang diinginkan, seperti “Buatkan kode yang dapat memunculkan bunyi bel ketika waktu telah mencapai 0 dan alert muncul. 

Hal ini untuk membantu pengguna dapat mengetahui bahwa timer telah selesai melalui suara bel tanpa perlu melihat tampilan notifikasi di layar (Pengguna bisa saja terlalu fokus membaca, sehingga tidak melihat layar memunculkan notifikasi waktu telah habis)”. Berikut pemanfaatan AI dalam pengembangan proyek ini, yaitu:
- Memberikan kode untuk integrasi suara bel saat waktu habis.
- Menyempurnakan alur interaksi pengguna pada alert dan event handler
- Membantu dalam proses dokumentasi (in-line documentation) pada kode

Penggunaan AI sangat membantu dalam pengembangan proyek ini karena dapat mempercepat proses pengembangan dengan memberikan kode yang efektif dan fungsional. Dengan pemanfaatan AI ini, kode yang diberikan dapat berjalan optimal, sehingga situs RIEBER dapat berjalan dengan baik. 
# RIEBER
Capstone Project Code Generations and Optimization with IBM Granite - RIEBER (10-Minutes Reading Timer)

### Description
#### Latar Belakang
Membaca merupakan kegiatan sederhana yang memiliki banyak manfaat bagi perkembangan intelektual dan kesehatan mental seseorang. Namun, tidak semua orang memiliki waktu dan kebiasaan untuk membaca secara rutin ini. Salah satu cara yang paling mudah untuk membangun kebiasaan ini adalah dengan mulai meluangkan waktu 10 menit setiap hari. 

Walaupun waktu tersebut terbilang singkat, kebiasaan sederhana seperti ini dapat berdampak besar, seperti memperluas wawasan, meningkatkan fokus, mempertajam cara berpikir, dan meningkatkan kreativitas, serta mendukung kesehatan mental. 

Untuk mendukung upaya ini, RIEBER hadir sebagai “pendamping” digital yang menemani pengguna dalam memulai dan mempertahankan kebiasaan rutin membaca selama 10 menit setiap hari. RIEBER dirancang pendekatan yang ringan, ramah pengguna, dan mudah digunakan, khususnya bagi pemula yang ingin memulai membentuk kebiasaan positif ini. 

#### Tujuan
Aplikasi RIEBER bertujuan untuk menjadi personal reading timer yang membantu pengguna dalam membangun kebiasaan membaca buku minimal 10 menit setiap hari. 

Dengan pendekatan sederhana, ringan, dan fokus selama 10 menit, aplikasi ini diharapkan dapat mendorong terbentuknya kebiasaan positif membaca secara konsisten dan menjadi “teman” bagi pengguna dalam perjalanan literasi sehari-hari.

### Technologies Used
Project pembangunan RIEBER ini menggunakan pendekatan vanilla web development tanpa framework apapun supaya tetap ringan, sederhana dan mudah diakses, serta memudahkan pemahaman pengguna maupun pengembang pemula untuk memahami struktur kode aplikasi. Berikut merupakan teknologi utama bahasa pemrograman yang digunakan, yaitu:

- HTML (HyperText Markup Language) digunakan untuk menyusun struktur utama halaman website RIEBER, termasuk elemen tombol, layout, dan teks.

- CSS (Cascading Style Sheets) digunakan untuk memberikan tampilan visual berupa warna dan animasi, serta responsivitas antarmuka yang menarik. 

- Vanilla JavaScript digunakan untuk membangun logika utama aplikasi, seperti perhitungan waktu mundur 10 menit, memberikan logika sesuai dengan fungsionalitas pada setiap tombol, dan menampilkan alert disertai dengan suara bel untuk menandakan waktu selesai. 

Alasan Pemilihan Teknologi:
Pemanfaatan teknologi sederhana seperti HTML, CSS, dan JavaScript sangat relevan untuk digunakan pada proses pembangunan aplikasi RIEBER yang menjadikan “timer” sebagai fungsi utamanya. Pendekatan ini juga membantu dalam mengoptimalkan performa aplikasi, mengurangi kompleksitas kode, serta memudahkan proses deployment.

### Features
RIEBER memiliki tiga fitur utama dalam sistem penghitung waktunya, yaitu sebagai berikut:
1. Tombol Start untuk memulai perhitungan waktu secara mundur selama 10 menit hingga mencapai 0. Ketika tombol start ditekan, timer akan mulai berjalan mundur hingga mencapai 0. Ketika selesai, akan terdengar suara bel dan notifikasi di layar pengguna berupa pop-up alert.
2. Tombol Stop untuk memberhentikan timer sementara. Ketika tombol stop ditekan, perhitungan waktu akan terhenti pada angka terakhir dan dapat dilanjutkan kembali dengan menekan tombol start.
3. Tombol Reset untuk mengembalikan timer ke 10 menit. Ketika tombol reset ditekan, pengatur waktu akan memulai kembali dari awal.

### Setup Instructions

### AI Support Explanation
Dalam proses pengembangan proyek ini, AI terlibat dalam memberikan bantuan teknis, seperti logika pengkodean. Platform AI yang digunakan adalan IBM Granite. Cara penggunaan yang pengembang lakukan adalah dengan memberikan prompt se-spesifik mungkin untuk mencapai output yang diinginkan, seperti “Buatkan kode yang dapat memunculkan bunyi bel ketika waktu telah mencapai 0 dan alert muncul. 

Hal ini untuk membantu pengguna dapat mengetahui bahwa timer telah selesai melalui suara bel tanpa perlu melihat tampilan notifikasi di layar (Pengguna bisa saja terlalu fokus membaca, sehingga tidak melihat layar memunculkan notifikasi waktu telah habis)”. Berikut pemanfaatan AI dalam pengembangan proyek ini, yaitu:
- Memberikan kode untuk integrasi suara bel saat waktu habis.
- Menyempurnakan alur interaksi pengguna pada alert dan event handler
- Membantu dalam proses dokumentasi (in-line documentation) pada kode

Penggunaan AI sangat membantu dalam pengembangan proyek ini karena dapat mempercepat proses pengembangan dengan memberikan kode yang efektif dan fungsional. Dengan pemanfaatan AI ini, kode yang diberikan dapat berjalan optimal, sehingga situs RIEBER dapat berjalan dengan baik. 
