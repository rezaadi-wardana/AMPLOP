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
        title: 'Manage User',
        href: '/user',
    },
];

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    type: string;
}

interface PageProps {
    flash: {
        message?: string;
    };
    users: User[];
}

export default function Index() {
    const { users, flash } = usePage().props as PageProps;
    const { processing, delete: destroy } = useForm();

    const handleDelete = (id: number, name: string) => {
        if (confirm(`Do you want to delete - ${id} ${name}?`)) {
            destroy(route('manage_user.destroy', id));
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User List" />

            <div className="m-4">
                <Link href={route('manage_user.create')}>
                    <Button>Create User</Button>
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

            {users.length > 0 ? (
                <div className="m-4 overflow-auto">
                    <Table>
                        <TableCaption>A list of your users.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                {/* <TableHead>Password</TableHead> */}
                                <TableHead>Type</TableHead>
                                <TableHead className="text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    {/* <TableCell>{user.password}</TableCell> */}
                                    <TableCell>{user.type}</TableCell>
                                    <TableCell className="text-center space-x-2">
                                        <Link href={route('manage_user.edit', user.id)} prefetch>
                                            <Button disabled={processing}>Edit</Button>
                                        </Link>
                                        <Button
                                            disabled={processing}
                                            onClick={() => handleDelete(user.id, user.name)}
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
                <div className="m-4 text-gray-500">No user found.</div>
            )}
        </AppLayout>
    );
}
