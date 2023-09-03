import type { Metadata } from 'next';
import { PokemonsResponse, SimplePokemons } from '@/app/pokemons';
import Pokemon from '@/app/components/Pokemon';

export const metadata: Metadata = {
    title: 'Pokemons Page',
    description: 'Aqui encontraras todo tipo de pokemons',
};

const getPokemons = async (
    limit = 20,
    offset = 0
): Promise<SimplePokemons[]> => {
    //por defecto esto va estar en cached
    const respuesta = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );

    const data: PokemonsResponse = await respuesta.json();

    const pokemons = data.results.map((pokemon) => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }));

    return pokemons;
};
export default async function PokemosPage() {
    const pokemons = await getPokemons(151);

    return (
        <div className="flex flex-col">
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {pokemons.map((pokemon) => (
                    <Pokemon {...pokemon} key={pokemon.id} />
                ))}
            </div>
        </div>
    );
}
