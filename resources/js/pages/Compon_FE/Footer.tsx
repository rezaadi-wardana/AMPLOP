import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className="wrap">
            <div className="px-10 md:px-40 py-10 bg-white grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img loading="lazy" src="img/amplop.png" alt="Logo" className="h-10" />
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
                <div>
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
            {/* COPYRIGHT + SOCIAL MEDIA */}
            <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-4 border-t bg-gray-100 text-gray-600 text-xs">
                <p>© 2015 Brand. All Rights Reserved.</p>
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
                    <a href="https://www.instagram.com/amplop.digital" className="text-grey-500 hover:text-grey-700 ">
                        <FaInstagram className="h-8 w-8" />
                    </a>
                    <a href="mailto:boon.image.design@gmail.com" className="text-grey-500 hover:text-grey-700 ">
                        <MdEmail className="h-8 w-8" />
                    </a>
                    <a href="https://wa.me/0898214477" className="text-grey-500 hover:text-grey-700 ">
                        <FaWhatsapp className="h-8 w-8" />
                    </a>
                </div>
            </div>
        </div>

    );
}
