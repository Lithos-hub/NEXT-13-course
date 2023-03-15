import { Layout } from "@/components/layouts";
import { Pokemon } from "@/interfaces";
import { pokemonAPI } from "@/services";
import { Button } from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";
import { GetStaticPaths } from "next";
import Image from "next/image";

interface Props {
  pokemon: Pokemon;
}

const PokemonDetail: NextPage<Props> = ({ pokemon }) => {
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
            <Button bordered color="gradient">
              Save as favourite
            </Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center text-center">
            {pokemon.stats.map(({ base_stat, stat }, index) => (
              <div key={index}>
                <h3 className="uppercase m-0 p-5 bg-[#050505] rounded-t-xl">
                  {stat.name}
                </h3>
                <h3 className="m-0 p-5 bg-white text-black rounded-b-xl">
                  {base_stat}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const paths = [...Array(151)].map((_, index) => ({
    params: {
      id: String(index + 1),
    },
  }));

  return {
    paths,
    fallback: false, // => 404 if the path is any other
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokemonAPI.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonDetail;