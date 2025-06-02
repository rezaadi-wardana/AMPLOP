import { motion } from "framer-motion";

const produk = [
  { id: 1, nama: "Undangan Floral", harga: "Rp 150.000", gambar: "/img/floral.jpg" },
  { id: 2, nama: "Undangan Minimalis", harga: "Rp 120.000", gambar: "/img/minimal.jpg" },
];

export default function UndanganList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
      {produk.map((item, i) => (
        <motion.div
          key={item.id}
          className="bg-white rounded-xl shadow-lg p-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
        >
          <img src={item.gambar} alt={item.nama} className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-xl font-semibold mt-3">{item.nama}</h2>
          <p className="text-gray-600">{item.harga}</p>
        </motion.div>
      ))}
    </div>
  );
}
