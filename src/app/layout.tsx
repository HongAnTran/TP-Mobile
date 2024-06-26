import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react"
import { ReactQueryProvider } from "@/providers/react-query-provider";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Head from "next/head";
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
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-site-verification" content="ooNv-cj6ianI3N7tJxrulG6ihHMwq092YA0XfTxksuQ" />
      </Head>
      <GoogleAnalytics />
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
