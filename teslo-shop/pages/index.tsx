import { ShopLayout } from "@/components/layouts";
import ProductList from "@/components/products/ProductList";
import { IProduct } from "@/interfaces/Product";
import { useProducts } from "@/hooks/useProducts";
import { CircularProgress } from "@mui/material";
import CustomSnackbar from "@/components/ui/Snackbar";

export default function HomePage() {
  const { products, isLoading, isError } = useProducts("/products");

  return (
    <ShopLayout
      title="Teslo Shop - Home"
      pageDescription="Best Teslo products market"
    >
      {isError ? (
        <CustomSnackbar
          message="Something went wrong! Try it again"
          severity="error"
        />
      ) : (
        <>
          <h1 className="text-2xl font-bold">Store</h1>
          <h2>All products</h2>
          {isLoading ? (
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <CircularProgress />
            </div>
          ) : (
            <ProductList products={products as IProduct[]} />
          )}
        </>
      )}
    </ShopLayout>
  );
}
