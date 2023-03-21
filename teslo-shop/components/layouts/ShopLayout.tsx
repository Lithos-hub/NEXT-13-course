import Head from "next/head";
import React, { FC } from "react";
import { Navbar, SideMenu } from "../ui";

interface Props {
  children: JSX.Element;
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

const ShopLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={title} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>
      <Navbar />
      <SideMenu />
      <main className="m-10 max-w-[90vw] mx-auto py-[5vh]">{children}</main>
      <footer></footer>
    </>
  );
};

export default ShopLayout;
