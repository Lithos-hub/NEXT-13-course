import MainLayout from "@/components/layouts/MainLayout";
import DarkLayout from "@/components/layouts/DarkLayout";

const AboutPage = () => {
  return (
    <>
      <h1>You are in About</h1>
    </>
  );
};

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default AboutPage;
