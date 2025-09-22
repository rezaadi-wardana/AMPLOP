import React, { useState } from 'react';
import Navbar from './Compon_FE/Navbar'
import Footer from './Compon_FE/Footer'
import { motion } from 'framer-motion';// Pastikan framer-motion sudah terinstall
import { usePage } from '@inertiajs/react';

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
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    // filter produk sesuai kategori
    const filteredProducts =
        selectedCategory === null
            ? products
            : products.filter((p) => p.category_id === selectedCategory);

    return (
        <div className='Produk bg-white text-gray-800 font-sans'>
            <Navbar />

            <div className="h-[130px] md:h-[110px]" />

            <div className="bg-[#F9F9F9] text-center py-20 px-4 ">
                <h1 className="text-4xl font-bold mb-4">Produk</h1>
                <p className="text-lg mb-6">Sesuaikan pilihan anda dengan berbagai banyak produk yang kami miliki</p>
                <div className="flex justify-center gap-4 flex-wrap">
                    {/* tombol semua */}
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-5 py-2 rounded-md font-semibold ${selectedCategory === null
                            ? 'bg-black text-white'
                            : 'bg-white text-black hover:bg-black hover:text-white'
                            }`}
                    >
                        Semua
                    </button>

                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-5 py-2 rounded-md font-semibold ${selectedCategory === cat.id
                                ? 'bg-black text-white'
                                : 'bg-white text-black hover:bg-black hover:text-white'
                                }`}
                        >
                            {cat.category_name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2 md:px-40 py-12">
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

                        <img loading="lazy" src={`storage/app/public/${product.image}`} alt={product.name} className="rounded-md md:h-60 h-40 my-4 self-stretch " />
                        <a
                            href={product.link} target='_blank'
                            className="inline-block mx-15 bg-black text-white text-center px-6 py-3 rounded-md text-sm hover:bg-gray-800 transition-all duration-300"
                        >
                            Preview
                        </a>
                    </motion.div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default ProdukPage;
