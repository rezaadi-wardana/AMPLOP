// import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Navbar from './Compon_FE/Navbar'
import Footer from "./Compon_FE/Footer";


export default function Landing() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <div className="Landing bg-white text-gray-800 font-sans">

            <Navbar />

            {/* Spacer so content doesn't hide under fixed header */}
            <div className="h-[130px] md:h-[110px]" />

            {/* Hero Section */}
            <section className="grid md:px-40 grid-cols-1 md:grid-cols-2 items-center p-8 bg-[#F9F9F9]">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="text-sm bg-yellow-100 px-3 py-1 inline-block rounded-full font-medium mb-2">
                            ⭐ 50% OFF Summer Super Sale
                        </div>
                        <h1 className="text-4xl font-bold mb-3">Sudah Saatnya Digitalisasikan Event Anda</h1>
                        <p className="text-gray-600 mb-6">
                            Di era serba digital, Amplop hadir membantu membranding event kepada peserta agar event memiliki kesan sejak peserta mengetahuinya.
                        </p>
                        <Link
                            href="/undangan"
                            className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm hover:bg-gray-800"
                        >
                            Coba Sekarang
                        </Link>
                    </motion.div>
                </div>
                <div className="relative h-[400px] overflow-hidden flex justify-center mt-8 md:mt-0">
                    <motion.img loading="lazy" src="/img/hero.png"
                        alt="Hero"
                        className="max-w-md"
                        style={{ y: scrollY * 0.3 }} // parallax efek scroll
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }} />
                </div>
            </section>

            {/* Feature Icons */}
            <div className="flex flex-col md:flex-row justify-around text-center py-20 md:px-40 bg-white gap-6">
                <div>
                    <div className="text-2xl">  <img loading="lazy" src="/img/konsultasi_gratis.png" alt="Hero" className="mx-auto mb-5 h-20" /></div>
                    <p className="font-bold">Konsultasi Gratis</p>
                    <p className="text-sm text-gray-600">Tanya-tanya Gratis Via WhatsApp</p>
                </div>
                <div>
                    <div className="text-2xl">  <img loading="lazy" src="/img/pengerjaan_cepat.png" alt="Hero" className="mx-auto mb-5 h-20" /></div>
                    <p className="font-bold">Pengerjaan Cepat</p>
                    <p className="text-sm text-gray-600">Lengkapi data yang ditampilkan akan mempercepat</p>
                </div>
                <div>
                    <div className="text-2xl">  <img loading="lazy" src="/img/tampilan_animatif.png" alt="Hero" className="mx-auto mb-5 h-20" /></div>
                    <p className="font-bold">Tampilan Animatif</p>
                    <p className="text-sm text-gray-600"> Project animasi dibuat menggunakan teknologi terkini</p>
                </div>
            </div>

            {/* Galeri */}
            <div className="md:grid grid-col bg-gray-900 text-center py-20 md:px-40 bg-white gap-5 md:h-[100vh] h-[100%] w-[100%] ">
                <div className="col-1 h-[100%] w-[100%] bg-gray-200 bg-linear-to-br from-transparent to-white relative rounded-l-lg md:mb-0 mb-5  ">
                    <a href="/cekjodoh">
                        <div className="wrap-bg-gradient h-[100%] w-[100%] bg-[url(/img/box-1.png)] bg-no-repeat bg-contain bg-bottom bg-right text-left p-10  rounded-l-lg hover:bg-gray-300 hover:ease-in ease-in duration-400">
                            <div className="wrap-text w-[70%]">
                                <h1 className="text-[1.5em] md:text-[2em] mb-2 font-black">Cek Jodoh Anda</h1>
                                <p className="mb-5">Cek jodoh Anda dengan menggunakan layanan Cek Jodoh berdasarkan weton jawa, Hanya untuk pengetahuan bukan untuk dipercaya</p>
                                <a href="/cekjodoh" className="bg-[#FFC107] text-gray-900 font-bold py-2 px-5 rounded-full">Coba Sekarang</a>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-2 h-[100%] w-[100%] flex flex-col gap-5">
                    <div className="row-1 h-[50%] bg-gray-200 bg-linear-to-br from-transparent to-white relative rounded-l-lg ">
                        <div className="wrap-bg-gradient h-[100%]  bg-[url(/img/box-2.png)] bg-no-repeat bg-contain bg-bottom bg-right text-left p-10  rounded-tr-lg hover:bg-gray-300 hover:ease-in ease-in duration-400">
                            <div className="wrap-text w-[60%]">
                                <h1 className="text-[1.5em] md:text-[2em] mb-2 font-semibold">Undangan Digital</h1>
                                <p>Buat undangan digital yang menarik dan interaktif dengan mudah.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row-2 h-[50%] w-[100%] bg-gray-200 bg-linear-to-br from-transparent to-white relative rounded-l-lg ">
                        <div className="wrap-bg-gradient h-[100%]  bg-[url(/img/box-3.png)] bg-no-repeat bg-contain bg-bottom bg-right text-left p-10  rounded-br-lg hover:bg-gray-300 hover:ease-in ease-in duration-400">
                            <div className="wrap-text w-[60%]">
                                <h1 className="text-[1.5em] md:text-[2em] mb-2 font-semibold">Genggaman</h1>
                                <p>Sebarakan undangan Anda dengan mudah dan cepat hanya dalam genggaman, lebih praktis dan hemat </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2 md:px-40 py-12">

                {[{
                    title: "Adat Jawa",
                    image: "/img/P1.png",
                    price: "Rp 99.000"
                }, {
                    title: "Adat Bali",
                    image: "/img/P2.png",
                    price: "Rp 99.000"
                }, {
                    title: "Silver Elegan",
                    image: "/img/P3.png",
                    price: "Rp 49.400",
                    originalPrice: "Rp 99.000",
                    discount: "50%"
                }].map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                            y: -4,
                        }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut"
                        }}
                        className="bg-[#F9F9F9] md:p-6 p-2 rounded-xl grid hover:bg-white transition-colors duration-300 place-items-center"
                    >
                        <h3 className="text-lg place-self-start font-semibold mb-2">Undangan Pernikahan</h3>
                        <h2 className="text-2xl place-self-start font-bold">{item.title}</h2>

                        {item.originalPrice ? (
                            <div className="flex items-center flex-wrap">
                                <p className="text-sm w-32 flex-auto text-gray-500 line-through decoration-3 tracking-wider my-2 font-medium">{item.originalPrice}</p>
                                <div className="text-sm w-32 flex-auto bg-yellow-100 px-3 py-1 inline-block rounded-full font-medium mb-2 text-center">
                                    <span className="font-bold text-green-700">{item.price}</span> ⭐ {item.discount} OFF
                                </div>
                            </div>
                        ) : (
                            <p className="text-sm text-green-600 my-2 font-bold place-self-start">{item.price}</p>
                        )}

                        <img loading="lazy" src={item.image} alt={item.title} className="rounded-md md:h-60 h-40 mt-4 self-stretch " />
                        <Link
                            href="/undangan"
                            className="inline-block mx-15 bg-black text-white text-center px-6 py-3 rounded-md text-sm hover:bg-gray-800 transition-all duration-300"
                        >
                            Preview
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* TESTIMONI & SUBSCRIBE */}
            <div className="flex flex-col md:flex-row justify-between px-10 md:px-40 py-12 bg-gray-200 bg-opacity-50 relative">
                {/* Testimoni */}
                <motion.div initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }} className="md:w-1/2 mb-8 md:mb-0">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="Testimoni"
                            className="w-14 h-14 rounded-full object-cover"
                        />
                        <div>
                            <p className="italic text-sm">
                                "Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a."
                            </p>
                            <p className="text-pink-600 font-semibold mt-1">Bin Burhan</p>
                            <p className="text-xs">Dhaka, BD</p>
                        </div>
                    </div>
                </motion.div>

                {/* Subscribe */}
                <div className="md:w-1/2">
                    <h3 className="text-lg font-semibold mb-2">SUBSCRIBE</h3>
                    <p className="text-sm mb-4">FOR OUR NEWSLETTER AND PROMOTION</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full px-4 py-2 rounded-l-full bg-gray-50 border border-gray-300 focus:outline-none"
                        />
                        <button className="px-6 py-2 bg-gray-900 text-white rounded-r-full hover:bg-gray-600">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <Footer />



        </div>



    );
}
