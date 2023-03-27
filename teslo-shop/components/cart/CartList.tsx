import { initialData } from "@/database/products";
import { Button, CardMedia, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import { ItemCounter } from "../ui";
import { Delete } from "@mui/icons-material";

type Props = {};

const products = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
];

const CartList = (props: Props) => {
  return (
    <ul className="flex flex-col gap-5">
      {products.map((product, i) => (
        <li key={i} className="shadow-xl grid grid-cols-3">
          <div>
            <CardMedia
              alt={product.title}
              src={`/products/${product.images[0]}`}
              component="img"
              className="w-[200px]"
            />
          </div>
          <div className="py-5">
            <h3>{product.title}</h3>
            <h5>
              Size: <strong>M</strong>
            </h5>
            Quantity: <ItemCounter />
          </div>
          <div className="p-5 flex flex-col gap-2 ml-auto text-center">
            <strong className="text-xl">${product.price}</strong>
            <Button className="shadow-xl">Remove</Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartList;
