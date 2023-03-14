import MainLayout from "@/components/layouts/MainLayout";
import DarkLayout from "@/components/layouts/DarkLayout";

const PricingPage = () => {
  return (
    <>
      <h1>You are in Pricing</h1>
    </>
  );
};

PricingPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default PricingPage;
