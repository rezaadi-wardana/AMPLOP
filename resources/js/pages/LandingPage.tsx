// import { useState } from "react";
import { motion } from "framer-motion";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Navbar from './Compon_FE/Navbar'
import Footer from "./Compon_FE/Footer";
import Galeri from "./Compon_FE/Galeri";

interface Product {
    id: number;
    image: string;
    name: string;
    description: string;
    price: string | number;
    link: string;
    category_id: number;
}

interface Category {
    id: number;
    category_name: string;
    category_desc: string;
}


interface PageProps {
    products: Product[];
    categories: Category[];
}


function formatPrice(price: number): string {
    return price.toLocaleString('id-ID', { minimumFractionDigits: 0 });
}

export default function Landing() {
    const { products, } = usePage().props as unknown as PageProps;

    // Use all products since filtering is commented out
    const filteredProducts = products;

      // state untuk kategori terpilih
        // const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

        // filter produk sesuai kategori
        // const filteredProducts =
        //     selectedCategory === null
        //         ? products
        //         : products.filter((p) => p.category_id === selectedCategory);

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
            <Galeri />

            {/* Product Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2 md:px-40 py-12">

                {/* {[{
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
                ))} */}
                  {(filteredProducts ?? []).map((product: Product) => (

                                    <motion.div
                                        key={product.id}
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
                                        <h2 className="text-2xl place-self-start font-bold">{product.name}</h2>

                                        {/* {product.originalPrice ? (
                                            <div className="flex items-center flex-wrap">
                                                <p className="text-sm w-32 flex-auto text-gray-500 line-through decoration-3 tracking-wider my-2 font-medium">{item.originalPrice}</p>
                                                <div className="text-sm w-32 flex-auto bg-yellow-100 px-3 py-1 inline-block rounded-full font-medium mb-2 text-center">
                                                    <span className="font-bold text-green-700">{item.price}</span> ⭐ {item.discount} OFF
                                                </div>
                                            </div>
                                        ) : ( */}
                                        <p className="text-sm text-green-600 my-2 font-bold place-self-start">Rp {formatPrice(Number(product.price))}</p>
                                        {/* )} */}

                                        <img loading="lazy" src={`storage/${product.image}`} alt={product.name} className="rounded-md md:h-60 h-40 my-4 self-stretch " />
                                        <a
                                            href={product.link} target='_blank'
                                            className="inline-block mx-15 bg-black text-white text-center px-6 py-3 rounded-md text-sm hover:bg-gray-800 transition-all duration-300"
                                        >
                                            Preview
                                        </a>
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
