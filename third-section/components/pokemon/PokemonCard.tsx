import Image from "next/image";
import React, { FC } from "react";

interface Props {
  type: string;
  id: number;
  img: string;
  name: string;
}

const PokemonCard: FC<Props> = ({ type, id, img, name }) => {
  const getColor = (type: string) => {
    const options = {
      grass: "bg-green-300",
      fire: "bg-orange-300",
      water: "bg-blue-200",
      bug: "bg-green-600",
      normal: "bg-rose-200",
      poison: "bg-purple-700",
      electric: "bg-yellow-200",
      ground: "bg-yellow-900",
      fairy: "bg-fuchsia-400",
      fighting: "bg-slate-700",
      psychic: "bg-indigo-400",
      rock: "bg-slate-200",
      ghost: "bg-gray-400",
      ice: "bg-sky-300",
      dragon: "bg-red-500",
    };

    return options[type as keyof typeof options];
  };

  return (
    <li
      className={`relative hover:scale-105 duration-200 border rounded-xl shadow-xl bg-opacity-60 ${getColor(
        type
      )}`}
    >
      <div className="absolute">
        <div className="bg-[#202020] font-bold rounded-br-xl rounded-tl-xl px-2 flex flex-col justify-center items-center">
          <h3 className="my-auto mx-auto font-bold text-white">#{id}</h3>
        </div>
      </div>
      <div className="rounded-xl p-5">
        <Image
          src={img}
          width="0"
          height="0"
          sizes="100vw"
          className="max-h-[200px] w-auto object-cover mx-auto"
          alt={`Pokemon image: ${name}`}
        />
        <footer className="flex flex-col lg:flex-row justify-between items-center">
          <h2 className="capitalize text-center font-bold mx-auto text-white">
            {name}
          </h2>
        </footer>
      </div>
    </li>
  );
};

export default PokemonCard;
