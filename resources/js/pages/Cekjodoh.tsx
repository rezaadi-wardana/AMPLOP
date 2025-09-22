import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    RadioGroup,
    RadioGroupItem
} from "@/components/ui/radio-group"
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { motion } from "framer-motion"
import Navbar from './Compon_FE/Navbar';
import Footer from './Compon_FE/Footer';

const pertanyaan = [
    {
        label: 'Hari Lahir (Calon mempelai pria)',
        options: [
            { label: 'Senin', nilai: 4 }, { label: 'Selasa', nilai: 3 },
            { label: 'Rabu', nilai: 7 }, { label: 'Kamis', nilai: 8 },
            { label: "Jum'at", nilai: 6 }, { label: 'Sabtu', nilai: 9 },
            { label: 'Minggu', nilai: 5 }
        ]
    },
    {
        label: 'Pasaran (Calon mempelai pria)',
        options: [
            { label: 'Kliwon', nilai: 8 }, { label: 'Legi', nilai: 5 },
            { label: 'Pahing', nilai: 9 }, { label: 'Pon', nilai: 7 },
            { label: 'Wage', nilai: 4 }
        ]
    },
    {
        label: 'Hari Lahir (Calon mempelai putri)',
        options: [
            { label: 'Senin', nilai: 4 }, { label: 'Selasa', nilai: 3 },
            { label: 'Rabu', nilai: 7 }, { label: 'Kamis', nilai: 8 },
            { label: "Jum'at", nilai: 6 }, { label: 'Sabtu', nilai: 9 },
            { label: 'Minggu', nilai: 5 }
        ]
    },
    {
        label: 'Pasaran (Calon mempelai putri)',
        options: [
            { label: 'Kliwon', nilai: 8 }, { label: 'Legi', nilai: 5 },
            { label: 'Pahing', nilai: 9 }, { label: 'Pon', nilai: 7 },
            { label: 'Wage', nilai: 4 }
        ]
    }
];

const Cekjodoh = () => {
    const [step, setStep] = useState(0);
    const [jawaban, setJawaban] = useState([]);
    const [hasil, setHasil] = useState(null);
    const [selesai, setSelesai] = useState(false);
    const [loading, setLoading] = useState(false);

    const current = pertanyaan[step];

    const handleSelect = (value) => {
        const nilai = current.options.find(o => o.label === value)?.nilai || 0;
        const newJawaban = [...jawaban];
        newJawaban[step] = { pilihan: value, nilai };
        setJawaban(newJawaban);
    };

    const handleManualNext = () => {
        if (jawaban[step]) {
            setStep(step + 1);
        }
    };

    // const handleSubmit = () => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         const total = jawaban.reduce((sum, val) => sum + val.nilai, 0);
    //         const sisa = total % 7;
    //         setHasil({ total, sisa });
    //         setSelesai(true);
    //         setLoading(false);
    //     }, 1500); // Simulasi loading delay
    // };
    const handleSubmit = async () => {
        setLoading(true);
        const total = jawaban.reduce((sum, val) => sum + val.nilai, 0);
        const sisa = total % 7;

        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

            const [resJumlah, resSisa] = await Promise.all([
                fetch('/cekjodoh/cari-makna', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken,
                    },
                    body: JSON.stringify({ jumlah_neptu: total }),
                }),
                fetch('/cekjodoh/cari-makna', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken,
                    },
                    body: JSON.stringify({ jumlah_neptu: sisa }),
                }),
            ]);

            const maknaJumlah = await resJumlah.json();
            const maknaSisa = await resSisa.json();

            setHasil({
                total,
                sisa,
                maknaJumlah,
                maknaSisa
            });

            setSelesai(true);
        } catch (error) {
            console.error("Gagal memuat makna:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='bg-white text-gray-800 font-sans'>
            <Navbar />
            <div className="bg-[#F9F9F9] text-center pt-20 px-4 mt-20">
                <h1 className="text-4xl font-bold mb-4">Cek Jodoh Primbon</h1>
                <h2 className="text-2xl font-100">Sistem Pakar Peramalan Jodoh berdasarkan Weton Jawa</h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-5 px-4 md:px-60 py-16 bg-[#F9F9F9]">
                <Card className="w-full md:px-10 shadow-lg">
                    <CardHeader>
                        <CardTitle>  Jawab beberapa pertanyaan berikut berdasarkan weton Anda dan pasangan.
                            Jodoh</CardTitle>
                    </CardHeader>
                    <CardContent className='md:px-10'>
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            {!selesai ? (
                                <>
                                    <h3 className="text-lg font-semibold">{current.label}</h3>
                                    <RadioGroup
                                        value={jawaban[step]?.pilihan || ''}
                                        onValueChange={handleSelect}
                                        className="space-y-2 "
                                    >
                                        {current.options.map(opt => (
                                            <div key={opt.label} className="flex items-center space-x-2">
                                                <RadioGroupItem value={opt.label} id={opt.label} />
                                                <label htmlFor={opt.label}>{opt.label}</label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="p-4 bg-gray-100 rounded-md mt-4"
                                >
                                    <p className="font-bold text-gray-900 text-lg mb-2">Hasil Peramalan:</p>
                                    {/* <TypingText text={`${hasil.total} adalah hasil penjumlahan`} />
                                    <TypingText text={`${hasil.sisa}  adalah hasil sisa bagi`} /> */}
                                    <TypingText text={`${hasil.total} adalah hasil penjumlahan`} />
                                    <p className="text-sm text-gray-800 font-semibold">Makna: {hasil.maknaJumlah?.nama_makna}</p>
                                    <p className="text-sm text-gray-600 mb-4">{hasil.maknaJumlah?.arti_makna}</p>

                                    <TypingText text={`${hasil.sisa}  adalah hasil sisa bagi`} />
                                    <p className="text-sm text-gray-800 font-semibold">Makna: {hasil.maknaSisa?.nama_makna}</p>
                                    <p className="text-sm text-gray-600">{hasil.maknaSisa?.arti_makna}</p>

                                </motion.div>
                            )}

                        </motion.div>

                    </CardContent>
                    <CardFooter className="justify-between">
                        <CardDescription>
                            <p className="text-sm mb-6">* Ini hanya perhitungan tradisional, jangan terlalu mempercayai hasilnya. Takdir tetap di tangan Allah SWT.</p>
                        </CardDescription>

                        {!selesai && (
                            <>
                                <Button variant="ghost" disabled={step === 0} onClick={() => setStep(step - 1)}>
                                    <ChevronLeftIcon className="w-5 h-5" /> Back
                                </Button>
                                <Button
                                    onClick={step === pertanyaan.length - 1 ? handleSubmit : handleManualNext}
                                    disabled={!jawaban[step] || loading}
                                >
                                    {step === pertanyaan.length - 1 ? (loading ? "Loading..." : "Send") : <>Next <ChevronRightIcon className="w-5 h-5" /></>}
                                </Button>
                            </>
                        )}
                    </CardFooter>
                </Card>
            </div>
            <Footer />
        </div>

    );
};

const TypingText = ({ text }) => {
    const [displayedText, setDisplayedText] = useState("");

    React.useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text.charAt(index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 40);
        return () => clearInterval(interval);
    }, [text]);

    return <p className="text-gray-800 text-sm mb-1">{displayedText}</p>;
};

export default Cekjodoh;
