import { PokemonsResponse, SimplePokemons } from '@/pokemons';
import PokemonGrid from '@/pokemons/components/PokemonGrid';
import type { Metadata } from 'next';

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

    // throw new Error('algo fallo papito');

    return pokemons;
};
export default async function PokemosPage() {
    const pokemons = await getPokemons(151);

    return (
        <div className="flex flex-col p-2">
            <span className="text-5xl my-2">
                Listado de pokemons <small>Estatico</small>
            </span>

            <PokemonGrid pokemons={pokemons} />
        </div>
    );
}
