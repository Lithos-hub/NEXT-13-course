import React from "react";
import ShopLayout from "@/components/layouts/ShopLayout";

const Error404 = () => {
  return (
    <ShopLayout title="Page not found" pageDescription="Incorrect route">
      <div className="w-full text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex gap-5">
          <div className="mx-auto flex flex-col md:flex-row items-center">
            <h1 className="font-roboto text-[200px] font-medium text-[#101010]">
              404 |
            </h1>
            <h1 className="font-roboto text-[50px] text-[#505050]">
              Page not found
            </h1>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

export default Error404;
