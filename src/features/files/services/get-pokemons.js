import axios from "axios";

export async function getPokemons() {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=60&offset=0"
  );

  const pokemons = await Promise.all(
    response.data.results.map(async (pokemon) => {
      const pokemonResponse = await axios.get(pokemon.url);
      const pokemonData = pokemonResponse.data;

      const speciesResponse = await axios.get(pokemonData.species.url);
      const speciesData = speciesResponse.data;

      return {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.other["official-artwork"].front_default,
        height: pokemonData.height,
        weight: pokemonData.weight,
        types: pokemonData.types.map((type) => type.type.name),
        abilities: pokemonData.abilities.map((ability) => ability.ability.name),
        baseExperience: pokemonData.base_experience,
        stats: pokemonData.stats.map((stat) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        })),
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