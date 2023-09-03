import Image from 'next/image';

interface Props {
    id: string;
    name: string;
}

export default function Pokemon({ id, name }: Props) {
    return (
        <div className="flex flex-col justify-center items-center bg-slate-800  ">
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                alt={`Imagen del pokemon ${name}`}
                width={100}
                height={100}
            />
            <p className="text-white text-lg text-center mt-4">{name}</p>
        </div>
    );
}
