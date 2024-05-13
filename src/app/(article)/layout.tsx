import ArticleLayout from "@/layouts/ArticleLayout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ArticleLayout>
      {children}
    </ArticleLayout>
  );
}
