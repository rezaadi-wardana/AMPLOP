import React, { useEffect, useState } from 'react';
import Navbar from './Compon_FE/Navbar'
import Footer from './Compon_FE/Footer'
import { motion } from 'framer-motion';// Pastikan framer-motion sudah terinstall
import { router, usePage } from '@inertiajs/react';
import { FaWhatsapp } from 'react-icons/fa';
import { ChartColumnStacked, Eye, ListCheck } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



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


const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID').format(price);
};


const ProdukSpecific = () => {
    const { products, categories, filters = {} } = usePage().props as unknown as {
        products: Product[];
        categories: Category[];
        filters?: {
            category_id?: string;
            sort?: string;
        };
    };
    const [selectedSort, setSelectedSort] = useState(filters.sort || '');
    const [selectedCategory, setSelectedCategory] = useState(filters.category_id || 'all');
    // const { products, categories } = usePage().props as unknown as PageProps;
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Tampilkan topbar hanya kalau posisi di atas
            setSticky(scrollY < 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    // filter produk sesuai kategori
    const filteredProducts =
        selectedCategory === 'all'
            ? products
            : products.filter((p) => p.category_id === Number(selectedCategory));

    const handleFilterChange = (category: string, sort: string) => {
        router.get(
            route("produk.specific"),
            { category_id: category !== "all" ? category : undefined, sort },
            { preserveScroll: true, preserveState: true }
        );
    };
    return (
        <>
            <Navbar />
            <div className='Produk relative verflow-x-hidden w-screen bg-white text-gray-900 font-sans grid justify-items-center min-h-screen w-full h-[100%]'>

                <div className="h-[130px] md:h-[110px] overflow-hidden" />

                {/* Sesuaikan Tema */}
                {selectedCategory == 'all' && (
                    <div className="tema flex flex-col md:px-8 px-2 py-10 max-w-[1280px] mx-auto w-[100%] h-[100%]">
                        <h1 className='text-3xl font-bold '>Semua Produk</h1>
                        <p> Sesuaikan tema undanganmu dengan berbagai pilihan yang kami sediakan.</p>
                    </div>
                )}
                {selectedCategory !== 'all' && (
                    (() => {
                        const cat = categories.find((c: Category) => c.id === Number(selectedCategory));
                        return (
                            <div className="tema flex flex-col md:px-8 px-2 py-10 max-w-[1280px] mx-auto w-[100%] h-[100%]">
                                <h1 className='text-3xl font-bold'>{cat ? cat.category_name : 'Kategori'}</h1>
                                <p>{cat?.category_desc ?? 'Sesuaikan tema undanganmu dengan berbagai pilihan yang kami sediakan.'}</p>
                            </div>
                        );
                    })()
                )}

                {/* Product Sticky */}
                <div
                    className={`filter flex justify-center bg-white sticky  mx-auto w-[100%] h-[100%] top-12 relative z-50 ${sticky ? 'top-20 ' : ' top-12 shadow-md'} transition-all duration-300 ease-in-out`}>
                    <div className="wrap max-w-[1280px] w-[100%] h-[100%] flex gap-2 py-5  md:px-8 px-2 ">

                        <Select
                            onValueChange={(value) => {
                                setSelectedSort(value);
                                handleFilterChange(selectedCategory, value);
                            }}
                            defaultValue={selectedSort} // ⬅️ penting: biar ikut terisi
                        >
                            <SelectTrigger className="bg-transparent text-black rounded-[100px] hover:bg-transparent border-2 border-gray-300 text-black hover:border-black hover:border-2 cursor-pointer max-w-[200px]">
                                <ListCheck className='text-black' />
                                <SelectValue placeholder={selectedSort ? selectedSort : "Urutkan"} />

                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="lowest">Harga Terendah</SelectItem>
                                <SelectItem value="higest">Harga Tertinggi</SelectItem>
                                <SelectItem value="newest">Terbaru</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select
                            onValueChange={(value) => {
                                setSelectedCategory(value);
                                handleFilterChange(value, selectedSort);
                            }}
                            defaultValue={selectedCategory} // ⬅️ penting juga
                        >
                            <SelectTrigger className="bg-gray-900 text-white rounded-[100px] hover:bg-gray-900/80 cursor-pointer max-w-[150px]">
                                <ChartColumnStacked className='text-white' />
                                <SelectValue placeholder="Semua" className='text-white' defaultValue={selectedCategory} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Semua</SelectItem>
                                {categories.map((category) => (
                                    <SelectItem key={category.id} value={category.id.toString()}>{category.category_name}</SelectItem>
                                ))}
                                {/* <SelectItem value="system">System</SelectItem> */}
                            </SelectContent>
                        </Select>
                    </div>

                </div>

                {/* Product Highlights */}
                <div className="flex flex-col md:px-8 px-2 py-10 max-w-[1280px] mx-auto w-[100%] h-[100%] min-h-[50em]">
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
                                {/* <p className="text-sm text-green-600 my-2 font-bold place-self-start">Rp {formatPrice(Number(product.price))}</p> */}
                                {/* )} */}
                                <p className="text-sm text-green-600 my-2 font-bold place-self-start">Rp <span className="text-xl">{formatPrice(Number(product.price))}</span></p>


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
                </div>

            </div>
            <Footer />
        </>
    );
};

export default ProdukSpecific;
