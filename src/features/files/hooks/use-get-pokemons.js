import { useEffect, useState } from "react";
import { getPokemons } from "../services/get-pokemons";

export const useGetPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPokemons()
      .then(setPokemons)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return { pokemons, loading, error };
};