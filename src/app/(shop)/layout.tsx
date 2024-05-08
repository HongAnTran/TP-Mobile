
import MainLayout from "@/layouts/MainLayout";
import { ShopStoreProvider } from '@/providers/shop-store-provider'
export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ShopStoreProvider>
      <MainLayout>
        {children}
      </MainLayout>
    </ShopStoreProvider>

  );
}
