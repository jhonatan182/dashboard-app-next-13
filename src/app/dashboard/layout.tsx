import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard general de mi app',
    description: 'Aqui encontraras menu de mi dashboard',
};
interface Props {
    children: React.ReactNode;
}

const CounterLayout = ({ children }: Props) => {
    return (
        <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
            <div className="flex">
                <Sidebar />

                <div className="w-full text-slate-900 ">{children}</div>
            </div>
        </div>
    );
};

export default CounterLayout;
