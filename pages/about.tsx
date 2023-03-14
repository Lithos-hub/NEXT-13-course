import React from "react";
import Link from "next/link";
import MainLayout from "@/components/layours/MainLayout";

const AboutPage = () => {
  return (
    <MainLayout>
      <h1>
        Go to <Link href="/">home</Link>
      </h1>
    </MainLayout>
  );
};

export default AboutPage;
