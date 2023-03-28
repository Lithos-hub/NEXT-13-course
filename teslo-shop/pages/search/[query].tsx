import { ShopLayout } from "@/components/layouts";
import ProductList from "@/components/products/ProductList";
import { IProduct } from "@/interfaces/Product";

import { GetServerSideProps } from "next";
import { dbProducts } from "@/database";
import { FC } from "react";

interface Props {
  products: IProduct[] | [];
  query: string;
  noProductsFound: boolean;
}

export const SearchPage: FC<Props> = ({ products, query, noProductsFound }) => {
  return (
    <ShopLayout
      title="Teslo Shop - Search products"
      pageDescription="Teslo Shop search page"
    >
      <>
        <h1 className="text-2xl font-bold">Search</h1>
        <h2>
          Results for: <span className="font-bold capitalize">{query}</span>
        </h2>
        {noProductsFound && (
          <div className="my-5">
            <p className="text-red-500">
              No products found with the term{" "}
              <strong className="capitalize">{query}</strong>
            </p>
            <p>Estos son algunos productos que pueden interesarle.</p>
          </div>
        )}
        <ProductList products={products} />
      </>
    </ShopLayout>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string };

  if (!query.length) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  let products = await dbProducts.getProductsByTerm(query);
  const noProductsFound = products.length === 0;
  if (!products.length) {
    products = await dbProducts.getAllProducts();
  }

  return {
    props: {
      products,
      query,
      noProductsFound,
    },
  };
};
