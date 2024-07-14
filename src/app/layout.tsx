import type { Metadata } from "next";
import { Inter , Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react"
import { ReactQueryProvider } from "@/providers/react-query-provider";
import GoogleAnalytics from '@/components/GoogleAnalytics';
const inter = Montserrat({ subsets: ["vietnamese"] });
export const metadata: Metadata = {
  title: "TP MOBILE STORE",
  description: "TP Mobile store, bán ipad có tâm nhứt Sài Gòn, Bảo hành lâu nhất Hồ Chí Minh",
  authors :[{name : "TP Mobile" , url : process.env.DOMAIN}],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.ico" sizes="any" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
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
