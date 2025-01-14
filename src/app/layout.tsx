import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react"
import { ReactQueryProvider } from "@/providers/react-query-provider";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { WebSite, WithContext } from "schema-dts";
const inter = Inter({ subsets: ["vietnamese"] });



function generateStrucDataWeb(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TP Mobile", // Replace with your website's name
    url: process.env.DOMAIN, // Replace with your website's URL
    // potentialAction: {
    //   "@type": "SearchAction",
    //   target: `${process.env.DOMAIN}/tim-kiem?keyword={ipad}`,
    //   "query": "required name=ipad",

    // },
    description: "TP Mobile Store, bán iPad có tâm nhất Sài Gòn, bảo hành lâu nhất Hồ Chí Minh. Chuyên cung cấp iPad chính hãng, chất lượng cao với dịch vụ tận tâm và chế độ bảo hành dài hạn, TP Mobile cam kết mang đến trải nghiệm tốt nhất cho khách hàng.",
  };
}
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
        url: `https://firebasestorage.googleapis.com/v0/b/tpmobile-9e980.appspot.com/o/og-image.jpg?alt=media&token=8b8ae471-16dd-43d4-b029-fcc724033328`,
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
        url: `https://firebasestorage.googleapis.com/v0/b/tpmobile-9e980.appspot.com/o/og-image.jpg?alt=media&token=8b8ae471-16dd-43d4-b029-fcc724033328`,
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
  const jsonLd = generateStrucDataWeb();

  return (
    <html lang="vi">

      <link rel="icon" href="/icon.ico" sizes="any" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <GoogleAnalytics />
      {/* <meta name="google-site-verification" content="ooNv-cj6ianI3N7tJxrulG6ihHMwq092YA0XfTxksuQ" /> */}
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
