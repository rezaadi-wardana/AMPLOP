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
        title: 'Create Product',
        href: '/product/create',
    },
];

interface Category {
    id: number;
    category_name: string;
}

interface CreateProps {
    categories: Category[];
}

export default function Create({ categories }: CreateProps) {
    const { data, setData, post, errors, processing } = useForm({
        image: null as File | null,
        name: '',
        description: '',
        price: '',
        link: '',
        category_id: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        // Debug log
        // console.log('Submitting data:', data);
        // console.log('Image:', data.image);
        // console.log('Is image a File?', data.image instanceof File);

        post(route('product.store'), {
            // forceFormData: true,
            // onSuccess: () => {
            //     console.log('Product successfully submitted');
            // },
        });
    }

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0] ?? null;
        // console.log('Selected file:', file);
        setData('image', file);
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create New Product" />
            <div className="m-4">
                <Link href="/product" prefetch>
                    <Button variant="outline">Back to Products</Button>
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
                        <h1 className="text-2xl font-bold">Create New Product</h1>
                        <p className="text-sm text-muted-foreground">
                            Create a new product for your store.
                        </p>

                        <div>
                            <Label htmlFor="name">Product Name</Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter product name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="price">Price</Label>
                            <Input
                                type="number"
                                id="price"
                                name="price"
                                placeholder="Enter price"
                                value={data.price}
                                onChange={(e) => setData('price', e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="link">Product Link</Label>
                            <Input
                                type="text"
                                id="link"
                                name="link"
                                placeholder="Enter product link"
                                value={data.link}
                                onChange={(e) => setData('link', e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="category_id">Category</Label>
                            <Select
                                value={data.category_id}
                                onValueChange={(value) => setData('category_id', value)}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Categories</SelectLabel>
                                        {categories.map((category) => (
                                            <SelectItem key={category.id} value={category.id.toString()}>
                                                {category.category_name}
                                            </SelectItem>
                                        ))}

                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor="image">Product Image</Label>
                            <Input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="description">Product Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                placeholder="Enter product description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                            />
                        </div>

                        <Button disabled={processing} type="submit">
                            Tambah Product
                        </Button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
