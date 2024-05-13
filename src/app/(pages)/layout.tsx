import ArticleLayout from "@/layouts/ArticleLayout";
import NoNavigationLayout from "@/layouts/NoNavigationLayout";
import { ShopStoreProvider } from "@/providers/shop-store-provider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <NoNavigationLayout>
        {children}
      </NoNavigationLayout>
  );
}
