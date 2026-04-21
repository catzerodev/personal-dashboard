import PageBreadcrumb from "../../../common/components/page-breadcrumb";
import { PokemonItem } from "../components/pokemon-item";
import { useGetPokemons } from "../hooks/use-get-pokemons";

export function FilesPage() {
  const { pokemons, loading, error } = useGetPokemons();

  return (
    <section className="flex h-full flex-col overflow-hidden">
      <div className="flex items-center justify-between px-1">
        <PageBreadcrumb current="todo" currentLabel="My Pokemons" />
      </div>

      <div className="mt-5 flex-1 overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/20 p-8 shadow-2xl backdrop-blur-xl">
        <div className="h-full overflow-y-auto pr-2">
          <h2 className="text-4xl font-medium tracking-[-0.02em] text-white">
            My Pokemons
          </h2>

          {loading && (
            <p className="mt-6 text-white/60">Loading pokemons...</p>
          )}

          {error && (
            <p className="mt-6 text-red-400">Error: {error}</p>
          )}

          {!loading && !error && (
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {pokemons.map((pokemon) => (
                <PokemonItem key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}