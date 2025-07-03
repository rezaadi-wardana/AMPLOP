import React from 'react';
import { motion } from 'framer-motion';

interface ProductProps {
    title: string;
    image: string;
    price: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, image, price }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03, y: -4, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-white  md:border-none rounded-xl p-4 flex flex-col items-center text-center transition-all duration-300"
        >
            <h3 className="text-sm text-gray-700 font-medium">Undangan Pernikahan</h3>
            <h2 className="text-lg font-bold text-black">{title}</h2>
            <p className="text-green-600 text-sm font-semibold my-2">{price}</p>
            <img src={image} alt={title} className="h-48 object-contain mt-2" loading="lazy" />
            <button className="mt-4 bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800">
                Preview
            </button>
        </motion.div>
    );
};

export default ProductCard;
