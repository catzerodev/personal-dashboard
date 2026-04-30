import { PokemonItemSkeleton } from "./pokemon-item-skeleton";

export function MyPokemonsSkeletonPage() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <PokemonItemSkeleton key={index} />
      ))}
    </div>
  );
}