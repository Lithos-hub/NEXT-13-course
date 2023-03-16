import Head from "next/head";
import React, { FC } from "react";
import NavbarUI from "../UI/NavbarUI";

interface Props {
  children: JSX.Element;
  title?: string;
}

const origin = typeof window !== "undefined" && window.location.origin;

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
        <meta
          property="og:title"
          content={`Info about the Pokémon: ${title}`}
        />
        <meta
          property="og:description"
          content={`Page about the information of the Pokémon ${title} `}
        />
        <meta property="og:image" content={`${origin}/logo.png`} />
      </Head>

      <NavbarUI />

      <main className="m-5 p-5 rounded-xl bg-blue-500 bg-opacity-20">
        {children}
      </main>
    </>
  );
};

export default Layout;
