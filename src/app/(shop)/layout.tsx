import CompareProductProvider from "@/components/providers/CompareProductProvider";
import WishListProvider from "@/components/providers/WishListProvider";
import MainLayout from "@/layouts/MainLayout";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CompareProductProvider >
      <WishListProvider>
        <MainLayout>
          {children}
        </MainLayout>
      </WishListProvider>
    </CompareProductProvider>
  );
}
