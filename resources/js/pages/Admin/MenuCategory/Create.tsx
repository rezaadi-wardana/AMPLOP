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
        title: 'Create Category',
        href: '/category/create',
    },

];

export default function Create() {

    const { data, setData, post, errors, processing } = useForm({
        'category_name': '',
        'category_desc': '',
        slug: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // console.log(data);
        post(route('category.store'));
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create New Category" />
            <div className="m-4">
                <Link href="/category" prefetch>
                    <Button variant="outline">Back to Categories</Button>
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
                            <Label htmlFor='category_name'>Category Name</Label>
                            <Input type="text" id="category_name" name="category_name" placeholder='Enter category name' value={data['category_name']} onChange={e => setData('category_name', e.target.value)} required />
                        </div>
                        <div>
                            <Label htmlFor='category_desc'>Category Description</Label>
                            <Textarea id="category_desc" name="category_desc" placeholder='Enter category description' value={data['category_desc']} onChange={e => setData('category_desc', e.target.value)}/>
                        </div>
                        <div>
                            <Label htmlFor='slug'>Slug</Label>
                            <Input type="text" id="slug" name="slug" placeholder='Enter slug' value={data.slug} onChange={e => setData('slug', e.target.value)} required />
                        </div>
                        <Button disabled={processing} type='submit'>Tambah Category</Button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
