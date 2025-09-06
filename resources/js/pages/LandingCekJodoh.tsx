import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode, useEffect, useState } from 'react';
import Footer from './Compon_FE/Footer';
// import Navbar from './Compon_FE/Navbar';
import { Link } from "@inertiajs/react";

// Komponen animasi untuk section
const AnimatedSection = ({
    children,
    className = '',
}: {
    children: ReactNode;
    className?: string;
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className={`rounded-lg shadow-md overflow-hidden ${className}`}
        >
            {children}
        </motion.section>
    );
};

// Komponen untuk hero section dengan background
const HeroSection = () => {
    return (
        <section className="relative h-screen flex items-center justify-center">
            {/* Background dengan gambar - PERUBAHAN DI SINI */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/img/bg-cek-jodoh.png')",
                    backgroundColor: '#f9f9f9', // fallback color
                    backgroundPosition: 'bottom',
                }}
            >
                <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
            <div className="container mx-auto px-4 z-10 text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-7xl md:text-7xl font-bold mb-2 font-lobster"
                >
                    Cek Jodoh
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-3xl md:text-3xl mb-8 font-semibold font-lobster"
                >
                    Berdasarkan Weton Jawa
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-xl md:text-xl mb-8"
                >
                   Sistem Pakar Peramalan Jodoh berdasarkan Weton Jawa
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-orange-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg"
                    onClick={() => {
                        // Navigasi ke halaman cek jodoh
                        window.location.href = '/cekjodohpage';
                    }}
                >
                    Mulai Sekarang
                </motion.button>
            </div>
        </section>
    );
};

