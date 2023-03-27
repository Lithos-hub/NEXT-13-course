import { ShopLayout } from "@/components/layouts";
import { RemoveShoppingCartRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const EmptyCartPage = () => {
  return (
    <ShopLayout
      title="Teslo Shop | Cart (Empty)"
      pageDescription="Shopping cart page"
    >
      <div className="w-full h-[75vh] flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 text-center">
          <RemoveShoppingCartRounded className="text-[200px] mx-auto" />
          <h2 className="text-5xl">You have not items in the cart yet</h2>
          <div className="mt-20">
            <Link href="/">
              <Button className="bg-blue-500 text-white p-2 hover:text-black">
                I want to buy something
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

export default EmptyCartPage;
