// import { useState } from "react";
import { motion } from "framer-motion";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Navbar from './Compon_FE/Navbar'
import Footer from "./Compon_FE/Footer";
import Galeri from "./Compon_FE/Galeri";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaWhatsapp } from "react-icons/fa";
import { Eye, SendHorizonalIcon } from "lucide-react";


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
            <section className="bg-[#F9F9F9] flex justify-center min-h-[400px] md:min-h-[500px] relative overflow-hidden">
                <div className="wrap-hero grid self-center grid-cols-1 md:grid-cols-2 items-center px-8 py-20 max-w-[1280px]">
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
                            <a
                                href="#pricing"
                                className="inline-block bg-black text-white px-6 py-3 rounded-md  border-3 border-transparent text-sm hover:bg-transparent hover:text-black hover:border-3 hover:border-black font-bold"
                            >
                                Coba Sekarang
                            </a>
                        </motion.div>
                    </div>
                    <div className="relative h-[400px] overflow-hidden flex justify-center mt-8 md:mt-0">
                        <motion.img loading="lazy" src="/img/hero.png"
                            alt="Hero"
                            className="max-w-md object-cover"
                            style={{ y: scrollY * 0.3 }} // parallax efek scroll
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }} />
                    </div>
                </div>
            </section>

            {/* Feature Icons */}
            <div className="flex flex-col md:flex-row justify-between text-center py-20 px-8 max-w-[1280px] mx-auto bg-white gap-6">
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
            <div className="flex flex-col md:px-8 px-2 py-20 max-w-[1280px] mx-auto">
                <h2 className="text-3xl font-bold mb-3">Produk Terbaru</h2>
                <div className="wrap-product-recent grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2">
                    {(filteredProducts ?? [])
                        .sort((a, b) => b.id - a.id) // urutkan dari id terbesar (terbaru)
                        .slice(0, 3) // ambil 3 produk teratas
                        .map((product: Product) => (
                            <motion.div
                                key={product.id}
                                whileHover={{
                                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut"
                                }}
                                className="md:bg-[#F9F9F9] md:p-6 py-4 rounded-xl grid hover:bg-white transition-colors duration-300 place-items-center"
                            >
                                <h3 className="md:text-sm text-sm place-self-start font-100 mb-2">Undangan Pernikahan</h3>
                                <h2 className="md:text-2xl text-lg place-self-start font-bold">{product.name}</h2>
                                <p className="text-sm text-green-600 my-2 font-bold place-self-start">Rp <span className="text-2xl">{formatPrice(Number(product.price))}</span></p>
                                {/* )} */}

                                <img loading="lazy" src={`/${product.image}`} alt={product.name} className="rounded-md md:h-60 h-40 my-4 self-stretch " />
                                <div className="button flex gap-2  md:px-8 px-4 w-full">
                                    <a
                                        href={product.link} target='_blank'
                                        className="bg-orange-950 text-white text-center md:px-6 px-2 w-full py-3 rounded-md text-sm hover:bg-orange-800 transition-all duration-30 flex items-center justify-center gap-2 text-[1em] "
                                    >
                                        <Eye /> <p className='md:block hidden'> Demo</p>
                                    </a>
                                    <a
                                        href="https://wa.me/0898214477" target='_blank'
                                        className="flex items-center justify-center gap-2 md:mx-auto bg-[#FFC107] text-black font-bold text-center md:px-6 px-2 w-full py-3 rounded-md text-sm hover:bg-[#FFA100] transition-all duration-300 text-[1em]"
                                    >
                                        <FaWhatsapp className='hidden md:block' /><p>Order </p>
                                    </a>
                                </div>
                            </motion.div>
                        ))}

                </div>
                <Button className="bg-transparent border-2 rounded-sm border-black flex self-center mt-10 cursor-pointer hover:bg-orange-100  hover:border-0 transition-colors duration-300">
                    <Link href="/produk" className="flex items-center">Selengkapnya</Link>
                </Button>
            </div>

            {/* SECTION PUTIH */}
            <section id="pricing" className="bg-white flex flex-col items-center px-8 py-20 max-w-[1280px] mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-15 text-orange-950">
                    Temukan Pilihan Undangan Terbaik Untuk Anda
                </h2>
                <div className="grid md:grid-cols-3 gap-8 w-full">
                    {/* Paket Terjangkau */}
                    <Card className=" border-none rounded-2xl shadow-sm bg-gray-100 shadow-md text-black   mt-10 ">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-orange-900">
                                Paket Terjangkau
                            </CardTitle>
                            <p className="text-gray-900 font-bold ">Rp <span className="font-black text-[2em]">50.000</span></p>
                        </CardHeader>
                        <CardContent className="text-left space-y-4 text-sm">
                            <Button variant="secondary" onClick={() => window.open("https://wa.link/0thqmo", "_blank")} className="w-full  mb-4 text-gray-900 bg-orange-100 hover:bg-orange-200 cursor-pointer">
                                Dapatkan Pake
                            </Button>
                            <p className="font-bold text-orange-800">Cocok untuk:</p>
                            <p>Pasangan yang ingin undangan elegan dengan harga terjangkau.</p>
                            <p className="font-bold text-orange-800">Fitur yang didapatkan:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Tema undangan elegan</li>
                                <li>Informasi lengkap acara</li>
                                <li>Daftar tamu digital</li>
                                <li>Musik latar</li>
                                <li>Gallery foto</li>
                                <li>Countdown timer</li>
                                <li>Peta lokasi</li>
                                <li>QR Code ke lokasi</li>
                            </ul>

                        </CardContent>
                    </Card>

                    {/* Paket Reguler */}
                    <Card className="bg-linear-to-bl from-orange-700 to-orange-950 h-[100%] w-[100%] p-0 rounded-2xl relative gap-0 shadow-md ">
                        <h2 className="py-2 font-bold text-white">Terpopuler</h2>
                        <Card className="border rounded-2xl shadow-lg bg-gray-100 text-black h-[100%] w-[100%] text-black border-2 border-orange-900  top-4 left-4">
                            <CardHeader>
                                <CardTitle className="text-lg  font-bold text-orange-900">
                                    Paket Reguler
                                </CardTitle>
                                <p className="text-gray-900 font-bold ">Rp <span className="font-black text-[2em]">100.000</span></p>
                            </CardHeader>
                            <CardContent className="text-left space-y-4 text-sm">
                                <Button variant="secondary" onClick={() => window.open("https://wa.link/t9xvl4", "_blank")} className="w-full  mb-4 text-white bg-orange-800 hover:bg-orange-950 cursor-pointer">
                                    Dapatkan Paket
                                </Button>
                                <p className="font-bold text-orange-800">Cocok untuk:</p>
                                <p>Pasangan yang ingin undangan elegan dengan fitur lebih lengkap.</p>
                                <p className="font-bold text-orange-800">Fitur yang didapatkan:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Semua fitur paket Terjangkau</li>
                                    <li>Ucapan & doa digital</li>
                                    <li>Galeri video</li>
                                    <li>Hitung mundur ke acara</li>
                                    <li>Desain eksklusif</li>
                                    <li>Bonus domain sementara khusus</li>
                                </ul>

                            </CardContent>
                        </Card>
                    </Card>

                    {/* Paket Maksimal */}
                    <Card className=" border-none rounded-2xl shadow-sm bg-gray-100 shadow-md text-black   mt-10 ">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-orange-900">
                                Paket Maksimal
                            </CardTitle>
                            <p className="text-gray-900 font-bold ">Rp <span className="font-black text-[2em]">200.000</span></p>
                        </CardHeader>
                        <CardContent className="text-left space-y-4 text-sm">
                            <Button variant="secondary" onClick={() => window.open("https://wa.link/ibvt19", "_blank")} className="w-full  mb-4 text-gray-900 bg-orange-100 hover:bg-orange-200 cursor-pointer">
                                Dapatkan Paket
                            </Button>
                            <p className="font-bold text-orange-800">Cocok untuk:</p>
                            <p>Pasangan yang ingin tampilan maksimal dan personalisasi penuh.</p>
                            <p className="font-bold text-orange-800">Fitur yang didapatkan:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Semua fitur paket Reguler</li>
                                <li>Custom domain</li>
                                <li>Background video</li>
                                <li>Form RSVP (kehadiran tamu)</li>
                                <li>Link amplop digital</li>
                                <li>Desain kustom sesuai tema</li>
                            </ul>

                        </CardContent>
                    </Card>
                </div>
            </section >

            {/* SECTION COKLAT */}
            <section className="bg-orange-950 text-white mx-auto flex justify-center relative">
                <img src="/img/bg.wyg.png" className="w-60 absolute right-0 bottom-0 object-contain opacity-50" alt="" />
                <div className="wrap px-8 py-20 max-w-[1280px] flex-1">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-20">
                        <div className=" w-[50%] items-center gap-4 bg-white rounded-lg text-orange-900 p-10 flex flex-col justfy-center">
                            <Avatar className="h-22 w-22 border-2 border-white">
                                <AvatarImage src="/img/cs.jpg" alt="Reza" />
                                <AvatarFallback>RZ</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-semibold text-center">Muhammad Reza Adi Wardana</h3>
                                <p className="text-sm text-orange-500 text-center">Customer Service Amplop</p>
                            </div>
                        </div>

                        <div className="md:text-left w-[50%] text-center space-y-4 z-20">
                            <h3 className="text-xl font-semibold ">Konsultasi Gratis!</h3>
                            <p className="text-sm text-white">
                                Hubungi customer service kami secara langsung, untuk konsultasi lebih lanjut mengenai undangan digital yang disesuaikan dengan kebutuhan Anda.
                            </p>
                            <Button variant="secondary" onClick={() => window.open('https://wa.me/+628982194477')} className="text-black font-medium bg-white hover:bg-orange-100 cursor-pointer">
                                <FaWhatsapp className="font-bold text-" /> Hubungi Kami
                            </Button>
                        </div>
                    </div>
                </div>
            </section >

            {/* TESTIMONI & SUBSCRIBE */}
            <div className="bg-gray-200 bg-opacity-50 relative" >
                <div className="wrap-testimoni flex flex-col md:flex-row justify-between px-8 py-20 max-w-[1280px] mx-auto gap-20">
                    {/* Testimoni */}
                    <motion.div initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }} className="md:w-1/2 mb-8 md:mb-0 flex">
                        <div className="flex items-center gap-4">
                            <img
                                src="/img/testimoni.jpg"
                                alt="Testimoni"
                                className="w-22 h-22 rounded-full object-cover"
                            />
                            <div>
                                <p className="italic text-md">
                                    "Layanan memuaskan, produk yang ditawarkan bagus dengan akses yang cepat dan animatif"
                                </p>
                                <p className="text-pink-600 text-lg font-semibold mt-1">Mura Adi</p>
                                <p className="text-md">Commisioner Of ER Team</p>
                            </div>
                        </div>
                    </motion.div>



                    {/* Feedback */}
                    <div className="md:w-1/2">
                        <h3 className="text-lg font-semibold mb-2">KRITIK & SARAN</h3>
                        <p className="text-sm mb-4">Kami sangat menghargai masukan Anda.</p>

                        <form
                            action="https://formspree.io/f/xblzwwya"
                            method="POST"
                            className="flex flex-col gap-3 w-full"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Nama Anda"
                                className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Anda"
                                className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none"
                                required
                            />

                            <textarea
                                name="message"
                                placeholder="Tulis kritik dan saran Anda..."
                                className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none resize-none h-28"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="px-6 py-2 bg-gray-900 text-white rounded-lg  max-w-[120px] justify-center hover:bg-gray-800 transition flex gap-2"
                            >
                                <SendHorizonalIcon/> Kirim
                            </button>
                        </form>
                    </div>


                </div>
            </div >




            <Footer />



        </div >



    );
}
