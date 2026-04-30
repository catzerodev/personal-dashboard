export function PokemonItemSkeleton() {
  return (
    <div className="min-h-[500px] animate-pulse rounded-[32px] border border-white/10 bg-white/[0.06] p-5">
      <div className="mx-auto h-48 w-48 rounded-full bg-white/10" />

      <div className="mx-auto mt-8 h-8 w-48 rounded-full bg-white/10" />

      <div className="mt-6 flex justify-center gap-3">
        <div className="h-9 w-24 rounded-xl bg-white/10" />
        <div className="h-9 w-24 rounded-xl bg-white/10" />
      </div>

      <div className="mt-20 grid grid-cols-2 gap-4">
        <div className="mx-auto h-14 w-28 rounded-xl bg-white/10" />
        <div className="mx-auto h-14 w-28 rounded-xl bg-white/10" />
      </div>
    </div>
  );
}