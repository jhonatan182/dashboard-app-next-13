import Image from 'next/image';
import {
    IoLogoReact,
    IoBrowsers,
    IoCalculator,
    IoFootballOutline,
} from 'react-icons/io5';
import SidebarMenuItem from './SidebarMenuItem';

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsers size={30} />,
        title: 'Dashboard',
        subTitle: 'Visualización',
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={30} />,
        title: 'Counter',
        subTitle: 'Contador Client Side',
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootballOutline size={30} />,
        title: 'Pokemons',
        subTitle: 'Explora tu pokedex',
    },
];

export default function Sidebar() {
    return (
        <div
            id="menu"
            className="bg-gray-900 min-h-screen text-slate-300 w-96  "
        >
            <div id="logo" className="my-4 px-6">
                <h1 className=" flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className="mr-2" />
                    <span>Dash</span>
                    <span className="text-blue-500">8</span>.
                </h1>
                <p className="text-slate-500 text-sm">
                    Manage your actions and activities
                </p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            className="rounded-full "
                            alt="Foto perfil"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                            width={50}
                            height={50}
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Jhonatan Fabricio Vargas
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
                {menuItems.map((item) => (
                    <SidebarMenuItem
                        path={item.path}
                        icon={item.icon}
                        title={item.title}
                        subTitle={item.subTitle}
                        key={item.path}
                    />
                ))}
            </div>
        </div>
    );
}
