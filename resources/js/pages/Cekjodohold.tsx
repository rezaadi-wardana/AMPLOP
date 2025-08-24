import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { motion } from 'framer-motion';

type Pertanyaan = {
    id: number;
    label: string;
    options: string[];
    nilai: { [key: string]: number };
};

const pertanyaan: Pertanyaan[] = [
    {
        id: 1,
        label: 'Hari Lahir (Calon mempelai pria)',
        options: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu', 'Minggu'],
        nilai: { Senin: 4, Selasa: 3, Rabu: 7, Kamis: 8, 'Jum\'at': 6, Sabtu: 9, Minggu: 5 }
    },
    {
        id: 2,
        label: 'Pasaran (Calon mempelai pria)',
        options: ['Kliwon', 'Legi', 'Pahing', 'Pon', 'Wage'],
        nilai: { Kliwon: 8, Legi: 5, Pahing: 9, Pon: 7, Wage: 4 }
    },
    {
        id: 3,
        label: 'Hari Lahir (Calon mempelai putri)',
        options: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu', 'Minggu'],
        nilai: { Senin: 4, Selasa: 3, Rabu: 7, Kamis: 8, 'Jum\'at': 6, Sabtu: 9, Minggu: 5 }
    },
    {
        id: 4,
        label: 'Pasaran (Calon mempelai putri)',
        options: ['Kliwon', 'Legi', 'Pahing', 'Pon', 'Wage'],
        nilai: { Kliwon: 8, Legi: 5, Pahing: 9, Pon: 7, Wage: 4 }
    }
];

export default function RamalanPerjodohan() {


    const [step, setStep] = useState(0);
    type Answer = { pilihan: string; nilai: number };
    const [answers, setAnswers] = useState<Record<string, Answer>>({});
    const [hasil, setHasil] = useState<{ total: number; sisa: number } | null>(null);
    const [makna, setMakna] = useState<{ nama_makna: string; arti_makna: string } | null>(null);

    const handleSelect = (value: string) => {
        const q = pertanyaan[step];
        setAnswers((prev) => ({
            ...prev,
            [q.label]: {
                pilihan: value,
                nilai: q.nilai[value]
            }
        }));
        // Next step after delay
        setTimeout(() => {
            if (step < pertanyaan.length - 1) {
                setStep(step + 1);
            }
        }, 400);
    };
    const handleSubmit = async () => {
        const total = Object.values(answers).reduce((sum, a) => sum + (a as Answer).nilai, 0);
        const sisa = total % 7;
        setHasil({
            total,
            sisa
        });

        try {
            const res = await fetch('/cekjodoh/cari-makna', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || ''
                },
                body: JSON.stringify({ jumlah_neptu: total }),
            });

            const data = await res.json();
            setMakna(data);
            console.log("Data dari backend:", data);

        } catch (error) {
            console.error('Gagal mengambil makna:', error);
        }
    };

    const current = pertanyaan[step];

    return (
        <div className="max-w-lg mx-auto py-8">
            <motion.div
                key={step}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-500 p-6 rounded-lg shadow"
            >
                <h2 className="text-lg font-semibold mb-4">{current.label}</h2>
                <RadioGroup
                    value={answers[current.label]?.pilihan || ''}
                    onValueChange={handleSelect}
                >
                    {current.options.map((opt) => (
                        <div key={opt} className="flex items-center space-x-2">
                            <RadioGroupItem value={opt} id={opt} />
                            <label htmlFor={opt} className="text-sm">{opt}</label>
                        </div>
                    ))}
                </RadioGroup>

                <div className="flex justify-between items-center mt-4">
                    <Button
                        variant="ghost"
                        disabled={step === 0}
                        onClick={() => setStep(step - 1)}
                    >&lt; Back</Button>

                    {step < pertanyaan.length - 1 ? (
                        <Button
                            disabled={!answers[current.label]}
                            className="bg-[#4b200a] hover:bg-[#3a1808] text-white"
                            onClick={() => setStep(step + 1)}
                        >Next &gt;</Button>
                    ) : (
                        <Button
                            disabled={!answers[current.label]}
                            className="bg-[#4b200a] hover:bg-[#3a1808] text-white"
                            onClick={handleSubmit}
                        >Kirim</Button>
                    )}
                </div>
            </motion.div>

            {/* Hasil */}
            {hasil && (
                <div className="p-4 bg-gray-100 rounded-md">
                    <p className="font-semibold text-[#4b200a] mb-2">Hasil peramalan :</p>
                    <p>{hasil.total} adalah hasil penjumlahan</p>
                    <p>{hasil.sisa} adalah hasil sisa bagi</p>
                </div>
            )}
            {makna && (
                <div className="mt-4 p-4 bg-white border rounded-md shadow-sm">
                    <p className="font-bold text-[#4b200a]">Makna: {makna.nama_makna}</p>
                    <p className="text-sm text-gray-700">{makna.arti_makna}</p>
                </div>
            )}


        </div>
    );
}
