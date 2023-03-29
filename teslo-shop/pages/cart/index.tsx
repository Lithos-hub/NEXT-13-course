import React from "react";
import CartList from "@/components/cart/CartList";
import OrderSummary from "@/components/cart/OrderSummary";
import { ShopLayout } from "@/components/layouts";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import EmptyCart from "@/components/cart/EmptyCart";

const CartPage = () => {
  const { cart } = useSelector((state: RootState) => state.CartStore);
  if (!cart.length) {
    return (
      <>
        <ShopLayout
          title="Teslo Shop | Cart"
          pageDescription="Shopping cart page"
        >
          <EmptyCart />
        </ShopLayout>
      </>
    );
  }
  return (
    <ShopLayout title="Teslo Shop | Cart" pageDescription="Shopping cart page">
      <section className="w-full h-full flex flex-col md:grid md:grid-cols-2 gap-5 justify-center items-start">
        <div className="shadow-xl rounded-xl p-10">
          <CartList products={cart} />
        </div>
        <div className="shadow-xl rounded-xl p-10 w-full">
          <OrderSummary />
        </div>
      </section>
    </ShopLayout>
  );
};

export default CartPage;
