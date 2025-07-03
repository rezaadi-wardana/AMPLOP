// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CircleAlert } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Hasil Jumlah',
        href: '/hasil_jumlah/create',
    },

];

export default function Create() {

    const { data, setData, post, errors, processing } = useForm({
        'jumlah_neptu': '',
        'nama_makna': '',
        'arti_makna': '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log(data);
        post(route('hasil_jumlah.store'));
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create New Hasil Jumlah" />
            <div className="m-4">
                <Link href="/hasil_jumlah" prefetch>
                    <Button variant="outline">Back to Hasil Jumlah</Button>
                </Link>
                <div className="w-8/12 p-4">
                    <form onSubmit={handleSubmit} className='space-y-4'>

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
                        <h1 className='text-2xl font-bold'>Create New Category</h1>
                        <p className='text-sm text-muted-foreground'>Create a new category for your blog.</p>
                              <div>
                            <Label htmlFor='jumlah_neptu'>Jumlah Neptu</Label>
                            <Input type="number" id="jumlah_neptu" name="jumlah_neptu" placeholder='Enter jumlah_neptu' value={data.jumlah_neptu} onChange={e => setData('jumlah_neptu', e.target.value)} required />
                        </div>
                        <div>
                            <Label htmlFor='nama_makna'> Nama Makna</Label>
                            <Input type="text" id="nama_makna" name="nama_makna" placeholder='Enter category name' value={data['nama_makna']} onChange={e => setData('nama_makna', e.target.value)} required />
                        </div>
                        <div>
                            <Label htmlFor='arti_makna'>Arti Makna</Label>
                            <Textarea id="arti_makna" name="arti_makna" placeholder='Enter category description' value={data['arti_makna']} onChange={e => setData('arti_makna', e.target.value)}/>
                        </div>

                        <Button disabled={processing} type='submit'>Tambah Hasil Jumlah</Button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
