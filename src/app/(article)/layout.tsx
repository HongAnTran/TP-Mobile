// import ArticleLayout from "@/layouts/ArticleLayout";
import MainLayout from "@/layouts/MainLayout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout>
      <div className="bg-[#f5f5f7]">

        <div className=" container  py-8 ">
          {children}
        </div>
      </div>
    </MainLayout>
  );
}
