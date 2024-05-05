import CompareProductProvider from "@/components/providers/CompareProductProvider";
import MainLayout from "@/layouts/MainLayout";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CompareProductProvider >
      <MainLayout>
        {children}
      </MainLayout>
    </CompareProductProvider>
  );
}
