import pokeball from "../../../assets/pokeball.png";
import { Ruler, Weight } from "lucide-react";

export function PokemonItem({ pokemon, onClick }) {
  return (
    <div
      onClick={() => onClick(pokemon)}
      className="group relative flex h-[390px] cursor-pointer flex-col justify-between overflow-hidden rounded-[26px] border border-white/10 bg-slate-900/60 p-5 transition hover:scale-[1.02]"
    >
      {/* Pokeball fondo */}
      <img
        src={pokeball}
        className="absolute bottom-[-40px] left-[-40px] w-[180px] opacity-10"
      />

      {/* Imagen */}
      <div className="flex justify-center">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="mx-auto h-56 w-56 object-contain saturate-200 contrast-125 brightness-110 drop-shadow-[0_16px_28px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Nombre */}
      <h3 className="text-center text-lg font-semibold text-white capitalize">
        • {pokemon.name} •
      </h3>

      {/* Types */}
      <div className="flex justify-center gap-2">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
          >
            {type}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-2 flex justify-between text-sm text-white/80">
        <div className="flex flex-col items-center">
          <span className="text-base font-semibold">
            {pokemon.height / 10} M
          </span>
          <span className="flex items-center gap-1 text-xs">
            <Ruler size={12} /> Altura
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-base font-semibold">
            {pokemon.weight / 10} KG
          </span>
          <span className="flex items-center gap-1 text-xs">
            <Weight size={12} /> Peso
          </span>
        </div>
      </div>
    </div>
  );
}