import CartList from "@/components/cart/CartList";
import OrderSummary from "@/components/cart/OrderSummary";
import { ShopLayout } from "@/components/layouts";
import { CreditCardOffOutlined, CreditScore } from "@mui/icons-material";
import { Chip } from "@mui/material";

import React from "react";

const OrderPage = () => {
  return (
    <ShopLayout
      title="Teslo Shop | Checkout summary"
      pageDescription="Checkout summary page"
    >
      <section>
        <h1 className="text-4xl font-bold mb-10">Order: TS-23040234</h1>

        {/* <Chip
          label="Pending"
          variant="outlined"
          color="error"
          className="px-5"
          icon={<CreditCardOffOutlined />}
        /> */}
        <Chip
          label="Payed"
          variant="outlined"
          color="success"
          className="px-5"
          icon={<CreditScore />}
        />
        <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-5 justify-center items-start">
          <article className="shadow-xl rounded-xl p-10">
            <CartList />
          </article>
          <article className="shadow-xl rounded-xl p-10">
            <OrderSummary />
            <Chip
              label="Payed"
              variant="outlined"
              color="success"
              className="px-5"
              icon={<CreditScore />}
            />
          </article>
        </div>
      </section>
    </ShopLayout>
  );
};

export default OrderPage;
