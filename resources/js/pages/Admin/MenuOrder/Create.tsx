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
    {
        title: 'Create Order',
        href: '/order/create',
    },
];

interface Product {
    id: number;
    name: string;
}

interface Category {
    id: number;
    category_name: string;
}

interface CreateProps {
    products: Product[];
    categories: Category[];
}

export default function Create({ products, categories }: CreateProps) {
    const { data, setData, post, errors, processing } = useForm({
        order_name: '',
        order_desc: '',
        product_id: '',
        status: '',
        link_order: '',
        bukti_pembayaran: null as File | null,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('order.store'), {
            forceFormData: true,
        });
    }

    function handleBuktiChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0] ?? null;
        setData('bukti_pembayaran', file);
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create New Order" />
            <div className="m-4">
                <Link href="/order" prefetch>
                    <Button variant="outline">Back to Orders</Button>
                </Link>
                <div className="w-8/12 p-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                        <h1 className="text-2xl font-bold">Create New Order</h1>
                        <p className="text-sm text-muted-foreground">
                            Create a new order for your client.
                        </p>

                        <div>
                            <Label htmlFor="order_name">Order Name</Label>
                            <Input
                                type="text"
                                id="order_name"
                                name="order_name"
                                placeholder="Enter order name"
                                value={data.order_name}
                                onChange={(e) => setData('order_name', e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="order_name">Order Desc</Label>
                            <Textarea
                                id="order_desc"
                                name="order_desc"
                                placeholder="Enter order description"
                                value={data.order_desc}
                                onChange={(e) => setData('order_desc', e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="product_id">Product</Label>
                            <Select
                                value={data.product_id}
                                onValueChange={(value) => setData('product_id', value)}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a product" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Products</SelectLabel>
                                        {products.map((product) => (
                                            <SelectItem key={product.id} value={product.id.toString()}>
                                                {product.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor="link_order">Order Link</Label>
                            <Input
                                type="text"
                                id="link_order"
                                name="link_order"
                                placeholder="Enter order link"
                                value={data.link_order}
                                onChange={(e) => setData('link_order', e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="status">Status</Label>
                            <Select
                                value={data.status}
                                onValueChange={(value) => setData('status', value)}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Status</SelectLabel>
                                        <SelectItem key="belumbayar" value="belumbayar" >Belum Dibayar</SelectItem>
                                        <SelectItem key="berjalan" value="berjalan" >Sedang Berjalan</SelectItem>
                                        <SelectItem key="selesai" value="selesai" >Selesai</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>


                        <div>
                            <Label htmlFor="bukti_pembayaran">Bukti Pembayaran</Label>
                            <Input
                                type="file"
                                id="bukti_pembayaran"
                                name="bukti_pembayaran"
                                accept="image/*"
                                onChange={handleBuktiChange}
                            />
                        </div>

                        <Button disabled={processing} type="submit">
                            Tambah Order
                        </Button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
