import { useState } from "react";
import { Button, Chip, Divider } from "@mui/material";
import { ProductSlideshow } from "@/components/products";
import { ItemCounter } from "@/components/ui";
import { SizeSelector } from "@/components/products";
import { ShopLayout } from "@/components/layouts";
import { IProduct, ISizes } from "@/interfaces";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { dbProducts } from "@/database";
import { ICartProduct } from "@/interfaces";
import { useDispatch } from "react-redux";
import { addProductToCart, updateCheckoutPrice } from "@/store/slices";

interface Props {
  product: IProduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<ISizes>("M");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    ...product,
    images: product.images[0],
    selectedSize,
    quantity,
  });

  const addProduct = () => {
    dispatch(addProductToCart(tempCartProduct));
    dispatch(updateCheckoutPrice());
  };

  const onSelectedSize = (size: ISizes) => {
    console.log("Setting size: ", size);
    setSelectedSize(size);
    setTempCartProduct({
      ...tempCartProduct,
      selectedSize: size,
    });
  };

  const onSelectedQuantity = (quantity: number) => {
    setQuantity(quantity);
    setTempCartProduct({
      ...tempCartProduct,
      quantity,
    });
  };
  return (
    <ShopLayout
      title={`Teslo Shop | ${product.title}`}
      pageDescription={product.description}
    >
      <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
        <div>
          <ProductSlideshow images={product.images} />
        </div>
        <div className="flex flex-col gap-5 shadow-xl p-10 rounded-xl">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <h1 className="text-base font-medium">${product.price}</h1>
          <Divider />

          {product.inStock === 0 ? (
            <Chip label="Out of stock" color="error" variant="outlined" />
          ) : (
            <div className="flex gap-5 items-center">
              <p>Quantity: </p>{" "}
              <ItemCounter
                max={product.inStock}
                quantity={quantity}
                onSelectedQuantity={onSelectedQuantity}
              />
              <Button
                color="primary"
                variant="text"
                fullWidth
                className="bg-blue-500 text-white hover:text-black rounded-full"
                onClick={addProduct}
              >
                Add to cart
              </Button>
            </div>
          )}

          <SizeSelector
            selectedSize={selectedSize}
            sizes={["XS", "S", "M", "L", "XL", "XXL", "XXXL"]}
            onSelection={(selection: ISizes) => onSelectedSize(selection)}
          />
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
