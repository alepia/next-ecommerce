"use client";

import { useState, useEffect } from "react";
import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

const getPokemons = async (
  limit = 150,
  offset = 0
): Promise<SimplePokemon[]> => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data: PokemonsResponse = await res.json();

  const pokemons: SimplePokemon[] = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2) || "",
    name: pokemon.name,
  }));

  return pokemons;
};

export default function PokemonsPage() {
  const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);
  useEffect(() => {
    (async () => {
      const fetchedPokemons = await getPokemons();
      setPokemons(fetchedPokemons);
    })();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="flex flex-col justify-center">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              width={100}
              height={100}
              alt="Pokemon"
            />
            <span>{pokemon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
