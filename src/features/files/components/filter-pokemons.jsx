import { Search } from "lucide-react";

export function FilterPokemons({ search, setSearch }) {
  return (
    <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
      <Search size={18} className="text-white/50" />

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search a pokemon..."
        className="w-full bg-transparent text-white outline-none placeholder:text-white/40"
      />
    </div>
  );
}