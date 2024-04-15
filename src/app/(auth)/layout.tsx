
import MiniLayout from "@/layouts/MiniLayout";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MiniLayout>
      {children}
    </MiniLayout>
  );
}
