import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CircleAlert } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Edit Order', href: '/order/edit' },
];

interface Product {
    id: number;
    name: string;
}

interface Order {
    id: number;
    order_name: string;
    order_desc?: string;
    product_id: number;
    status: string;
    link_order?: string;
    bukti_pembayaran?: string;
}

interface Props {
    products: Product[];
    order: Order;
}

export default function EditOrder({ products, order }: Props) {
    const { data, setData, put, errors, processing } = useForm({
        order_name: order.order_name ?? "",
        order_desc: order.order_desc ?? "",
        product_id: order.product_id,
        status: order.status ?? "",
        link_order: order.link_order ?? "",
        bukti_pembayaran: undefined as File | undefined, // pakai undefined, bukan null
    });

function handleUpdate(e: React.FormEvent) {
    e.preventDefault();

    const formData = new FormData();

    // method spoofing untuk Laravel PUT
    formData.append('_method', 'put');

    formData.append('order_name', data.order_name);
    formData.append('order_desc', data.order_desc ?? '');
    formData.append('product_id', data.product_id.toString());
    formData.append('status', data.status);
    formData.append('link_order', data.link_order ?? '');

    if (data.bukti_pembayaran instanceof File) {
        formData.append('bukti_pembayaran', data.bukti_pembayaran);
    }

    router.post(route('order.update', order.id), formData, {
        onSuccess: () => {
            console.log('Order updated successfully');
            // bisa redirect atau kasih notifikasi toast di sini
        },
        onError: (errors) => {
            console.error('Update failed:', errors);
        },
        preserveScroll: true,
        preserveState: true,
    });
}


    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            setData("bukti_pembayaran", file);
        } else {
            setData("bukti_pembayaran", undefined);
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Order" />
            <div className="m-4">
                <Link href="/order">
                    <Button variant="outline">Back to Orders</Button>
                </Link>

                <div className="w-8/12 p-4">
                    <form onSubmit={handleUpdate} className="space-y-4">
                        {/* Error Display */}
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

                        <h1 className="text-2xl font-bold">Edit an Order</h1>
                        <p className="text-sm text-muted-foreground">
                            Edit the order details for monitoring.
                        </p>

                        {/* Order Name */}
                        <div>
                            <Label htmlFor="order_name">Order Name</Label>
                            <Input
                                id="order_name"
                                name="order_name"
                                type="text"
                                value={data.order_name}
                                onChange={(e) => setData("order_name", e.target.value)}
                                required
                            />
                        </div>

                        {/* Order Desc */}
                        <div>
                            <Label htmlFor="order_desc">Order Desc</Label>
                            <Textarea
                                id="order_desc"
                                name="order_desc"
                                value={data.order_desc}
                                onChange={(e) => setData("order_desc", e.target.value)}
                            />
                        </div>

                        {/* Product Select */}
                        <div>
                            <Label htmlFor="product_id">Product</Label>
                            <Select
                                value={String(data.product_id)} // pastikan string
                                onValueChange={(value) => setData("product_id", parseInt(value))}
                            >

                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>


                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Products</SelectLabel>
                                        {products.map((product) => (
                                            <SelectItem key={product.id} value={String(product.id)}>
                                                {product.name}
                                            </SelectItem>

                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <p className="text-xs text-muted-foreground">
                                Selected ID: {data.product_id}                            </p>


                        </div>

                        {/* Link Order */}
                        <div>
                            <Label htmlFor="link_order">Link Order</Label>
                            <Input
                                id="link_order"
                                type="text"
                                value={data.link_order}
                                onChange={(e) => setData("link_order", e.target.value)}
                            />
                        </div>

                        {/* Status */}
                        <div>
                            <Label htmlFor="status">Status</Label>
                            <Select
                                value={data.status}
                                onValueChange={(value) => setData("status", value)}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Status</SelectLabel>
                                        <SelectItem value="belumbayar">Belum Dibayar</SelectItem>
                                        <SelectItem value="berjalan">Sedang Berjalan</SelectItem>
                                        <SelectItem value="selesai">Selesai</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Bukti Pembayaran */}
                        <div>
                            <Label htmlFor="bukti_pembayaran">Bukti Pembayaran</Label>
                            <Input
                                type="file"
                                id="bukti_pembayaran"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            {order.bukti_pembayaran && (
                                <img
                                    src={`/storage/${order.bukti_pembayaran}`}
                                    alt="Bukti Pembayaran"
                                    className="mt-2 h-24 rounded-md"
                                />
                            )}
                        </div>

                        <Button type="submit" disabled={processing}>
                            Update Order
                        </Button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
