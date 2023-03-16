import { Layout } from "@/components/layouts";
import PokemonCard from "@/components/pokemon/PokemonCard";
import { Pokemon, PokemonApiResponse, SmallPokemon } from "@/interfaces";
import { pokemonAPI } from "@/services";

import { NextPage } from "next";
import { GetStaticProps } from "next";
import Link from "next/link";

interface Props {
  pokemons: Pokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="PokéAPP | Home">
      <>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 text-black">
          {pokemons.map((pokemon: Pokemon, index) => {
            return (
              <Link key={index} href={`/pokemon/${pokemon.id}`}>
                <PokemonCard
                  name={pokemon.name}
                  type={pokemon.types[0].type.name}
                  id={pokemon.id}
                  img={pokemon.sprites.other["official-artwork"].front_default}
                />
              </Link>
            );
          })}
        </ul>
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokemonAPI.get<PokemonApiResponse>(
    "/pokemon?limit=151"
  );

  const pokemonData = data.results.map(
    async ({ name }) => await pokemonAPI.get<Pokemon>(`/pokemon/${name}`)
  );

  const resolved = await Promise.all(pokemonData);

  return {
    props: {
      pokemons: resolved.map(({ data }) => data),
    },
  };
};

export default HomePage;
