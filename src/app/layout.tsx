import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react"
import { ReactQueryProvider } from "@/providers/react-query-provider";
import GoogleAnalytics from '@/components/GoogleAnalytics';
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "TP MOBILE STORE",
  description: "TP Mobile store, bán ipad có tâm nhứt Sài Gòn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics/>
      <body className={inter.className}>
        <SessionProvider>
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
