// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage, useForm } from '@inertiajs/react';
import { BellDot } from 'lucide-react';
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
        title: 'Category',
        href: '/category',
    },

];

interface Category {
    id: number;
    category_name: string;
    category_desc: string;
}
interface PageProps {
    flash: {
        message?: string;
    };
    category: Category[];
}



export default function Index() {

    const { category, flash } = usePage().props as PageProps;

    const { processing, delete: destroy } = useForm();

    const handleDelete = (id: number, category_name: string) => {
        if (confirm(`Do you want to delete - ${id} ${category_name}?`)) {
            // TODO: Add delete logic here
            destroy(route('category.destroy', id));
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create New Category" />
            <div className="m-4">
                <Link href="/category/create">
                    <Button>Create Category</Button>
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


            {category.length > 0 && (
                <div className='m-4'>
                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead className="text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {category.map((category) => (

                                <TableRow>
                                    <TableCell className="font-medium">{category.id}</TableCell>
                                    <TableCell>{category.category_name}</TableCell>
                                    <TableCell  className="max-w-sm whitespace-pre-line break-words">{category.category_desc}</TableCell>
                                    <TableCell className="text-center space-x-2 ">
                                        <Link href={route('category.edit', category.id)} prefetch>
                                            <Button disabled={processing} className=''>Edit</Button>
                                        </Link>
                                        <Button disabled={processing} onClick={() => handleDelete(category.id, category.category_name)} className=' bg-red-500 hover:bg-red-600 text-white'>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </AppLayout>
    );
}
