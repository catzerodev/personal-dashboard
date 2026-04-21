import { Ruler, Dumbbell } from "lucide-react";
import { DisplayType } from "../utils/display-type";
import pokeball from "../../../assets/pokeball.png";

export function PokemonItem({ pokemon, onClick }) {
  return (
    <div
      onClick={() => onClick(pokemon)}
      className="group relative min-h-[500px] cursor-pointer overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#07142c_0%,#0b1c36_42%,#4fa726_100%)] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
    >
      
      <img
        src={pokeball}
        alt="pokeball background"
        className="pointer-events-none absolute left-[-55px] top-[205px] w-[220px] opacity-10"
      />

      <div className="pointer-events-none absolute bottom-[-30px] left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-green-300/10 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="mx-auto h-48 w-48 object-contain saturate-150 contrast-110 brightness-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105"
        />

        <h3 className="mt-2 text-center text-[2.15rem] font-semibold capitalize tracking-[-0.02em] text-white">
          • {pokemon.name} •
        </h3>

        <div className="mt-4 flex justify-center gap-3">
          {(pokemon.types || []).map((type) => (
            <DisplayType key={type} type={type} />
          ))}
        </div>

        <div className="mt-auto pt-10">
          <div className="grid grid-cols-2 gap-4 text-center text-white">
            <div>
              <p className="text-[2rem] font-bold">
                {(pokemon.height / 10).toFixed(1)} M
              </p>

              <div className="mt-1 flex items-center justify-center gap-1 text-[1.1rem] text-white/90">
                <Ruler size={18} />
                <span>Altura</span>
              </div>
            </div>

            <div>
              <p className="text-[2rem] font-bold">
                {(pokemon.weight / 10).toFixed(1)} KG
              </p>

              <div className="mt-1 flex items-center justify-center gap-1 text-[1.1rem] text-white/90">
                <Dumbbell size={18} />
                <span>Peso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}