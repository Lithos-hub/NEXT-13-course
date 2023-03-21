import "@/styles/globals.css";
import Cookies from "js-cookie";
import type { AppContext, AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "dark";
    setCurrentTheme(cookieTheme as "dark" | "light");
    if (cookieTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [currentTheme]);

  return <Component {...pageProps} />;
}

// App.getInitialProps = async (appContext: AppContext) => {
//   const { theme } = appContext.ctx.req
//     ? appContext.ctx.req.cookies
//     : { theme: "dark " };
//   const validThemes = ["light", "dark"];

//   return {
//     theme: validThemes.includes(theme) ? theme : "dark",
//   };
// };
