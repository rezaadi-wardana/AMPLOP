-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 19, 2025 at 05:37 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `amplop`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `category_desc` text NOT NULL,
  `slug` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `category_desc`, `slug`, `created_at`, `updated_at`) VALUES
(7, 'Islami', 'Penuh Makna dan Religius, Cocok untuk kamu yang suka dengan nuasa islam, agar hari special menjadi lebih bermakna', 'islami', '2025-06-06 19:09:48', '2025-06-08 01:56:47'),
(9, 'Elegan', 'Tampilan desain menawan, Cocok untuk kamu yang suka dengan keindahan disertai kemewahan', 'elegan', '2025-06-06 19:10:07', '2025-06-08 02:00:21');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hasil_jumlahs`
--

CREATE TABLE `hasil_jumlahs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `jumlah_neptu` int(11) NOT NULL,
  `nama_makna` text NOT NULL,
  `arti_makna` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hasil_jumlahs`
--

INSERT INTO `hasil_jumlahs` (`id`, `jumlah_neptu`, `nama_makna`, `arti_makna`, `created_at`, `updated_at`) VALUES
(3, 1, 'PEGAT', 'Hitungan ini menandakan bahwa kamu dan pasangan mungkin akan menghadapi banyak masalah dalam kehidupan. Namun selama keluarga merestui dan mendoakan, hubungan kalian akan berjalan dengan aman.', '2025-07-02 07:25:10', '2025-07-02 07:25:10'),
(4, 2, 'RATU', 'Kamu dan pasangan adalah jodoh sejati. Kalian berdua sangat dihargai dan disegani oleh orang sekitar. Hubungan kalian yang bahagia dan harmonis mampu membuat iri banyak orang.', '2025-07-02 07:26:17', '2025-07-02 07:26:17'),
(5, 3, 'JODOH', 'Sesuai dengan hasilnya, kamu dan pasangan memang ditakdirkan untuk berjodoh. Kalian bisa saling menerima segala kekurangan maupun kelebihan masing-masing dan akan menjalani rumah tangga yang harmonis hingga tua.', '2025-07-02 07:26:40', '2025-07-02 07:26:40'),
(6, 4, 'TOPO', 'Kalian mungkin akan mengalami kesulitan di masa awal pernikahan yang berasal dari ekonomi dan lainnya. Namun seiring berjalannya waktu, semua akan membaik dan kamu akan hidup bahagia.', '2025-07-02 07:26:57', '2025-07-02 07:26:57'),
(7, 5, 'TINARI', 'Kamu dan pasanganmu akan selalu dilimpahi kebahagiaan. Kalian akan diberikan kemudahan dalam mencari rezeki dan tidak akan hidup kekurangan, serta selalu diliputi keberuntungan.', '2025-07-02 07:28:06', '2025-07-02 07:28:06'),
(8, 6, 'PADU', 'Kamu dan pasangan mungkin akan sering mengalami pertengkaran saat berumah tangga. Namun tidak perlu kuatir, karena kalian masih bisa mengusahakan yang terbaik agar hubungan kalian berubah ke arah yang lebih baik juga.', '2025-07-02 07:28:21', '2025-07-02 07:28:21'),
(9, 7, 'SUJANAN', 'Pasangan dengan hasil weton ini harus waspada, karena rumah tangganya digambarkan akan sering mengalami masalah seperti pertengkaran hingga perselingkuhan. Untuk itu kalian harus bijak dalam menghadapi ujian.', '2025-07-02 07:28:46', '2025-07-02 07:28:46'),
(10, 8, 'PESTHI', 'Rumah tangga kamu dan pasangan akan berjalan dengan sangat harmonis, rukun, tenteram dan sejahtera sampai tua. Kalian mungkin akan menemui masalah, namun tidak akan mengganggu keharmonisan keluarga.', '2025-07-02 07:29:05', '2025-07-02 07:29:05'),
(11, 9, 'PEGAT', 'Hitungan ini menandakan bahwa kamu dan pasangan mungkin akan menghadapi banyak masalah dalam kehidupan. Namun selama keluarga merestui dan mendoakan, hubungan kalian akan berjalan dengan aman.', '2025-07-02 07:29:22', '2025-07-02 07:29:22'),
(12, 10, 'PEGAT', 'Hitungan ini menandakan bahwa kamu dan pasangan mungkin akan menghadapi banyak masalah dalam kehidupan. Namun selama keluarga merestui dan mendoakan, hubungan kalian akan berjalan dengan aman.', '2025-07-02 07:29:35', '2025-07-02 07:29:35'),
(13, 11, 'RATU', 'Kamu dan pasangan adalah jodoh sejati. Kalian berdua sangat dihargai dan disegani oleh orang sekitar. Hubungan kalian yang bahagia dan harmonis mampu membuat iri banyak orang.', '2025-07-02 07:29:50', '2025-07-02 07:29:50'),
(14, 12, 'JODOH', 'Sesuai dengan hasilnya, kamu dan pasangan memang ditakdirkan untuk berjodoh. Kalian bisa saling menerima segala kekurangan maupun kelebihan masing-masing dan akan menjalani rumah tangga yang harmonis hingga tua.', '2025-07-02 07:30:14', '2025-07-02 07:30:14'),
(15, 13, 'TOPO', 'Kalian mungkin akan mengalami kesulitan di masa awal pernikahan yang berasal dari ekonomi dan lainnya. Namun seiring berjalannya waktu, semua akan membaik dan kamu akan hidup bahagia.', '2025-07-02 07:31:08', '2025-07-02 07:31:08'),
(16, 14, 'TINARI', 'Kamu dan pasanganmu akan selalu dilimpahi kebahagiaan. Kalian akan diberikan kemudahan dalam mencari rezeki dan tidak akan hidup kekurangan, serta selalu diliputi keberuntungan.', '2025-07-02 07:31:30', '2025-07-02 07:31:30'),
(17, 15, 'PADU', 'Kamu dan pasangan mungkin akan sering mengalami pertengkaran saat berumah tangga. Namun tidak perlu kuatir, karena kalian masih bisa mengusahakan yang terbaik agar hubungan kalian berubah ke arah yang lebih baik juga.', '2025-07-02 07:31:45', '2025-07-02 07:31:45'),
(18, 16, 'SUJANAN', 'Pasangan dengan hasil weton ini harus waspada, karena rumah tangganya digambarkan akan sering mengalami masalah seperti pertengkaran hingga perselingkuhan. Untuk itu kalian harus bijak dalam menghadapi ujian.', '2025-07-02 07:32:02', '2025-07-02 07:32:02'),
(19, 17, 'PESTHI', 'Rumah tangga kamu dan pasangan akan berjalan dengan sangat harmonis, rukun, tenteram dan sejahtera sampai tua. Kalian mungkin akan menemui masalah, namun tidak akan mengganggu keharmonisan keluarga.', '2025-07-02 07:32:17', '2025-07-02 07:32:17'),
(20, 18, 'PEGAT', 'Hitungan ini menandakan bahwa kamu dan pasangan mungkin akan menghadapi banyak masalah dalam kehidupan. Namun selama keluarga merestui dan mendoakan, hubungan kalian akan berjalan dengan aman.', '2025-07-02 07:32:38', '2025-07-02 07:32:38'),
(21, 19, 'PEGAT', 'Hitungan ini menandakan bahwa kamu dan pasangan mungkin akan menghadapi banyak masalah dalam kehidupan. Namun selama keluarga merestui dan mendoakan, hubungan kalian akan berjalan dengan aman.', '2025-07-02 07:32:50', '2025-07-02 07:32:50'),
(22, 20, 'RATU', 'Kamu dan pasangan adalah jodoh sejati. Kalian berdua sangat dihargai dan disegani oleh orang sekitar. Hubungan kalian yang bahagia dan harmonis mampu membuat iri banyak orang.', '2025-07-02 07:33:09', '2025-07-02 07:33:09'),
(23, 21, 'JODOH', 'Sesuai dengan hasilnya, kamu dan pasangan memang ditakdirkan untuk berjodoh. Kalian bisa saling menerima segala kekurangan maupun kelebihan masing-masing dan akan menjalani rumah tangga yang harmonis hingga tua.', '2025-07-02 07:33:30', '2025-07-02 07:33:30'),
(24, 22, 'TOPO', 'Kalian mungkin akan mengalami kesulitan di masa awal pernikahan yang berasal dari ekonomi dan lainnya. Namun seiring berjalannya waktu, semua akan membaik dan kamu akan hidup bahagia.', '2025-07-02 07:33:50', '2025-07-02 07:33:50'),
(25, 23, 'TINARI', 'Kamu dan pasanganmu akan selalu dilimpahi kebahagiaan. Kalian akan diberikan kemudahan dalam mencari rezeki dan tidak akan hidup kekurangan, serta selalu diliputi keberuntungan.', '2025-07-02 07:34:07', '2025-07-02 07:34:07'),
(26, 24, 'PADU', 'Kamu dan pasangan mungkin akan sering mengalami pertengkaran saat berumah tangga. Namun tidak perlu kuatir, karena kalian masih bisa mengusahakan yang terbaik agar hubungan kalian berubah ke arah yang lebih baik juga.', '2025-07-02 07:34:22', '2025-07-02 07:34:22'),
(27, 25, 'SUJANAN', 'Pasangan dengan hasil weton ini harus waspada, karena rumah tangganya digambarkan akan sering mengalami masalah seperti pertengkaran hingga perselingkuhan. Untuk itu kalian harus bijak dalam menghadapi ujian.', '2025-07-02 07:34:39', '2025-07-02 07:34:39'),
(28, 26, 'PESTHI', 'Rumah tangga kamu dan pasangan akan berjalan dengan sangat harmonis, rukun, tenteram dan sejahtera sampai tua. Kalian mungkin akan menemui masalah, namun tidak akan mengganggu keharmonisan keluarga.', '2025-07-02 07:34:55', '2025-07-02 07:34:55'),
(29, 27, 'PEGAT', 'Hitungan ini menandakan bahwa kamu dan pasangan mungkin akan menghadapi banyak masalah dalam kehidupan. Namun selama keluarga merestui dan mendoakan, hubungan kalian akan berjalan dengan aman.', '2025-07-02 07:35:12', '2025-07-02 07:35:12'),
(30, 28, 'PEGAT', 'Hitungan ini menandakan bahwa kamu dan pasangan mungkin akan menghadapi banyak masalah dalam kehidupan. Namun selama keluarga merestui dan mendoakan, hubungan kalian akan berjalan dengan aman.', '2025-07-02 07:35:29', '2025-07-02 07:35:29'),
(31, 29, 'RATU', 'Kamu dan pasangan adalah jodoh sejati. Kalian berdua sangat dihargai dan disegani oleh orang sekitar. Hubungan kalian yang bahagia dan harmonis mampu membuat iri banyak orang.', '2025-07-02 07:35:47', '2025-07-02 07:35:47'),
(32, 30, 'JODOH', 'Sesuai dengan hasilnya, kamu dan pasangan memang ditakdirkan untuk berjodoh. Kalian bisa saling menerima segala kekurangan maupun kelebihan masing-masing dan akan menjalani rumah tangga yang harmonis hingga tua.', '2025-07-02 07:36:08', '2025-07-02 07:36:08'),
(33, 31, 'TOPO', 'Kalian mungkin akan mengalami kesulitan di masa awal pernikahan yang berasal dari ekonomi dan lainnya. Namun seiring berjalannya waktu, semua akan membaik dan kamu akan hidup bahagia.', '2025-07-02 07:36:25', '2025-07-02 07:36:25'),
(34, 32, 'TINARI', 'Kamu dan pasanganmu akan selalu dilimpahi kebahagiaan. Kalian akan diberikan kemudahan dalam mencari rezeki dan tidak akan hidup kekurangan, serta selalu diliputi keberuntungan.', '2025-07-02 07:36:41', '2025-07-02 07:36:41'),
(35, 33, 'PADU', 'Kamu dan pasangan mungkin akan sering mengalami pertengkaran saat berumah tangga. Namun tidak perlu kuatir, karena kalian masih bisa mengusahakan yang terbaik agar hubungan kalian berubah ke arah yang lebih baik juga.', '2025-07-02 07:37:00', '2025-07-02 07:37:00'),
(36, 34, 'SUJANAN', 'Pasangan dengan hasil weton ini harus waspada, karena rumah tangganya digambarkan akan sering mengalami masalah seperti pertengkaran hingga perselingkuhan. Untuk itu kalian harus bijak dalam menghadapi ujian.', '2025-07-02 07:37:19', '2025-07-02 07:37:19'),
(37, 35, 'PESTHI', 'Rumah tangga kamu dan pasangan akan berjalan dengan sangat harmonis, rukun, tenteram dan sejahtera sampai tua. Kalian mungkin akan menemui masalah, namun tidak akan mengganggu keharmonisan keluarga.', '2025-07-02 07:37:37', '2025-07-02 07:37:37'),
(38, 36, 'PEGAT', 'Hitungan ini menandakan bahwa kamu dan pasangan mungkin akan menghadapi banyak masalah dalam kehidupan. Namun selama keluarga merestui dan mendoakan, hubungan kalian akan berjalan dengan aman.', '2025-07-02 07:37:54', '2025-07-02 07:37:54');

-- --------------------------------------------------------

--
-- Table structure for table `hasil_sisas`
--

CREATE TABLE `hasil_sisas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `jumlah_neptu` int(11) NOT NULL,
  `nama_makna` text NOT NULL,
  `arti_makna` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hasil_sisas`
--

INSERT INTO `hasil_sisas` (`id`, `jumlah_neptu`, `nama_makna`, `arti_makna`, `created_at`, `updated_at`) VALUES
(1, 1, 'Wasesa Segara', 'ramalan jodoh untuk anda dan pasangan adalah akan menjadi pasangan yang memiliki keluhuran budi pekerti, mudah memberikan maaf, memiliki wibawa dimata orang lain, dan berlapang dada dalam berbagai hal.', '2025-07-02 07:38:51', '2025-07-02 07:38:51'),
(2, 2, 'Tunggak Semi', 'ramalan jodohnya pasangan yang masuk perhitungan ini akan memiliki rejeki yang melimpah dalam rumah tangganya.', '2025-07-02 07:39:31', '2025-07-02 07:39:31'),
(3, 3, 'Satria Wibawa', 'ramalan jodohnya adalah Satria Wibawa. Satria Wibawa memiliki makna bahwa anda dan pasangan dalam kehidupan rumah tangganya, memiliki kemuliaan dan keluhuran didalam keluarga maupun masyarakat.', '2025-07-02 07:39:48', '2025-07-02 07:39:48'),
(4, 4, 'Sumur Sinaba', 'yang didapatkan berarti anda dan pasangan masuk kategori Sumur Sinaba, yaitu pasangan yang memiliki pengetahuan atau kepandaian yang luar biasa sehingga sering menjadi tempat bertanya bagi orang lain.', '2025-07-02 07:40:02', '2025-07-02 07:40:02'),
(5, 5, 'Satria Wirang', 'Ramalan jodoh Satria Wirang akan dihasilkan dari pembagian neptu yang mendapatkan hasil atau sisa berupa angka 5, yang melambangkan bahwa anda dan pasangan akan sering menanggung malu dan susah.', '2025-07-02 07:40:24', '2025-07-02 07:40:24'),
(6, 6, 'Bumi Kepetak', 'Pasangan dengan nama Bumi Kepetak diramalkan dalam kehidupan rumah tangganya akan tahan pada kondisi sengsara dan kalut hati. Sisi baik pasangan ini adalah rajin bekerja dan selalu menjaga kebersihan.', '2025-07-02 07:47:30', '2025-07-02 07:47:30'),
(7, 0, 'Lebu Ketiup Angin', 'Ramalan Lebu Ketiup Angin memiliki makna bahwa pasangan yang masuk dalam kategori ini akan mengalami kehidupan yang sengsara, keinginan seringkali tidak terkabul, dan memiliki kecenderungan sering berpindah rumah.', '2025-07-02 07:48:00', '2025-07-03 06:21:31');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(6, '0001_01_01_000000_create_users_table', 1),
(7, '0001_01_01_000001_create_cache_table', 1),
(8, '0001_01_01_000002_create_jobs_table', 1),
(9, '2025_06_03_134836_create_categories_table', 1),
(10, '2025_06_03_135513_create_products_table', 1),
(11, '2025_06_28_124635_create_hasil_jumlahs_table', 2),
(12, '2025_07_02_134840_create_hasil_sisas_table', 3),
(13, '2025_08_24_113631_kolom_link_pada_tabel_produk', 4),
(14, '2025_09_07_041046_add_type_to_users', 5),
(15, '2025_09_14_070151_create_order_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_name` varchar(255) NOT NULL,
  `order_desc` text DEFAULT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `status` varchar(255) NOT NULL,
  `link_order` varchar(255) DEFAULT NULL,
  `bukti_pembayaran` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `order_name`, `order_desc`, `product_id`, `status`, `link_order`, `bukti_pembayaran`, `created_at`, `updated_at`) VALUES
