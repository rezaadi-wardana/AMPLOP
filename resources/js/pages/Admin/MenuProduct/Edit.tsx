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
    {
        title: 'Edit Product',
        href: '/product/edit',
    },
];

interface Category {
    id: number;
    category_name: string;
}

interface Product {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    link: string;
    category_id: number;
}

interface Props {
    categories: Category[];
    product: Product;
}

export default function EditProduct({ categories, product }: Props) {
    const { data, setData, put, errors, processing } = useForm({
        image: product.image, // bisa string atau File
        name: product.name,
        description: product.description,
        price: product.price,
        link: product.link,
        category_id: product.category_id,
    });

function handleUpdate(e: React.FormEvent) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('_method', 'put'); // method spoofing untuk Laravel
    formData.append('name', data.name);
    formData.append('price', data.price.toString());
    formData.append('link', data.link);
    formData.append('category_id', data.category_id.toString());
    formData.append('description', data.description ?? '');

    if (data.image instanceof File) {
        formData.append('image', data.image);
    }

    router.post(route('product.update', product.id), formData, {
        onSuccess: () => {
            // success handling, misal redirect atau notifikasi
        },
        onError: (errors) => {
            console.error('Update failed:', errors);
        },
        preserveScroll: true,
        preserveState: true,
    });
}



    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            setData('image', file);
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit a Product" />
            <div className="m-4">
                <Link href="/product" prefetch>
                    <Button variant="outline">Back to Products</Button>
                </Link>

                <div className="w-8/12 p-4">
                    <form onSubmit={handleUpdate} className="space-y-4">
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

                        <h1 className="text-2xl font-bold">Edit a Product</h1>
                        <p className="text-sm text-muted-foreground">
                            Edit the product details for your store.
                        </p>

                        <div>
                            <Label htmlFor="name">Product Name</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="price">Price</Label>
                            <Input
                                id="price"
                                name="price"
                                type="number"
                                value={data.price}
                                onChange={(e) => setData('price', Number(e.target.value))}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="link">Product Link</Label>
                            <Input
                                id="link"
                                name="link"
                                type="text"
                                value={data.link}
                                onChange={(e) => setData('link', e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="category_id">Category</Label>
                            <Select
                                value={String(data.category_id)} // pastikan string
                                onValueChange={(value) => setData("category_id", parseInt(value))}
                            >

                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>


                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Categories</SelectLabel>
                                        {categories.map((category) => (
                                            <SelectItem key={category.id} value={String(category.id)}>
                                                {category.category_name}
                                            </SelectItem>

                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <p className="text-xs text-muted-foreground">
                                Selected ID: {data.category_id}                            </p>

                        </div>

                        <div>
                            <Label htmlFor="image">Product Image</Label>
                            <Input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            {typeof product.image === 'string' && (
                                <div className="mt-2">
                                    <img
                                        src={`/storage/${product.image}`}
                                        alt="Current Image"
                                        className="h-24 rounded-md"
                                    />
                                </div>
                            )}
                        </div>

                        <div>
                            <Label htmlFor="description">Product Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                            />
                        </div>
                        <Button type="submit" disabled={processing}>
                            Perbarui Product
                        </Button>
                    </form>
                </div>
            </div >
        </AppLayout >
    );
}
