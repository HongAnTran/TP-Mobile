// import ArticleLayout from "@/layouts/ArticleLayout";
import MainLayout from "@/layouts/MainLayout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout> 
      <div className=" container  py-8 ">
        {children}
      </div>
    </MainLayout>
  );
}
