import { Button, Divider } from "@mui/material";
import Link from "next/link";
import React from "react";

const OrderSummary = () => {
  return (
    <>
      <h2 className="text-xl">Order summary (3 items)</h2>
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
        <p className="text-xl">3 items</p>
      </div>

      <div className="flex justify-between">
        <h3 className="font-bold text-lg">Subtotal: </h3>
        <p className="text-xl">$205.32</p>
      </div>

      <div className="flex justify-between">
        <h3 className="font-bold text-lg">TAX: </h3>
        <p className="text-xl">$32.29</p>
      </div>

      <div className="mt-5 flex justify-between font-extrabold">
        <h3 className="text-xl">TOTAL:</h3>
        <h3 className="text-3xl">$234.45</h3>
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
