import React from "react";
import CartList from "@/components/cart/CartList";
import OrderSummary from "@/components/cart/OrderSummary";
import { ShopLayout } from "@/components/layouts";

const CartPage = () => {
  return (
    <ShopLayout title="Teslo Shop | Cart" pageDescription="Shopping cart page">
      <section className="w-full h-full grid grid-cols-2 gap-5 justify-center items-start">
        <div className="shadow-xl rounded-xl p-10">
          <CartList />
        </div>
        <div className="shadow-xl rounded-xl p-10">
          <OrderSummary />
        </div>
      </section>
    </ShopLayout>
  );
};

export default CartPage;
