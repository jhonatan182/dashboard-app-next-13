'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface Props {
    path: string;
    icon: JSX.Element;
    title: string;
    subTitle: string;
}

export default function SidebarMenuItem({
    icon,
    path,
    title,
    subTitle,
}: Props) {
    const pathName = usePathname();

    return (
        <Link
            href={path}
            className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 ${
                pathName === path ? 'bg-blue-800' : ''
            }  py-3  transition ease-linear duration-150`}
        >
            <div className="flex items-center gap-5">
                <span>{icon}</span>
                <div className="flex flex-col">
                    <span className="text-lg text-slate-300 font-bold leading-5">
                        {title}
                    </span>
                    <span className="text-sm text-slate-500 hidden md:block">
                        {subTitle}
                    </span>
                </div>
            </div>
        </Link>
    );
}
