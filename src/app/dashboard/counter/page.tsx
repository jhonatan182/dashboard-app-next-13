import type { Metadata } from 'next';
import Counter from '@/app/shopping-cart/components/CartCounter';

export const metadata: Metadata = {
    title: 'Shopping Cart',
    description: 'Contador de tienda ',
};

const CounterPage = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Productos en el carrito</span>

            <Counter value={10} />
        </div>
    );
};

export default CounterPage;
