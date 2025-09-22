import AppLogoIcon from '@/components/app-logo-icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

export default function AuthCardLayout({
    children,
    title,
    description,
}: PropsWithChildren<{
    name?: string;
    title?: string;
    description?: string;
}>) {
    return (
        <div className=" bg-[#F9F9F9] flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10" style={{
                            backgroundImage: 'url(/img/bg-wayang.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'top',
                        }}>
            <div className="flex w-full max-w-md flex-col gap-6" >
                <Link href={route('beranda')} className="flex items-center gap-2 self-center font-medium">
                    <div className="flex h-9 w-9 items-center justify-center">
                        <AppLogoIcon />
                    </div>
                </Link>

                <div className="flex flex-col gap-6" >
                    <Card className="rounded-xl p-0 bg-gray-900">
                        <div className="wrap" style={{
                            backgroundImage: 'url(/img/auth-bg.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            <CardHeader className="px-10 pt-8 pb-0 text-center">
                                <CardTitle className="text-xl">{title}</CardTitle>
                                <CardDescription>{description}</CardDescription>
                            </CardHeader>
                            <CardContent className="px-10 py-8">{children}</CardContent>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
