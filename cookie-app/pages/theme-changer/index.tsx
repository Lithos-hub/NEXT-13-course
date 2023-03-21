import React, { FC, useState } from "react";
import Layout from "@/components/layouts";
import Cookies from "js-cookie";
import axios from "axios";

import { GetServerSideProps } from "next";

interface Props {
  theme: "light" | "dark";
}

const ThemeChanger: FC<Props> = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const onThemeChange = (mode: "light" | "dark") => {
    setCurrentTheme(mode);
    Cookies.set("theme", currentTheme);
  };

  Cookies.set("theme", currentTheme);

  const onSubmit = async () => {
    const { data } = await axios.get("/api/hello");
    console.log(data);
  };

  return (
    <Layout>
      <div className="bg-blue-900 bg-opacity-50 shadow-xl p-5 rounded-xl">
        <h3 className="text-4xl font-bold text-white">Select a theme</h3>
        <hr className="my-5" />
        <div className="flex justify-around gap-5">
          <div
            className={`p-5 px-10 rounded-full border ${
              currentTheme === "light" && "bg-white text-black"
            }  hover:scale-105 duration-200 cursor-pointer`}
            onClick={() => onThemeChange("light")}
          >
            Light theme ☀️
          </div>
          <div
            className={`p-5 px-10 rounded-full border ${
              currentTheme === "dark" && "bg-white text-black"
            } hover:scale-105 duration-200 cursor-pointer`}
            onClick={() => onThemeChange("dark")}
          >
            Dark theme 🌙
          </div>
        </div>
        <button
          className="p-2 border rounded-full px-5 m-5 bg-emerald-500 text-white"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </Layout>
  );
};

export default ThemeChanger;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = "dark" } = req.cookies;

  const validThemes = ["light", "dark"];

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : "dark",
    },
  };
};
