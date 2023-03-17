import Head from "next/head";
import React, { FC } from "react";
import Navbar from "../UI/Navbar";
import { Sidebar } from "../UI";

interface Props {
  children: JSX.Element;
  title: string;
}

const Layout: FC<Props> = ({ children, title = "Jira Clone" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Sidebar />
      <div className="p-10 shadow-xl bg-[#202020] m-5 rounded-xl">
        {children}
      </div>
    </>
  );
};

export default Layout;
