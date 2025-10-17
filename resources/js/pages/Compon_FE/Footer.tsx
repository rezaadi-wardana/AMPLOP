import {
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className="footer text-black">
            <div className="wrap bg-white">
                <div className="px-8 py-20 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Brand */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-2">
                            <img loading="lazy" src="/img/amplop.png" alt="Logo" className="h-10 mb-4"  />
                            {/* <span className="text-xl font-bold">BRAND</span> */}
                        </div>
                        <p className="text-sm leading-relaxed">
                            Amplop hadir membantu membranding event kepada peserta agar event memiliki kesan sejak peserta mengetahuinya.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-orange-400 font-semibold mb-3">COMPANY</h4>
                        <ul className="space-y-1 text-sm">
                            <li>Home</li>
                            <li>Product</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h4 className="text-orange-400 font-semibold mb-3">INFORMATION</h4>
                        <ul className="space-y-1 text-sm">
                            <li>Layanan</li>
                            <li>Konsultasi</li>
                            <li>Cara Membeli</li>
                            <li>Cara Bermitra</li>
                            <li>Kerja Sama</li>
                        </ul>
                    </div>

                    {/* Shop Category */}
                    <div className="md:col-span-1 col-span-2">
                        <h4 className="text-orange-400 font-semibold mb-3">SHOP CATEGORY</h4>
                        <ul className="space-y-1 text-sm">
                            <li>Men</li>
                            <li>Women</li>
                            <li>Child</li>
                            <li>Apparel</li>
                            <li>Browse All</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* COPYRIGHT + SOCIAL MEDIA */}
            <div className="wrap bg-gray-100 flex justify-center border-t text-gray-700 text-xs ">
                <div className="flex flex-row justify-between items-center px-8 max-w-[1280px] w-full py-4">
                    <p>© 2025 Amplop. All Rights Reserved.</p>
                    <div className="flex gap-3 mt-2 md:mt-0">
                        {/* <a href="#" className="text-grey-500 hover:text-grey-700 ">
                        <FaFacebookF className="h-8 w-8" />
                    </a>
                    <a href="#" className="text-grey-500 hover:text-grey-700 ">
                        <FaTwitter className="h-8 w-8" />
                    </a>
                    <a href="#" className="text-grey-500 hover:text-grey-700 ">
                        <FaLinkedinIn className="h-8 w-8" />
                    </a> */}
                        <a href="https://www.instagram.com/amplop.digital" className="text-gray-900 hover:text-grey-700 ">
                            <FaInstagram className="h-8 w-8" />
                        </a>
                        <a href="mailto:boon.image.design@gmail.com" className="text-gray-900 hover:text-grey-700 ">
                            <MdEmail className="h-8 w-8" />
                        </a>
                        <a href="https://wa.me/0898214477" className="text-gray-900 hover:text-grey-700 ">
                            <FaWhatsapp className="h-8 w-8" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}
