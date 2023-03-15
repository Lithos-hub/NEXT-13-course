import MainLayout from "@/components/layouts/MainLayout";
import DarkLayout from "@/components/layouts/DarkLayout";

const ContactPage = () => {
  return (
    <>
      <h1>You are in Contact</h1>
    </>
  );
};

ContactPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default ContactPage;
