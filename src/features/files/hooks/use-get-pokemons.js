import { useEffect, useState } from "react";
import { getPokemons } from "../services/get-pokemons";

export const useGetPokemons = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const limit = 3;

  useEffect(() => {
    setLoading(true);

    getPokemons()
      .then((data) => {
        setAllPokemons(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setPage(1);
  }, [search]);

  const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPokemons.length / limit);
  const start = (page - 1) * limit;
  const pokemons = filteredPokemons.slice(start, start + limit);

  return {
    pokemons,
    loading,
    error,
    search,
    setSearch,
    page,
    setPage,
    totalPages,
  };
};