// Komponen utama landing page
const LandingCekJodoh = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const cardData = [
        {
            title: "Berdasar Tradisi",
            desc: "Perhitungan didasarkan pada pakem tradisi Jawa yang telah digunakan secara turun-temurun.",
            hoverText: "Menggunakan perhitungan warisan leluhur Jawa yang telah teruji selama berabad-abad",
            bgImage: "/img/bg-card-1.jpg", // Ganti dengan path gambar Anda
            icon: "📜" // Emoji atau ikon untuk hover state
        },
        {
            title: "Mudah & Cepat",
            desc: "Hanya dengan memasukkan tanggal lahir dan pasangan, hasil langsung muncul.",
            hoverText: "Proses intuitif yang memberikan hasil dalam hitungan detik",
            bgImage: "/img/bg-card-2.jpg", // Ganti dengan path gambar Anda
            icon: "⚡" // Emoji atau ikon untuk hover state
        },
        {
            title: "Modern & Profesional",
            desc: "Tampil dalam desain elegan dengan penjelasan detail agar mudah dipahami.",
            hoverText: "Antarmuka modern yang menyajikan informasi dengan jelas dan profesional",
            bgImage: "/img/bg-card-3.jpg", // Ganti dengan path gambar Anda
            icon: "💼" // Emoji atau ikon untuk hover state
        },
        {
            title: "Hanya Referensi",
            desc: "Hanya sebagai pengetahuan saja, jangan terlalu dipercaya karena urusan takdir kembali pada Tuhan.",
            hoverText: "Sebagai bahan pertimbangan, bukan penentu keputusan akhir",
            bgImage: "/img/bg-card-4.jpg", // Ganti dengan path gambar Anda
            icon: "🙏" // Emoji atau ikon untuk hover state
        }
    ];

    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        };

        // jalankan sekali waktu mount
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className="min-h-screen bg-gray-100 text-black">

            {/* Navbar muncul kalau discroll */}
            <AnimatePresence>
                {showNavbar && (
                    <motion.header
                        initial={{ y: -80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -80, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed top-0 left-0 w-full z-[9999] bg-white/80 backdrop-blur-md shadow-md"
                    >
                        {/* Top Bar */}
                        <div className="bg-[#331A00] text-white md:text-sm text-[12px] py-2 px-4 flex justify-between items-center">
                            <span>Support: (+62) 8982-1944-77</span>
                            <span>
                                Daftar dan <strong>DAPATKAN 25% DISKON</strong> untuk pertama kali,{" "}
                                <a href="/register" className="underline">
                                    Klik Untuk Daftar
                                </a>
                            </span>
                        </div>

                        {/* Navbar */}
                        <div className="flex items-center justify-between px-6 md:px-40 py-4 bg-white relative">
                            {/* Logo */}
                            <div className="text-2xl font-bold amplop">
                                <img loading="lazy" className="h-10" src="/img/amplop.png" />
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                className="md:hidden text-black"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d={
                                            menuOpen
                                                ? "M6 18L18 6M6 6l12 12"
                                                : "M4 6h16M4 12h16M4 18h16"
                                        }
                                    />
                                </svg>
                            </button>

                            {/* Desktop Menu */}
                            <ul className="hidden md:flex md:gap-6 text-md font-semibold ">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/produk">Produk</Link>
                                </li>
                                <li>
                                    <Link href="/cekjodoh">Cek Jodoh</Link>
                                </li>
                                <li>
                                    <Link
                                        href="/login"
                                        className="py-2 px-4 bg-gray-800 text-white rounded-lg"
                                    >
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Mobile Menu */}
                        <AnimatePresence>
                            {menuOpen && (
                                <motion.ul
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="md:hidden flex flex-col bg-white px-6 py-2 text-md font-semibold shadow-md"
                                >
                                    <li className="py-2 border-b">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="py-2 border-b">
                                        <Link href="/produk">Produk</Link>
                                    </li>
                                    <li className="py-2 border-b">
                                        <Link href="/cekjodoh">Cek Jodoh</Link>
                                    </li>
                                    <li className="py-2 border-b">
                                        <Link href="/login">Login</Link>
                                    </li>
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </motion.header>
                )}
            </AnimatePresence>


            {/* Hero Section */}
            <HeroSection />
            <div className="container xl:px-40 lg:mx-auto lg:px-0 px-4 py-16 space-y-16 mx-auto" >
                {/* Tentang Weton Jawa */}
                <AnimatedSection className="bg-white"  >
                    <div className=" bg-right bg-no-repeat p-6 md:p-10" style={{
                        backgroundImage: "url('/img/bg-java-1.png')",
                        backgroundSize: 'contain',
                        // backgroundColor: '#f97316' // fallback color
                    }}>

                        <div className="grid md:grid-cols-2 gap-8 items-center" >
                            <div className="h-64 md:h-80 rounded-xl flex items-center justify-center text-white" style={{
                                backgroundImage: "url('/img/weton.png')",
                                backgroundSize: 'cover',
                                // backgroundColor: '#f97316' // fallback color
                            }} >
                                {/* <span className="text-xl">Ilustrasi Weton Jawa</span> */}
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">Tentang Weton Jawa</h2>
                                <p className="text-gray-900 leading-relaxed font-bold">
                                    Weton Jawa adalah tradisi turun-temurun masyarakat Jawa yang menghitung hari kelahiran seseorang berdasarkan penanggalan Jawa. Dari hitungan ini dipercaya bisa diketahui karakter, rejeki, serta kecocokan pasangan. Dengan pendekatan modern, kami menghadirkan perhitungan weton secara digital sehingga lebih mudah diakses, cepat, dan tetap menjaga kelestarian budaya.
                                </p>
                            </div>
                            {/* <div className="bg-cover h-64 md:h-80 rounded-lg flex items-center justify-center text-white" style={{
                                    backgroundImage: "url('/img/weton.png')",
                                    backgroundSize: 'contain',
                                    // backgroundColor: '#f97316' // fallback color
                                }} > */}

                        </div>
                    </div>
                </AnimatedSection>

                {/* Mengapa Section */}
                <AnimatedSection className="">
                    <div className="p-6 md:p-10" style={{
                        backgroundImage: "url('/img/bg-java-2.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'left',
                        padding: '2rem',
                        borderRadius: '0.5rem'
                    }}>

                        <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-8 text-center">Mengapa?</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {cardData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: 0, scale: 1.00 }}
                                    className="p-6 rounded-lg shadow-sm text-center cursor-pointer transition-all duration-300 relative overflow-hidden h-48 flex items-center justify-center"
                                    style={{
                                        backgroundImage: hoveredCard === index
                                            ? `url(${item.bgImage})`
                                            : 'none',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundColor: hoveredCard === index ? 'transparent' : '#f3f4f6',
                                    }}
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    {/* Overlay untuk keterbacaan teks saat background gambar aktif */}
                                    {hoveredCard === index && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="p-4 text-black"
                                        >
                                            <div className="text-3xl mb-3">{item.icon}</div>
                                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                            {/* <p className="text-sm">{item.hoverText}</p> */}
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                                className="mt-4 inline-block bg-orange-500 text-white py-1 px-3 rounded-full text-xs"
                                            >
                                                Selengkapnya
                                            </motion.div>
                                        </motion.div>
                                    )}

                                    {/* Konten teks */}
                                    {hoveredCard !== index && (
                                        <div className="relative z-10 p-4">
                                            <h3 className={`font-bold text-lg mb-2 transition-colors duration-300 ${hoveredCard === index ? 'text-white' : 'text-orange-600'
                                                }`}>
                                                {item.title}
                                            </h3>
                                            <p className={`transition-colors duration-300 ${hoveredCard === index ? 'text-white' : 'text-gray-700'
                                                }`}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    )}

                                </motion.div>
                            ))}
                        </div>

                    </div>
                </AnimatedSection>

                {/* Cara Kerja */}
                <AnimatedSection className=" bg-linear-65 from-amber-800 to-orange-950 p-6 py-10">
                    <h2 className="text-3xl font-bold text-center text-white mb-6">
                        Cara Kerja
                    </h2>

                    <div className="space-y-10">
                        {/* Bagian Hasil Jumlah */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center">
                            <div className="bg-white h-40 rounded-lg flex items-center justify-center" style={{ backgroundImage: "url('/img/hasil_jumlah.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                {/* bisa isi icon / gambar */}
                            </div>
                            <div className="md:col-span-3">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                                    Hasil Jumlah
                                </h3>
                                <p className="text-white leading-relaxed">
                                    Sistem menghitung berdasarkan dari penjumlahan neptu (nilai) dari weton pria dan weton wanita sehingga menampilkan beberapa hasil yang telah memiliki nama beserta makna dari hasilnya.
                                </p>
                            </div>
                        </div>

                        {/* Bagian Sisa Bagi */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center">
                            <div className="bg-white h-40 rounded-lg flex items-center justify-center" style={{ backgroundImage: "url('/img/hasil_sisa.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                {/* bisa isi icon / gambar */}
                            </div>
                            <div className="md:col-span-3">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                                    Sisa Bagi
                                </h3>
                                <p className="text-white leading-relaxed">
                                    Hampir mirip dengan hasil jumlah, tetapi pada sisa bagi. Sistem menghitung berdasarkan sisa bagi dari penjumlahan neptu (nilai) dari weton pria dan weton wanita sehingga menampilkan beberapa hasil yang telah memiliki nama beserta makna dari hasil sisa bagi.
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Cara Penggunaan */}
                <AnimatedSection className="bg-white p-6 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-10 text-center">Cara Penggunaan</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                step: "1",
                                title: "Klik Tombol Mulai",
                                desc: "Akses aplikasi melalui tombol mulai di halaman utama"
                            },
                            {
                                step: "2",
                                title: "Masukkan Hari Lahir (Pria)",
                                desc: "Input tanggal lahir dan weton untuk pihak pria"
                            },
                            {
                                step: "3",
                                title: "Masukkan Hari Lahir (Wanita)",
                                desc: "Input tanggal lahir dan weton untuk pihak wanita"
                            },
                            {
                                step: "4",
                                title: "Hasil Perhitungan",
                                desc: "Sistem akan menampilkan hasil perhitungan kecocokan"
                            }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-orange-300 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-orange-500 text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-900 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
                /
                {/* CTA Section */}
                <AnimatedSection className="bg-orange-500 text-center text-white">
                    <div className="wrap p-10 " style={{ backgroundImage: "url('/img/bg-java-3.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Tunggu Apa Lagi?</h2>
                        <p className="text-xl mb-6">Mulai perhitungan weton jodoh Anda sekarang</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg"
                              onClick={() => {
                        // Navigasi ke halaman cek jodoh
                        window.location.href = '/cekjodohpage';
                    }}
                        >
                            Mulai Sekarang
                        </motion.button>
                    </div>
                </AnimatedSection>
            </div>

            {/* Footer */}
            {/* <footer className="bg-gray-800 text-white py-8 text-center">
                <p>© {new Date().getFullYear()} Cek Jodoh Berdasarkan Weton Jawa</p>
            </footer> */}

            <Footer />
        </div>
    );
};

export default LandingCekJodoh;
