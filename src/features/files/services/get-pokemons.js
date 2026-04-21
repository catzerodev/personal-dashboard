export async function getPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
  const data = await response.json();

  const pokemons = await Promise.all(
    data.results.map(async (pokemon) => {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonResponse.json();

      const speciesResponse = await fetch(pokemonData.species.url);
      const speciesData = await speciesResponse.json();

      return {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.other["official-artwork"].front_default,
        height: pokemonData.height,
        weight: pokemonData.weight,
        types: pokemonData.types.map((type) => type.type.name),
        gender:
          speciesData.gender_rate === -1
            ? "Unknown"
            : speciesData.gender_rate >= 4
            ? "Female"
            : "Male",
        color: speciesData.color?.name || "unknown",
        habitat: speciesData.habitat?.name || "unknown",
      };
    })
  );

  return pokemons;
}