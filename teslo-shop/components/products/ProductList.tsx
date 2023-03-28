import { IProduct } from "@/interfaces";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import { FC } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

interface Props {
  products: IProduct[];
}

const ProductList: FC<Props> = ({ products }) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-5">
      {products.map((product) => (
        <Link key={product.slug} href={`/product/${product.slug}`}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
