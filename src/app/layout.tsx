import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import SessionProvider from "@/providers/SessionProvider";
const inter = Inter({ subsets: ["vietnamese"] });


export const metadata: Metadata = {
  title: "TP MOBILE STORE",
  description: "TP Mobile Store, bán iPad có tâm nhất Sài Gòn, bảo hành lâu nhất Hồ Chí Minh. Chuyên cung cấp iPad chính hãng, chất lượng cao với dịch vụ tận tâm và chế độ bảo hành dài hạn, TP Mobile cam kết mang đến trải nghiệm tốt nhất cho khách hàng.",
  authors: [{ name: "TP Mobile", url: process.env.DOMAIN }],
  keywords: "iPad, TP Mobile, mua iPad, bảo hành iPad, cửa hàng iPad , ipad like new , ipad cũ, ipad cu ,ipad pro",
  openGraph: {
    type: 'website',
    url: process.env.DOMAIN,
    title: "TP MOBILE STORE",
    description: "TP Mobile Store, bán iPad có tâm nhất Sài Gòn, bảo hành lâu nhất Hồ Chí Minh. Chuyên cung cấp iPad chính hãng, chất lượng cao với dịch vụ tận tâm và chế độ bảo hành dài hạn, TP Mobile cam kết mang đến trải nghiệm tốt nhất cho khách hàng.",
    images: [
      {
        url: `https://cdn.tpmobile.com.vn/image/upload/v1742969820/tpmobile-images-public/chqwmqybyrjm6ego88k3.jpg`,
        width: 800,
        height: 600,
        alt: 'TP Mobile Store',
      }
    ],
  },
  twitter: {
    site: '@TPMobile',
    title: "TP MOBILE STORE",
    description: "TP Mobile Store, bán iPad có tâm nhất Sài Gòn, bảo hành lâu nhất Hồ Chí Minh. Chuyên cung cấp iPad chính hãng, chất lượng cao với dịch vụ tận tâm và chế độ bảo hành dài hạn, TP Mobile cam kết mang đến trải nghiệm tốt nhất cho khách hàng.",
    images: [
      {
        url: `https://cdn.tpmobile.com.vn/image/upload/v1742969820/tpmobile-images-public/chqwmqybyrjm6ego88k3.jpg`,
        width: 800,
        height: 600,
        alt: 'TP Mobile Store',
      }
    ],
  },
  alternates: {
    canonical: process.env.DOMAIN
  }
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="vi">

      <link rel="icon" href="/icon.ico" sizes="any" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <GoogleAnalytics />
      <meta name="google-site-verification" content="ooNv-cj6ianI3N7tJxrulG6ihHMwq092YA0XfTxksuQ" />
      <body className={inter.className}>
        <SessionProvider>
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
        </SessionProvider>
        <Toaster />

        <noscript>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5B3VRRDF"
height="0" width="0" style={{
  display: 'none',
  visibility: 'hidden'
}}></iframe></noscript>
        </noscript>
      </body>
    </html>
  );
}
