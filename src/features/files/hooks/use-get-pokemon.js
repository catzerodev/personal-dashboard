import { useEffect, useState } from "react";
import { getPokemon } from "../services/get-pokemon";

export const useGetPokemon = (name) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!name) return;

    getPokemon(name)
      .then(setPokemon)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [name]);

  return { pokemon, loading, error };
};