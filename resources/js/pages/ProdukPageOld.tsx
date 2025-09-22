import React from 'react';
import ProductCard from './Compon_FE/ProductCard';
import Navbar from './Compon_FE/Navbar'
import Footer from './Compon_FE/Footer';

const ProdukPage = () => {
    const categories = ["Budaya", "Islami", "Mewah", "Pastel", "Elegan"];
    const produk = Array(9).fill({
        title: "Adat Bali",
        image: "/img/P2.png",
        price: "Rp 99.000"
    });

    return (
        <div className='Produk bg-white text-gray-800 font-sans'>

            < Navbar />

            {/* Spacer so content doesn't hide under fixed header */}

            <div className="h-[130px] md:h-[110px]" />
            <div className="bg-[#F9F9F9] text-center py-20 px-4 ">
                <h1 className="text-4xl font-bold mb-4">Produk</h1>
                <p className="text-lg mb-6">Sesuaikan pilihan anda dengan berbagai banyak produk yang kami miliki</p>
                <div className="flex justify-center gap-4 flex-wrap">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            className={`px-5 py-2 rounded-md font-semibold ${i === 0 ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white'}` }
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 px-2 md:px-20 py-16 bg-gray-200 md:bg-[#F9F9F9]">
                {produk.map((item, index) => (
                    <ProductCard key={index} {...item} />
                ))}
            </div> */}

            <Footer />
        </div>
    );
};

export default ProdukPage;
