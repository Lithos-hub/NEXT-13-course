import { Button, CardMedia } from "@mui/material";
import React, { FC } from "react";
import { ItemCounter } from "../ui";
import { ICartProduct } from "@/interfaces";
import { useDispatch } from "react-redux";
import {
  removeProductFromCart,
  updateCartProduct,
  updateCheckoutPrice,
} from "@/store/slices";

type Props = {
  products: ICartProduct[];
};

const CartList: FC<Props> = ({ products }) => {
  const dispatch = useDispatch();
  const removeProduct = (product: ICartProduct) => {
    dispatch(removeProductFromCart(product));
    dispatch(updateCheckoutPrice());
  };

  const onSelectedQuantity = (quantity: number, productId: string) => {
    dispatch(updateCartProduct({ quantity, productId }));
    dispatch(updateCheckoutPrice());
  };

  return (
    <ul className="flex flex-col gap-5">
      {products.map((product, i) => (
        <li key={i} className="shadow-xl grid grid-cols-3">
          <div>
            <CardMedia
              alt={product.title}
              src={`/products/${product.images}`}
              component="img"
              className="w-[200px]"
            />
          </div>
          <div className="py-5">
            <h3>{product.title}</h3>
            <h5>
              Size: <strong>{product.selectedSize}</strong>
            </h5>
            Quantity:{" "}
            <ItemCounter
              productId={product._id}
              max={product.inStock as number}
              quantity={product.quantity}
              onSelectedQuantity={(quantity, productId) => {
                onSelectedQuantity(quantity, productId as string);
              }}
            />
          </div>
          <div className="p-5 flex flex-col gap-2 ml-auto text-center">
            <strong className="text-xl">${product.price}</strong>
            <Button
              className="shadow-xl"
              onClick={() => removeProduct(product)}
            >
              Remove
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartList;
