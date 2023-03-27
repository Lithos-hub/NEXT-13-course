import React, { useState } from "react";
import { Button, Divider } from "@mui/material";
import { ProductSlideshow } from "@/components/products";
import { ItemCounter } from "@/components/ui";
import { SizeSelector } from "@/components/products";
import { ShopLayout } from "@/components/layouts";
import { IProduct, ISizes } from "@/interfaces";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { dbProducts } from "@/database";

interface Props {
  product: IProduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("M");
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
        <div>
          <ProductSlideshow images={product.images} />
        </div>
        <div className="flex flex-col gap-5 shadow-xl p-10 rounded-xl">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <h1 className="text-base font-medium">${product.price}</h1>
          <Divider />
          <div className="flex gap-5 items-center">
            <p>Quantity: </p> <ItemCounter />
            <Button
              color="primary"
              variant="text"
              fullWidth
              className="bg-blue-500 text-white hover:text-black rounded-full"
            >
              Add to cart
            </Button>
          </div>
          <SizeSelector
            selectedSize={selectedSize}
            sizes={["XS", "S", "M", "L", "XL", "XXL", "XXXL"]}
            onSelection={(selection: ISizes) => setSelectedSize(selection)}
          />
          {/* <Chip label="No available" color="error" variant="outlined" /> */}
          <strong>Description</strong>
          <small className="text-justify">{product.description}</small>
        </div>
      </div>
    </ShopLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const productSlugs = await dbProducts.getAllProductSlugs();

  return {
    paths: productSlugs.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params as { slug: string };
  const product = await dbProducts.getProductBySlug(slug);

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default ProductPage;
