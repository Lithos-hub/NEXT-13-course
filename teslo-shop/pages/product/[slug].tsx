import { ShopLayout } from "@/components/layouts";
import React from "react";
import { initialData } from "../../database/products";
import { Button, Chip, Divider } from "@mui/material";
import { ProductSlideshow } from "@/components/products";

const product = initialData.products[0];

const ProductPage = () => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
        <div>
          <ProductSlideshow images={product.images} />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <h1 className="text-base font-medium">${product.price}</h1>
          <Divider />
          <div className="flex gap-5 items-center">
            <p>Quantity: </p>{" "}
            <strong className="text-xl p-2 border px-10">5</strong>
          </div>
          <Button color="secondary" variant="outlined" className="circular-btn">
            Add to cart
          </Button>
          {/* <Chip label="No available" color="error" variant="outlined" /> */}
          <strong>Description</strong>
          <small className="text-justify">{product.description}</small>
        </div>
      </div>
    </ShopLayout>
  );
};

export default ProductPage;
