import { RootState } from "@/store";
import { Button, Divider } from "@mui/material";
import Link from "next/link";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const { cart, subtotal, tax, total } = useSelector(
    (state: RootState) => state.CartStore
  );
  const cartLength = useMemo(() => cart.length, [cart.length]);

  // const SUBTOTAL = useMemo(
  //   () => cart.reduce((curr, acc) => curr + acc.price, 0),
  //   [cart]
  // );
  // const TAX = useMemo(() => SUBTOTAL * 0.21, [SUBTOTAL]);
  // const TOTAL = useMemo(() => SUBTOTAL + TAX, [TAX, SUBTOTAL]);

  return (
    <>
      <h2 className="text-xl">
        Order summary ({cartLength} {cartLength === 1 ? "item" : "items"})
      </h2>
      <Divider />
      <div className="flex justify-between my-5">
        <h3 className="font-bold text-xl">Address: </h3>
        <p className="text-right underline ">
          <Link href="/checkout/address">Edit</Link>
        </p>
      </div>
      <p>John Doe</p>
      <p>123 Fake Street</p>
      <p>FakeVille, HYA 234</p>
      <p>Spain</p>
      <p>+34 666 66 66 66</p>

      <Divider className="my-2" />

      <div className="mt-5 flex justify-between">
        <h3 className="font-bold text-lg">Products: </h3>
        <p className="text-xl">
          {cartLength} {cartLength === 1 ? "item" : "items"}
        </p>
      </div>

      <div className="flex justify-between">
        <h3 className="font-bold text-lg">Subtotal: </h3>
        <p className="text-xl">${subtotal}</p>
      </div>

      <div className="flex justify-between">
        <h3 className="font-bold text-lg">TAX: </h3>
        <p className="text-xl">${tax}</p>
      </div>

      <div className="mt-5 flex justify-between font-extrabold">
        <h3 className="text-xl">TOTAL:</h3>
        <h3 className="text-3xl">${total}</h3>
      </div>
      <Button
        className="bg-blue-500 text-white hover:text-black rounded-full mt-5"
        fullWidth
      >
        Checkout
      </Button>
    </>
  );
};

export default OrderSummary;
