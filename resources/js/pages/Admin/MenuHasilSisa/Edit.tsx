// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
// import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CircleAlert } from 'lucide-react';


// const breadcrumbs: BreadcrumbItem[] = [
//     {
//         title: 'Edit Category',
//         href: '/category/edit',
//     },

// ];


interface Hasil_jumlah {
    id: number;
    jumlah_neptu: number;
    nama_makna: string;
    arti_makna: string;
}

interface Props {
    hasil_sisa: Hasil_jumlah;
}


export default function Edit({ hasil_sisa }: Props) {

    const { data, setData, put, errors, processing } = useForm({
        jumlah_neptu: hasil_sisa.jumlah_neptu,
        'nama_makna': hasil_sisa.nama_makna,
        'arti_makna': hasil_sisa.arti_makna,
    });


    function handleUpdate(e: React.FormEvent) {
        e.preventDefault();
        // console.log(data);
        put(route('hasil_sisa.update', hasil_sisa.id));
    }

    return (
        <AppLayout breadcrumbs={[{ title: `Edit Hasil Sisa`, href: `/hasil_sisa/${hasil_sisa.id}/edit` }]}>
            <Head title="Edit a Category" />
            <div className="m-4">
                <Link href="/hasil_sisa" prefetch>
                    <Button variant="outline">Back to Hasil Sisa</Button>
                </Link>
                <div className="w-8/12 p-4">
                    <form onSubmit={handleUpdate} className='space-y-4'>

                        {/* Display Error */}
                        {Object.keys(errors).length > 0 && (
                            <Alert variant="destructive">
                                <CircleAlert />
                                <AlertTitle>Error!</AlertTitle>
                                <AlertDescription>
                                    <ul>
                                        {Object.entries(errors).map(([key, message]) => (
                                            <li key={key}>{message as string}</li>
                                        ))}
                                    </ul>
                                </AlertDescription>
                            </Alert>
                        )}
                        {/* Form Fields */}
                        <h1 className='text-2xl font-bold'>Edit a Hasil Sisa</h1>
                        <p className='text-sm text-muted-foreground'>Edit a |Hasil Sisa on your blog.</p>
                           <div>
                            <Label htmlFor='jumlah_neptu'>Sisa Neptu</Label>
                            <Input type="number" id="jumlah_neptu" name="jumlah_neptu" placeholder='Enter jumlah_neptu' value={data.jumlah_neptu} onChange={e => setData('jumlah_neptu',Number(e.target.value))} required />
                        </div>
                        <div>
                            <Label htmlFor='nama_makna'>nama Makna</Label>
                            <Input type="text" id="nama_makna" name="nama_makna" placeholder='Enter Nama makna' value={data['nama_makna']} onChange={e => setData('nama_makna', e.target.value)} required />
                        </div>
                        <div>
                            <Label htmlFor='arti_makna'>Arti Makna</Label>
                            <Textarea id="arti_makna" name="arti_makna" placeholder='Enter arti makna' value={data['arti_makna']} onChange={e => setData('arti_makna', e.target.value)} />
                        </div>
                        <Button disabled={processing} type='submit'>Perbarui Nama Makna</Button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