(1, 'Reza', 'adcSCC', 2, 'selesai', 'https://wp.raddmacitraindofurniture.com', NULL, '2025-09-14 00:03:34', '2025-09-14 04:37:09'),
(4, 'aadasasa', 'wertyuksasasasas', 1, 'belumbayar', 'https://wp.raddmacitraindofurniture.com', 'bukti_pembayaran/g8G3rykEDspiphg7J9dzR7sVPfYMSizVgOfwJUn1.jpg', '2025-09-14 01:21:32', '2025-09-14 04:36:40');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category_id`, `image`, `name`, `description`, `price`, `link`, `created_at`, `updated_at`) VALUES
(1, 9, 'products/oUGeJzjkhFhk53FUS7TUOdpnDOjvYjGDyKDUNBhh.png', 'Goresan Berbungaaaa', 'Goresan berbunga, dengan nuansa islamh yang berkesan indah dan sucion', 99000.00, 'https://invitation-bali-culture.ramacitraindofurniture.com/', '2025-06-08 02:03:13', '2025-08-24 06:06:31'),
(2, 9, 'products/of6NmEAEgXyxItn0gFtUFaBpAoOtGYpup5g40qh9.png', 'Java Culture', 'ini contoh pada java culture deskripsi', 99000.00, 'https://invitation-java-culture.ramacitraindofurniture.com/', '2025-06-08 02:34:47', '2025-08-24 06:05:37'),
(3, 7, 'products/BhvdAqB4jqvZp3P1b5fIgFdaOngyyeppbiHMs7xs.png', 'Brown Elegan', 'ini contoh brown elegan ya', 99000.00, 'https://invitation.ramacitraindofurniture.com/', '2025-06-08 02:51:04', '2025-08-24 06:06:15');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('6hjZVn11H3TwQQFbVPkufejAAlA7znx7EUXyLqXP', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoibkpVMGhxSTh2QkxpZ2JFeG4xaGc5Nm5SQm1DMUUzSzNtcmRqSkVKQSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTtzOjk6Il9wcmV2aW91cyI7YToxOntzOjM6InVybCI7czoyNzoiaHR0cDovL2xvY2FsaG9zdDo4MDAwL29yZGVyIjt9fQ==', 1757850204);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `type`) VALUES
(1, 'Admin', 'admin@gmail.com', NULL, '$2y$12$JBPsgXnapTxi2Q3j3QBmaOm4iFYUkhkTnDtlA75aIFjExuENDlYpK', NULL, '2025-06-06 17:34:10', '2025-09-06 21:16:07', 'admin'),
(2, 'User Test 1', 'user@gmail.com', NULL, '$2y$12$.0dlAcc0.IZYqul1YxJSu.cHnpSBi7C.1Qbo9XcEUsnrMnovTsEqK', NULL, '2025-09-06 21:17:23', '2025-09-06 21:17:23', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `hasil_jumlahs`
--
ALTER TABLE `hasil_jumlahs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hasil_sisas`
--
ALTER TABLE `hasil_sisas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_product_id_foreign` (`product_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hasil_jumlahs`
--
ALTER TABLE `hasil_jumlahs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `hasil_sisas`
--
ALTER TABLE `hasil_sisas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
