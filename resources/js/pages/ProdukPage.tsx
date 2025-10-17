import Navbar from './Compon_FE/Navbar'
import { motion } from 'framer-motion';// Pastikan framer-motion sudah terinstall
import { Link, usePage } from '@inertiajs/react';
import { FaWhatsapp } from 'react-icons/fa';
import { Eye, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProdukSpecific from './ProdukSpecific';
import { useState } from 'react';

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

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID').format(price);
};


const ProdukPage = () => {
    const { products, categories } = usePage().props as unknown as PageProps;

    // state untuk kategori terpilih
    const [selectedCategory] = useState<number | null>(null);

    // filter produk sesuai kategori
    const filteredProducts =
        selectedCategory === null
            ? products
            : products.filter((p) => p.category_id === selectedCategory);

    return (
        <>
            <div className='Produk bg-white text-gray-900 font-sans grid justify-items-center min-h-screen w-[100%] h-[100%]' >
                <Navbar />
                <div className="h-[130px] md:h-[110px]" />

                {/* Product Hero*/}
                <div className=" max-w-[1280px] p-8  w-[100%] h-[30em] text-center self-center">
                    <div className="wrap bg-[url(/img/bg-produk.jpg)] bg-center bg-cover  w-[100%]  h-[100%] rounded-lg px-8 py-16  grid content-center " >
                        <h1 className="text-6xl text-white font-bold mb-4">Produk</h1>
                        <p className="text-md text-white mb-6">Sesuaikan pilihan anda dengan berbagai banyak produk yang kami miliki
                            dan dapat disesuaikan dengan kebutuhanmu</p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            {/* tombol semua */}
                            <Button
                                asChild
                                className="bg-transparent rounded-[100px] text-white border-1 border-white/50 hover:border-white hover:bg-white/10"
                            >
                                <Link href={route('produk.specific',  { category_id: "" })} method="get">
                                    <Search /> Semua
                                </Link>
                            </Button>


                            {categories.map((cat) => (
                                <Button
                                    asChild
                                    className="bg-transparent rounded-[100px] text-white border-1 border-white/50 hover:border-white hover:bg-white/10"
                                >
                                    <Link href={route('produk.specific', { category_id: cat.id })} method="get">
                                        <Search /> {cat.category_name}
                                    </Link>
                                </Button>

                            ))}
                        </div>
                    </div>
                </div>

                {/* Sesuaikan Tema */}
                <div className="tema flex flex-col md:px-8 px-8 py-10 max-w-[1280px] mx-auto w-[100%] h-[100%]">
                    <h1 className='text-3xl font-bold '>Sesuaikan Tema</h1>
                    <p> Sesuaikan tema undanganmu dengan berbagai pilihan yang kami sediakan.</p>
                    <div className="pilihan-tema">
                        <div className="wrap-product-recent grid md:grid-cols-2 md:grid-cols-3 md:gap-6 gap-2  py-10">
                            <motion.div
                                // key=
                                whileHover={{
                                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut"
                                }}
                                className="bg-[url(/img/tema-jawa.jpg)] h-[30em] bg-cover rounded-xl hover:bg-white transition-colors duration-300 p-5 flex flex-col justify-end"
                            >
                                <h2 className="md:text-2xl text-white text-lg font-bold text-right">Budaya Jawa</h2>
                                <p className="text-sm text-white my-2 font-bold text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maiores quaerat iure hic iusto necessitatibus?</p>
                                {/* )} */}
                            </motion.div>
                            <motion.div
                                // key=
                                whileHover={{
                                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut"
                                }}
                                className="bg-[url(/img/tema-sunda.jpg)] h-[30em] bg-cover rounded-xl hover:bg-white transition-colors duration-300 p-5 flex flex-col justify-end"
                            >
                                <h2 className="md:text-2xl text-white text-lg font-bold text-right">Budaya Sunda</h2>
                                <p className="text-sm text-white my-2 font-bold text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maiores quaerat iure hic iusto necessitatibus?</p>
                                {/* )} */}
                            </motion.div>
                            <motion.div
                                // key=
                                whileHover={{
                                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut"
                                }}
                                className="bg-[url(/img/tema-bali.jpg)] h-[30em] bg-cover rounded-xl hover:bg-white transition-colors duration-300 p-5 flex flex-col justify-end"
                            >
                                <h2 className="md:text-2xl text-white text-lg font-bold text-right">Budaya Bali</h2>
                                <p className="text-sm text-white my-2 font-bold text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maiores quaerat iure hic iusto necessitatibus?</p>
                                {/* )} */}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* KEcepatan Akses*/}
                <div className="tema flex flex-col md:px-8 px-8 py-10 pb-20 max-w-[1280px] mx-auto w-[100%] h-[100%] ">
                    <h1 className='text-3xl font-bold mb-10'>Kecepatan Akses</h1>
                    {/* <p> Sesuaikan tema undanganmu dengan berbagai pilihan yang kami sediakan.</p> */}
                    <div className="wrap bg-[url(/img/kecepatan-akses.jpg)] bg-cover bg-center w-[100%]  h-[25em]  rounded-lg px-8 py-16  grid content-center shadow-lg " >
                        <h1 className="text-4xl text-white font-bold mb-4 md:w-[50%]">Kecepatan Akses</h1>
                        <p className="text-[1.2em] text-white mb-6  md:w-[50%]">Sesuaikan pilihan anda dengan berbagai banyak produk yang kami miliki
                            dan dapat disesuaikan dengan kebutuhanmu</p>
                    </div>
                </div>

                {/* Product Terbaru */}
                <div className="wrap-terbaru bg-orange-950 w-[100%] h-[100%] md:px-8 py-10 md:text-black text-white">
                    <div className="flex flex-col max-w-[1280px] mx-auto px-8">
                        <h2 className="text-3xl font-bold mb-3 text-white mb-10">Produk Terbaru</h2>
                        <div className="wrap-product-recent grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2">
                            {(filteredProducts ?? [])
                                .sort((a, b) => b.id - a.id) // urutkan dari id terbesar (terbaru)
                                .slice(
                                    0,
                                    (typeof window !== 'undefined' &&
                                    typeof window.matchMedia === 'function' &&
                                    window.matchMedia('(max-width: 767px)').matches)
                                        ? 2
                                        : 3
                                ) // 2 produk di mobile (<768px), 3 di layar lebih besar
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
                                        <p className="text-sm text-green-600 my-2 font-bold place-self-start">Rp <span className="text-xl">{formatPrice(Number(product.price))}</span></p>
                                        {/* )} */}

                                        <img loading="lazy" src={`/${product.image}`} alt={product.name} className="rounded-md md:h-60 h-40 my-4 self-stretch " />
                                        <div className="button flex gap-2  md:px-8 px-4 w-full">
                                            <a
                                                href={product.link} target='_blank'
                                                className="md:bg-orange-950 bg-white text-black md:text-white text-center md:px-6 px-2 w-full py-3 rounded-md text-sm hover:bg-orange-800 transition-all duration-30 flex items-center justify-center gap-2 text-[1em] "
                                            >
                                                <Eye /> <p className='md:block hidden '> Demo</p>
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
                        <Button className="bg-transparent border-2 rounded-sm border-white flex self-center mt-10 cursor-pointer hover:bg-orange-100  hover:border-0 transition-colors duration-300">
                            <Link href="/home" className="flex items-center text-white hover:text-black">Selengkapnya</Link>
                        </Button>
                    </div>
                </div>

                {/* Product Highlights */}
                {/* <div className="flex flex-col md:px-8 px-2 py-20 max-w-[1280px] mx-auto">
                <div className="wrap-product-recent grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2">
                    {(filteredProducts ?? []).map((product: Product) => (
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
                            <p className="text-sm text-green-600 my-2 font-bold place-self-start">Rp {formatPrice(Number(product.price))}</p>

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
            </div> */}

                {/* <Footer /> */}
            </div>
            <ProdukSpecific />

        </>
    );
};

export default ProdukPage;
