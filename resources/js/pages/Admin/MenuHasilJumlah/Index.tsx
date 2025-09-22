// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage, useForm } from '@inertiajs/react';
import { BellDot, CircleAlert } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Hasil Jumlah',
        href: '/hasil',
    },

];

interface Hasil_jumlah {
    id: number;
    jumlah_neptu: number;
    nama_makna: string;
    arti_makna: string;
}
interface PageProps {
    flash: {
        message?: string;
    };
    hasil_jumlah: Hasil_jumlah[];
}



export default function Index() {

    const { hasil_jumlah, flash } = usePage().props as PageProps;

    const { processing, delete: destroy } = useForm();

    const handleDelete = (id: number, nama_makna: string) => {
        if (confirm(`Do you want to delete - ${id} ${nama_makna}?`)) {
            // TODO: Add delete logic here
            destroy(route('hasil_jumlah.destroy', id));
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create New Hasil Jumlah" />
            <div className="m-4">
                <Link href="/hasil_jumlah/create">
                    <Button>Create Data</Button>
                </Link>

            </div>

            {flash.message && (
                <div className="m-4">
                    <Alert variant="default">
                        <BellDot className="w-5 h-5" />
                        <AlertTitle>Notification!</AlertTitle>
                        <AlertDescription>
                            {flash.message as string}
                        </AlertDescription>
                    </Alert>
                </div>
            )}


            <div className='m-4'>
                {hasil_jumlah.length > 0 ? (
                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Jumlah Neptu</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead className="text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {hasil_jumlah.map((hasil) => (

                                <TableRow>
                                    <TableCell className="font-medium">{hasil.id}</TableCell>
                                    <TableCell>{hasil.jumlah_neptu}</TableCell>
                                    <TableCell>{hasil.nama_makna}</TableCell>
                                    <TableCell className="max-w-sm whitespace-pre-line break-words">{hasil.arti_makna}</TableCell>
                                    <TableCell className="text-center space-x-2 ">
                                        <Link href={route('hasil_jumlah.edit', hasil.id)} prefetch>
                                            <Button disabled={processing} className=''>Edit</Button>
                                        </Link>
                                        <Button disabled={processing} onClick={() => handleDelete(hasil.id, hasil.nama_makna)} className=' bg-red-500 hover:bg-red-600 text-white'>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (
                    // <div className="m-4 p-4 border border-dashed border-gray-300 rounded text-center text-gray-500">
                    //     Tidak ada di database.
                    // </div>
                    <Alert variant="default">
                        <CircleAlert />
                        <AlertTitle>Data Kosong</AlertTitle>
                        <AlertDescription>
                            <p>Tidak ada data yang diambil dari database.</p>
                        </AlertDescription>
                    </Alert>
                )}
            </div>
        </AppLayout>
    );
}
