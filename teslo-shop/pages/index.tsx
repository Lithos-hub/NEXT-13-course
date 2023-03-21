import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ShopLayout } from "@/components/layouts";
import { initialData } from "@/database/products";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import ProductList from "@/components/products/ProductList";

export default function HomePage() {
  return (
    <>
      <ShopLayout
        title="Teslo Shop - Home"
        pageDescription="Best Teslo products market"
      >
        <>
          <h1 className="text-2xl font-bold">Store</h1>
          <h2>All products</h2>

          <ProductList products={initialData.products as any} />
        </>
      </ShopLayout>
    </>
  );
}
