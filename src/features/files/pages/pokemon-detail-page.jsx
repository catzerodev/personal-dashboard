import { useNavigate, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";

import { useGetPokemon } from "../hooks/use-get-pokemon";
import { DisplayGender } from "../utils/display-gender";
import { DisplayType } from "../utils/display-type";

export function PokemonDetailPage() {
  const navigate = useNavigate();
  const { name } = useParams();

  const { pokemon, loading, error } = useGetPokemon(name);

  return (
    <section className="flex h-full flex-col overflow-hidden">
      <div className="mt-5 flex-1 overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/20 p-8 shadow-2xl backdrop-blur-xl">
        <div className="h-full overflow-y-auto pr-2">
          
          
          <button
            onClick={() => navigate("/files")}
            className="mb-6 flex items-center gap-2 text-white/80 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          
          {loading && <p className="text-white/60">Loading pokemon...</p>}
          {error && <p className="text-red-400">Error: {error}</p>}

          
          {pokemon && (
            <div className="mx-auto max-w-md rounded-[24px] border border-white/10 bg-white/8 p-6">
              
              
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="mx-auto h-56 w-56 object-contain"
              />

              
              <h2 className="mt-4 text-4xl font-semibold capitalize text-white">
                {pokemon.name}
              </h2>

              
              <div className="mt-6 space-y-4 text-lg text-white/80">
                
                
                <p className="flex items-center gap-2">
                  <span className="font-medium text-white">Gender:</span>
                  <DisplayGender gender={pokemon.gender} />
                  <span>{pokemon.gender}</span>
                </p>

                
                <div>
                  <p className="mb-2 font-medium text-white">Types:</p>
                  <div className="flex flex-wrap gap-2">
                    {pokemon.types.map((type) => (
                      <DisplayType key={type} type={type} />
                    ))}
                  </div>
                </div>

                
                <p>
                  <span className="font-medium text-white">Height:</span>{" "}
                  {pokemon.height}
                </p>

                <p>
                  <span className="font-medium text-white">Weight:</span>{" "}
                  {pokemon.weight}
                </p>

                <p>
                  <span className="font-medium text-white">Habitat:</span>{" "}
                  {pokemon.habitat}
                </p>

                <p>
                  <span className="font-medium text-white">Color:</span>{" "}
                  {pokemon.color}
                </p>

                <p>
                  <span className="font-medium text-white">Abilities:</span>{" "}
                  {pokemon.abilities.join(", ")}
                </p>

                <p>
                  <span className="font-medium text-white">
                    Base experience:
                  </span>{" "}
                  {pokemon.baseExperience}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}