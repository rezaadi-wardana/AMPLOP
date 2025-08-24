import React from 'react';
import Navbar from './Compon_FE/Navbar'
import Footer from './Compon_FE/Footer'
import { motion } from 'framer-motion'; // Pastikan framer-motion sudah terinstall

const ProdukPage = () => {
    const categories = ["Budaya", "Islami", "Mewah", "Pastel", "Elegan"];

    const produkHighlight = [{
        title: "Adat Jawa",
        image: "/img/P1.png",
        price: "Rp 99.000",
        link: "https://invitation-java-culture.ramacitraindofurniture.com",
    }, {
        title: "Adat Bali",
        image: "/img/P2.png",
        price: "Rp 99.000",
        link: "https://invitation-bali-culture.ramacitraindofurniture.com",
    }, {
        title: "Silver Elegan",
        image: "/img/P3.png",
        price: "Rp 49.500",
        originalPrice: "Rp 99.000",
        discount: "50%",
        link: "https://invitationcard.ramacitraindofurniture.com"
    }];

    return (
        <div className='Produk bg-white text-gray-800 font-sans'>
            <Navbar />

            <div className="h-[130px] md:h-[110px]" />

            <div className="bg-[#F9F9F9] text-center py-20 px-4 ">
                <h1 className="text-4xl font-bold mb-4">Produk</h1>
                <p className="text-lg mb-6">Sesuaikan pilihan anda dengan berbagai banyak produk yang kami miliki</p>
                <div className="flex justify-center gap-4 flex-wrap">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            className={`px-5 py-2 rounded-md font-semibold ${i === 0 ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2 md:px-40 py-12">
                {produkHighlight.map((item, index) => (
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
                        <a
                            href={item.link} target='_blank'
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
