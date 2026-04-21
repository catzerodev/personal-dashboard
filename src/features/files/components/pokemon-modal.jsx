import {
  X,
  Ruler,
  Dumbbell,
  Sparkles,
  MapPin,
  Palette,
  Zap,
} from "lucide-react";
import { DisplayGender } from "../utils/display-gender";
import { DisplayType } from "../utils/display-type";
import { displayStatName } from "../utils/display-stat-name";
import pokeball from "../../../assets/pokeball.png";

export function PokemonModal({ pokemon, onClose }) {
  if (!pokemon) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 backdrop-blur-md">
      <div className="relative w-full max-w-lg overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#07142c_0%,#0b1c36_55%,#101a2b_100%)] p-5 shadow-2xl">
        
        <img
          src={pokeball}
          alt="pokeball background"
          className="pointer-events-none absolute left-[-40px] top-[165px] w-[190px] opacity-10"
        />

        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
        >
          <X size={18} />
        </button>

        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="mx-auto h-44 w-44 object-contain saturate-150 contrast-110 brightness-105 drop-shadow-[0_10px_22px_rgba(0,0,0,0.4)]"
        />

        <h2 className="mt-1 text-center text-4xl font-semibold capitalize tracking-[-0.02em] text-white">
          • {pokemon.name} •
        </h2>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {(pokemon.types || []).map((type) => (
            <DisplayType key={type} type={type} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 border-y border-white/15 py-4 text-center text-white">
          <div>
            <p className="text-3xl font-bold">
              {pokemon.height ? (pokemon.height / 10).toFixed(1) : "0.0"} M
            </p>
            <div className="mt-1 flex items-center justify-center gap-1 text-base text-white/90">
              <Ruler size={16} />
              <span>Altura</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <DisplayGender gender={pokemon.gender} />
            <span className="text-lg">{pokemon.gender || "Unknown"}</span>
          </div>

          <div>
            <p className="text-3xl font-bold">
              {pokemon.weight ? (pokemon.weight / 10).toFixed(1) : "0.0"} KG
            </p>
            <div className="mt-1 flex items-center justify-center gap-1 text-base text-white/90">
              <Dumbbell size={16} />
              <span>Peso</span>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <p className="mb-3 text-xl font-semibold text-white">Stats</p>

          <div className="space-y-2">
            {(pokemon.stats || []).slice(0, 6).map((stat) => (
              <div
                key={stat.name}
                className="grid grid-cols-[78px_36px_1fr] items-center gap-3 text-white"
              >
                <span className="text-xs text-white/90">
                  {displayStatName(stat.name)}
                </span>

                <span className="text-xs font-medium text-white/80">
                  {stat.value}
                </span>

                <div className="h-2.5 overflow-hidden rounded-full bg-slate-950/70">
                  <div
                    className="h-full rounded-full bg-yellow-400"
                    style={{ width: `${Math.min(stat.value, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-[20px] border border-white/10 bg-white/[0.04] p-4">
          <div className="space-y-3 text-base text-white/90">
            <p className="flex items-center gap-2">
              <MapPin size={16} />
              <span>
                <span className="font-medium text-white">Habitat:</span>{" "}
                {pokemon.habitat || "unknown"}
              </span>
            </p>

            <p className="flex items-center gap-2">
              <Palette size={16} />
              <span>
                <span className="font-medium text-white">Color:</span>{" "}
                {pokemon.color || "unknown"}
              </span>
            </p>

            <p className="flex items-center gap-2">
              <Sparkles size={16} />
              <span>
                <span className="font-medium text-white">Abilities:</span>{" "}
                {(pokemon.abilities || []).join(", ") || "unknown"}
              </span>
            </p>

            <p className="flex items-center gap-2">
              <Zap size={16} />
              <span>
                <span className="font-medium text-white">Base experience:</span>{" "}
                {pokemon.baseExperience ?? "unknown"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}