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
        title: 'Edit User',
        href: '/user/edit',
    },
];


interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    type: string;
}

interface Props {
    users: User;
}

export default function EditUser({ users }: Props) {
    const { data, setData, put, errors, processing } = useForm({
        name: users.name,
        email: users.email,
        password: users.password,
        type: users.type,
    });

    function handleUpdate(e: React.FormEvent) {
        e.preventDefault();

        const formData = new FormData();

        formData.append('_method', 'put'); // method spoofing untuk Laravel
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('type', data.type);

        router.post(route('manage_user.update', users.id), formData, {
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

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit a User" />
            <div className="m-4">
                <Link href="/manage_user" prefetch>
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

                        <h1 className="text-2xl font-bold">Edit a User</h1>
                        <p className="text-sm text-muted-foreground">
                            Edit the user details for your store.
                        </p>

                        <div>
                            <Label htmlFor="name">User Name</Label>
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
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="password">User Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="type">Type</Label>
                            <Select
                                value={String(data.type)} // pastikan string
                                onValueChange={(value) => setData("type", value)}
                            >

                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>


                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Type</SelectLabel>
                                        <SelectItem key="admin" value="admin">Admin</SelectItem>
                                        <SelectItem key="user" value="user">User</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button type="submit" disabled={processing}>
                            Perbarui User
                        </Button>
                    </form>
                </div>
            </div >
        </AppLayout >
    );
}
