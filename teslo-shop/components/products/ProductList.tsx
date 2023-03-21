import { IProduct } from "@/interfaces";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import { FC } from "react";
import ProductCard from "./ProductCard";

interface Props {
  products: IProduct[];
}

const ProductList: FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductList;
