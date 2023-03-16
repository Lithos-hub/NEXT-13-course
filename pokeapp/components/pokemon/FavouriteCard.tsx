import Image from "next/image";
import React, { FC } from "react";
import { useRouter } from "next/router";

interface Props {
  id: number;
}

const FavouriteCard: FC<Props> = ({ id }) => {
  const router = useRouter();
  return (
    <li
      onClick={() => router.push(`/pokemon/${id}`)}
      className={`cursor-pointer relative hover:scale-105 duration-200 border rounded-xl shadow-xl text-opacity-60 hover:bg-white`}
    >
      <div className="absolute">
        <div className="bg-[#202020] font-bold rounded-br-xl rounded-tl-xl px-2 flex flex-col justify-center items-center">
          <h3 className="my-auto mx-auto font-bold text-white">#{id}</h3>
        </div>
      </div>
      <div className="rounded-xl p-5">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          width="0"
          height="0"
          sizes="100vw"
          className="max-h-[200px] w-auto object-cover mx-auto"
          alt={`Pokemon image`}
        />
      </div>
    </li>
  );
};

export default FavouriteCard;
