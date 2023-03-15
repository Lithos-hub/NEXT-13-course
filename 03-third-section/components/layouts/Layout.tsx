import Head from "next/head";
import React, { FC } from "react";
import NavbarUI from "../UI/NavbarUI";

interface Props {
  children: JSX.Element;
  title?: string;
}

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokémon App"}</title>
        <meta name="author" content="Carlos Segura" />
        <meta
          name="description"
          content={`Initial page of PokéAPP - ${title}`}
        />
        <meta
          name="keywords"
          content={`pokemon, pokedex, nintendo, app - ${title}`}
        />
      </Head>

      <NavbarUI />

      <main className="m-5 p-5 rounded-xl bg-blue-500 bg-opacity-20">
        {children}
      </main>
    </>
  );
};

export default Layout;
