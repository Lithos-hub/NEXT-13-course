import { Layout } from "@/components/layouts";
import FavouriteCard from "@/components/pokemon/FavouriteCard";
import { LocalFavourites } from "@/utils";

import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

const FavouritesPage: NextPage = () => {
  const favourites = useMemo(() => LocalFavourites.pokemonsList(), []);
  const router = useRouter();

  return (
    <Layout title="PokéAPP | Favourites">
      <>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 text-black">
          {favourites.length === 0 ? (
            <h1 className="text-red-500 text-center">No pokémons saved yet!</h1>
          ) : (
            favourites.map((id, index) => {
              return (
                // <Link key={index} href={`/pokemon/${id}`}>
                //   <FavouriteCard id={id} />
                // </Link>
                <FavouriteCard key={index} id={id} />
              );
            })
          )}
        </ul>
      </>
    </Layout>
  );
};

export default FavouritesPage;
