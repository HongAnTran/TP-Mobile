import NoNavigationLayout from "@/layouts/NoNavigationLayout";

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
