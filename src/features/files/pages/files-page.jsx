import { useState } from "react";
import PageBreadcrumb from "../../../common/components/page-breadcrumb";
import { PokemonItem } from "../components/pokemon-item";
import { PokemonModal } from "../components/pokemon-modal";
import { FilterPokemons } from "../components/filter-pokemons";
import { MyPokemonsSkeletonPage } from "../components/skeletons/my-pokemons-skeleton-page";
import { useGetPokemons } from "../hooks/use-get-pokemons";

export function FilesPage() {
  const {
    pokemons,
    loading,
    error,
    search,
    setSearch,
    page,
    setPage,
    totalPages,
  } = useGetPokemons();

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <section className="flex h-full flex-col overflow-hidden">
      <div className="flex items-center justify-between px-1">
        <PageBreadcrumb current="todo" currentLabel="My Pokemons" />
      </div>

      <div className="mt-5 flex-1 overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/20 p-8 shadow-2xl backdrop-blur-xl">
        <div className="flex h-full flex-col">
          <h2 className="text-4xl font-medium tracking-[-0.02em] text-white">
            My Pokemons
          </h2>

          <FilterPokemons search={search} setSearch={setSearch} />

          <div className="mt-8 min-h-0 flex-1 overflow-hidden">
            {loading && <MyPokemonsSkeletonPage />}

            {error && <p className="text-lg text-red-400">Error: {error}</p>}

            {!loading && !error && (
              <div className="grid h-full grid-cols-1 gap-6 overflow-hidden xl:grid-cols-3">
                {pokemons.map((pokemon) => (
                  <PokemonItem
                    key={pokemon.id}
                    pokemon={pokemon}
                    onClick={setSelectedPokemon}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="mt-5 flex shrink-0 items-center justify-center gap-4 border-t border-white/10 pt-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xl text-white transition hover:bg-white/15 disabled:opacity-40"
            >
              {"<"}
            </button>

            <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white/80">
              Page {page} / {totalPages || 1}
            </span>

            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xl text-white transition hover:bg-white/15 disabled:opacity-40"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>

      <PokemonModal
        pokemon={selectedPokemon}
        onClose={() => setSelectedPokemon(null)}
      />
    </section>
  );
}
