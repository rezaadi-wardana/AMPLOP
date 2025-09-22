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
        title: 'Create User',
        href: '/user/create',
    },
];

export default function Create() {
    const { data, setData, post, errors, processing } = useForm({
        name: '',
        email: '',
        password: '',
        type: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('manage_user.store'), {
        });
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create New User" />
            <div className="m-4">
                <Link href="/manage_user" prefetch>
                    <Button variant="outline">Back to Users</Button>
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
                        <h1 className="text-2xl font-bold">Create New User</h1>
                        <p className="text-sm text-muted-foreground">
                            Create a new user for your store.
                        </p>

                        <div>
                            <Label htmlFor="name">User Name</Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter user name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="link">User Password</Label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter user password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="type">Type</Label>
                            <Select
                                value={data.type}
                                onValueChange={(value) => setData('type', value)}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a type" />
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

                        <Button disabled={processing} type="submit">
                            Tambah User
                        </Button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
