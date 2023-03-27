import CartList from "@/components/cart/CartList";
import OrderSummary from "@/components/cart/OrderSummary";
import { ShopLayout } from "@/components/layouts";

import React from "react";

const SummaryPage = () => {
  return (
    <ShopLayout
      title="Teslo Shop | Checkout summary"
      pageDescription="Checkout summary page"
    >
      <section>
        <h1 className="text-4xl font-bold mb-10">Summary</h1>
        <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-5 justify-center items-start">
          <article className="shadow-xl rounded-xl p-10">
            <CartList />
          </article>
          <article className="shadow-xl rounded-xl p-10">
            <OrderSummary />
          </article>
        </div>
      </section>
    </ShopLayout>
  );
};

export default SummaryPage;
