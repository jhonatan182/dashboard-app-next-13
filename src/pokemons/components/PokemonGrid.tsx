import { SimplePokemons } from '..';
import Pokemon from './Pokemon';

interface Props {
    pokemons: SimplePokemons[];
}

export default function PokemonGrid({ pokemons }: Props) {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {pokemons.map((pokemon) => (
                <Pokemon pokemon={pokemon} key={pokemon.id} />
            ))}
        </div>
    );
}
