// import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showTopBar, setShowTopBar] = useState(true);

    useEffect(() => {
        let lastScroll = 0;

        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setShowTopBar(currentScroll < lastScroll || currentScroll < 50);
            lastScroll = currentScroll;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (

            <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
                {/* Top Bar with conditional show/hide */}
                <AnimatePresence>
                    {showTopBar && (
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-[#331A00] text-white md:text-sm text-[12px] py-2 px-4 flex justify-between items-center"
                        >
                            <span>Support: (406) 555-0120</span>
                            <span>
                                Daftar dan <strong>DAPATKAN 25% DISKON</strong> untuk pertama kali,{' '}
                                <a href="#" className="underline">Klik Untuk Daftar</a>
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Navbar */}
                <div className="flex items-center justify-between px-6 md:px-40 py-4 bg-white relative">
                    {/* Logo */}
                    <div className="text-2xl font-bold amplop">
                        <img loading="lazy" className="h-10" src="/img/amplop.png" />
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-black" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex md:gap-6 text-md font-semibold ">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/produk">Produk</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                    </ul>

                    {/* Icons */}
                    <div className="hidden md:flex gap-4">
                        <img className="h-8 mx-2" src="/img/search.png" alt="Search" />
                        <img className="h-8 mx-2" src="/img/login.png" alt="Login" />
                        <img className="h-8 mx-2" src="/img/cart.png" alt="Cart" />
                    </div>
                </div>

                {/* Mobile Menu with animation */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="md:hidden flex flex-col bg-white px-6 py-2 text-md font-semibold shadow-md"
                        >
                            <li className="py-2 border-b"><Link href="/">Home</Link></li>
                            <li className="py-2 border-b"><Link href="/produk">Produk</Link></li>
                            <li className="py-2 border-b"><Link href="/about">About Us</Link></li>
                            <li className="py-2 border-b"><Link href="/contact">Contact Us</Link></li>
                            <li className="py-2 border-b"><Link href="/blog">Blog</Link></li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </header>





    );
}
