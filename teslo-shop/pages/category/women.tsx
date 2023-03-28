import { ShopLayout } from "@/components/layouts";
import ProductList from "@/components/products/ProductList";
import { IProduct } from "@/interfaces/Product";
import { useProducts } from "@/hooks/useProducts";
import { CircularProgress } from "@mui/material";
import CustomSnackbar from "@/components/ui/Snackbar";

export default function WomenPage() {
  const { products, isLoading, isError } = useProducts(
    "/products?gender=women"
  );

  return (
    <ShopLayout
      title="Teslo Shop - Women"
      pageDescription="Best Teslo products market"
    >
      {isError ? (
        <CustomSnackbar
          message="Something went wrong! Try it again"
          severity="error"
        />
      ) : (
        <>
          <h1 className="text-2xl font-bold">Women</h1>
          <h2>Products for women</h2>
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
