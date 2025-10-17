import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowTopBar(scrollY < 10); // tampil hanya di pucuk atas
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md transition-all duration-500 ease-in-out text-black">

      {/* 🔶 Top Bar (pakai Tailwind transition, tanpa Framer Motion) */}
      <div
        className={`
          bg-[#331A00] text-white md:text-sm text-[12px] flex justify-center overflow-hidden
          transition-all duration-500 ease-in-out
          ${showTopBar ? "opacity-100 translate-y-0 h-auto py-2" : "opacity-0 -translate-y-10 h-0 py-0"}
        `}
      >
        <div className="wrap-nav-top max-w-[1280px] flex justify-between items-center w-full px-8">
          <span>Support: (+62) 8982-1944-77</span>
          <span>
            Daftar dan <strong>DAPATKAN 25% DISKON</strong> untuk pertama kali,{" "}
            <a href="/register" className="underline">Klik Untuk Daftar</a>
          </span>
        </div>
      </div>

      {/* 🔹 Navbar utama */}
      <div className="flex bg-white justify-center relative w-full shadow-md transition-all duration-500 ease-in-out">
        <div className="wrap-nav-main flex items-center justify-between w-full py-4 px-8 max-w-[1280px]">
          {/* Logo */}
          <div className="text-2xl font-bold amplop">
            <a href="/">
              <img loading="lazy" className="h-5" src="/img/amplop.png" />
            </a>
          </div>

          {/* Tombol Menu Mobile */}
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

          {/* Menu Desktop */}
          <ul className="hidden md:flex md:gap-6 text-md font-semibold">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/produk">Produk</Link></li>
            <li><Link href="/cekjodoh">Cek Jodoh</Link></li>
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
      </div>

      {/* 🔸 Menu Mobile (transisi Tailwind, tanpa AnimatePresence) */}
      <ul
        className={`
          md:hidden flex flex-col bg-white text-md font-semibold shadow-md overflow-hidden transition-all duration-500 ease-in-out
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <li className="py-2 border-b px-6"><Link href="/">Home</Link></li>
        <li className="py-2 border-b px-6"><Link href="/produk">Produk</Link></li>
        <li className="py-2 border-b px-6"><Link href="/cekjodoh">Cek Jodoh</Link></li>
        <li className="py-2 border-b px-6">
          <Link
            href="/login"
            className="py-2 px-4 bg-gray-800 text-white rounded-lg"
          >
            Login
          </Link>
        </li>
      </ul>
    </header>
  );
}
