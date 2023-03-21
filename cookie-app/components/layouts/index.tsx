import Head from "next/head";
import React, { FC } from "react";
import Navbar from "../UI/Navbar";

const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Title</title>
      </Head>

      <Navbar />

      <main className="my-[5vh] mx-[10vw]">{children}</main>
    </>
  );
};

export default Layout;
