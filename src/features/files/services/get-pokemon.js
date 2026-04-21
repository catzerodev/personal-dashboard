export async function getPokemon(name) {
  const pokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  const pokemonData = await pokemonResponse.json();

  const speciesResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  );
  const speciesData = await speciesResponse.json();

  return {
    id: pokemonData.id,
    name: pokemonData.name,
    image: pokemonData.sprites.other["official-artwork"].front_default,
    height: pokemonData.height,
    weight: pokemonData.weight,
    baseExperience: pokemonData.base_experience,
    abilities: pokemonData.abilities.map((ability) => ability.ability.name),
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
}