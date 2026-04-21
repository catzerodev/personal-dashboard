import { useNavigate } from "react-router";
import { DisplayGender } from "../utils/display-gender";

export function PokemonItem({ pokemon }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/files/${pokemon.name}`)}
      className="cursor-pointer rounded-[24px] border border-white/10 bg-white/8 p-5 transition hover:scale-[1.02] hover:bg-white/10"
    >
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="mx-auto h-36 w-36 object-contain"
      />

      <h3 className="mt-4 text-3xl font-semibold capitalize text-white">
        {pokemon.name}
      </h3>

      <div className="mt-4 space-y-2 text-base text-white/80">
        <p className="flex items-center gap-2 text-white/80">
          <DisplayGender gender={pokemon.gender} />
          <span className="capitalize">{pokemon.gender}</span>
        </p>
        <p>
          <span className="font-medium text-white">Type:</span>{" "}
          {pokemon.types.join(", ")}
        </p>
        <p>
          <span className="font-medium text-white">Color:</span> {pokemon.color}
        </p>
        <p>
          <span className="font-medium text-white">Habitat:</span>{" "}
          {pokemon.habitat}
        </p>
      </div>
    </div>
  );
}
