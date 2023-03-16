import React, { useState } from "react";

import { GetStaticProps } from "next";
import Link from "next/link";
import { Layout } from "@/components/layouts";
import PokemonCard from "@/components/pokemon/PokemonCard";

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
import { GetStaticPaths, NextPage } from "next";
import { pokemonAPI } from "@/services";
import { Pokemon, PokemonApiResponse } from "@/interfaces";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { LocalFavourites } from "@/utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonDetailByName: NextPage<Props> = ({ pokemon }) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(
    LocalFavourites.checkExistingPokemon(pokemon.id)
  );

  const onToggleFavourite = () => {
    LocalFavourites.toggleFavourite(pokemon.id);
    setIsFavourite(!isFavourite);
  };
  return (
    <Layout title={`${pokemon.name} | Details`}>
      <div className="grid grid-cols-2 gap-5">
        <div className="m-auto">
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-full object-contain mx-auto"
            alt={`Pokemon image: ${pokemon.name}`}
          />
        </div>
        <div className="flex flex-col gap-5 grow">
          <div className="flex justify-between items-center">
            <h1>
              #{pokemon.id} | <span className="capitalize">{pokemon.name}</span>
            </h1>
            <Button
              bordered={!isFavourite}
              flat={isFavourite}
              color={isFavourite ? "error" : "success"}
              shadow
              onPress={onToggleFavourite}
            >
              {isFavourite ? "Remove from favourites" : "Add to favourites"}
            </Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center text-center">
            {pokemon.stats.map(({ base_stat, stat }, index) => (
              <div
                key={index}
                className="rounded-xl bg-cyan-500 bg-opacity-10 border flex flex-col"
              >
                <div className="uppercase flex flex-col justify-center">
                  <h4 className="mt-auto">{stat.name}</h4>
                </div>
                <h2 className="m-0">{base_stat}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokemonAPI.get<PokemonApiResponse>(
    "/pokemon?limit=151"
  );

  const paths = data.results.map(({ name }) => ({
    params: {
      name: name,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const {
    data: { id, name: pokemonName, stats, sprites },
  } = await pokemonAPI.get<Pokemon>(`/pokemon/${name}`);

  const pokemon = {
    id,
    name: pokemonName,
    stats,
    sprites,
  };

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonDetailByName;
