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
        title: 'Order',
        href: '/order',
    },
];

interface Order {
    id: number;
    order_name: string;
    order_desc: string;
    product_id: number;
    status: string;
    link_order?: string;
    bukti_pembayaran?: string;

    product?: {
        id: number;
        name: string;
        image: string;
    };
    // category via product (optional)
    category?: {
        id: number;
        category_name: string;
    };
}

interface PageProps {
    flash: {
        message?: string;
    };
    orders: Order[];
    // [key: string]: unknown; // Add index signature for compatibility
}

export default function Index() {
    const { orders, flash } = usePage<PageProps>().props;
    const { processing, delete: destroy } = useForm();

    const handleDelete = (id: number, name: string) => {
        if (confirm(`Do you want to delete order - ${id} ${name}?`)) {
            destroy(route('order.destroy', id), {
                preserveScroll: true,
                onSuccess: () => {
                    console.log(`Order ${id} deleted`);
                },
                onError: (errors) => {
                    console.error(errors);
                }
            });
        }
    };


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Order List" />

            <div className="m-4">
                <Link href="/order/create">
                    <Button>Create Order</Button>
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

            {orders.length > 0 ? (
                <div className="m-4 overflow-auto">
                    <Table>
                        <TableCaption>A list of your orders.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">ID Order</TableHead>
                                <TableHead>Nama Order</TableHead>
                                <TableHead>Order Description</TableHead>
                                <TableHead>Nama Produk</TableHead>
                                <TableHead>Nama Category</TableHead>
                                <TableHead>Link Order</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Bukti Pembayaran</TableHead>
                                <TableHead className="text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell className="font-medium">{order.id}</TableCell>
                                    <TableCell>{order.order_name}</TableCell>
                                    <TableCell className='ax-w-sm whitespace-pre-line break-words'>{order.order_desc}</TableCell>
                                    <TableCell>{order.product ? order.product.name : '-'}</TableCell>
                                    <TableCell>
                                        {order.product && order.product.category
                                            ? order.product.category.category_name
                                            : '-'}
                                    </TableCell>
                                    <TableCell>
                                        {order.link_order ? (
                                            <a href={order.link_order} target='_blank' rel='noopener noreferrer' className='ax-w-sm whitespace-pre-line break-words'>
                                                {order.link_order}
                                            </a>
                                        ) : '-'}
                                    </TableCell>
                                    <TableCell>{order.status}</TableCell>
                                    <TableCell>
                                        {order.bukti_pembayaran ? (
                                            <img
                                                src={`storage/${order.bukti_pembayaran}`}
                                                alt="Bukti Pembayaran"
                                                className="w-16 h-16 object-cover rounded-md"
                                            />
                                        ) : (
                                            <span className="text-gray-400">No image</span>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-center space-x-2">
                                        <Link href={route('order.edit', order.id)}>
                                            <Button disabled={processing}>Edit</Button>
                                        </Link>
                                        <Button
                                            disabled={processing}
                                            onClick={() => handleDelete(order.id, order.order_name)}
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
                <div className="m-4 text-gray-500">No orders found.</div>
            )}
        </AppLayout>
    );
}
