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
} from "@/components/ui/table";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Product',
        href: '/product',
    },
];

interface Product {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    link: string;
    category_id: number;
}

interface PageProps {
    flash: {
        message?: string;
    };
    products: Product[];
}

export default function Index() {
    const { products, flash } = usePage().props as PageProps;
    const { processing, delete: destroy } = useForm();

    const handleDelete = (id: number, name: string) => {
        if (confirm(`Do you want to delete - ${id} ${name}?`)) {
            destroy(route('product.destroy', id));
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product List" />

            <div className="m-4">
                <Link href="/product/create">
                    <Button>Create Product</Button>
                </Link>
            </div>

            {flash.message && (
                <div className="m-4">
                    <Alert variant="default">
                        <BellDot className="w-5 h-5" />
                        <AlertTitle>Notification!</AlertTitle>
                        <AlertDescription>{flash.message}</AlertDescription>
                    </Alert>
                </div>
            )}

            {products.length > 0 ? (
                <div className="m-4 overflow-auto">
                    <Table>
                        <TableCaption>A list of your products.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Link</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Image</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead className="text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell className="font-medium">{product.id}</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>Rp {product.price.toLocaleString()}</TableCell>
                                    <TableCell>
                                        <a href={product.link} target='_blank' rel='noopener noreferrer' className='ax-w-sm whitespace-pre-line break-words'>
                                            {product.link}
                                        </a>
                                    </TableCell>
                                    <TableCell>{product.category_id == 7 ? 'Islami' : product.category_id == 9 ? 'Elegan' : 'Not defined'}</TableCell>
                                    <TableCell>
                                        <img
                                            src={`/${product.image}`}
                                            alt={product.name}
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                    </TableCell>
                                    <TableCell className='ax-w-sm whitespace-pre-line break-words'>{product.description}</TableCell>
                                    <TableCell className="text-center space-x-2">
                                        <Link href={route('product.edit', product.id)} prefetch>
                                            <Button disabled={processing}>Edit</Button>
                                        </Link>
                                        <Button
                                            disabled={processing}
                                            onClick={() => handleDelete(product.id, product.name)}
                                            className="bg-red-500 hover:bg-red-600 text-white"
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            ) : (
                <div className="m-4 text-gray-500">No products found.</div>
            )}
        </AppLayout>
    );
}
