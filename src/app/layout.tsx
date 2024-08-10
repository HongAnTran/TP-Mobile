import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react"
import { ReactQueryProvider } from "@/providers/react-query-provider";
import GoogleAnalytics from '@/components/GoogleAnalytics';
const inter = Montserrat({ subsets: ["vietnamese"] });
export const metadata: Metadata = {
  title: "TP MOBILE STORE",
  description: "TP Mobile store, bán iPad có tâm nhất Sài Gòn, bảo hành lâu nhất Hồ Chí Minh. Chúng tôi cung cấp các sản phẩm iPad chất lượng cao, dịch vụ khách hàng chu đáo và chế độ bảo hành tốt nhất để đảm bảo sự hài lòng của quý khách.",
  authors: [{ name: "TP Mobile", url: process.env.DOMAIN }],
  keywords: "iPad, TP Mobile, Sài Gòn, Hồ Chí Minh, mua iPad, bảo hành iPad, cửa hàng iPad",
  openGraph: {
    type: 'website',
    url: process.env.DOMAIN,
    title: "TP MOBILE STORE",
    description: "TP Mobile store, bán iPad có tâm nhất Sài Gòn, bảo hành lâu nhất Hồ Chí Minh. Chúng tôi cung cấp các sản phẩm iPad chất lượng cao, dịch vụ khách hàng chu đáo và chế độ bảo hành tốt nhất để đảm bảo sự hài lòng của quý khách.",
    // images: [
    //   {
    //     url: `/og-image.jpg`,
    //     width: 800,
    //     height: 600,
    //     alt: 'TP Mobile Store',
    //   }
    // ],
  },
  // twitter: {
  //   site: '@TPMobile',
  //   title: "TP MOBILE STORE",
  //   description: "TP Mobile store, bán iPad có tâm nhất Sài Gòn, bảo hành lâu nhất Hồ Chí Minh. Chúng tôi cung cấp các sản phẩm iPad chất lượng cao, dịch vụ khách hàng chu đáo và chế độ bảo hành tốt nhất để đảm bảo sự hài lòng của quý khách.",
  // },
  
  robots: "index, follow",
  
  // structuredData: {
  //   "@context": "https://schema.org",
  //   "@type": "Store",
  //   "name": "TP Mobile Store",
  //   "description": "TP Mobile store, bán iPad có tâm nhất Sài Gòn, bảo hành lâu nhất Hồ Chí Minh. Chúng tôi cung cấp các sản phẩm iPad chất lượng cao, dịch vụ khách hàng chu đáo và chế độ bảo hành tốt nhất để đảm bảo sự hài lòng của quý khách.",
  //   "url": process.env.DOMAIN,
  //   "logo": `${process.env.DOMAIN}/images/logo.png`,
  //   "image": `${process.env.DOMAIN}/images/og-image.jpg`,
  //   "sameAs": [
  //     "https://www.facebook.com/TPMobile",
  //     "https://www.instagram.com/TPMobile",
  //     "https://twitter.com/TPMobile"
  //   ],
  //   "address": {
  //     "@type": "PostalAddress",
  //     "streetAddress": "123 Đường ABC",
  //     "addressLocality": "Sài Gòn",
  //     "addressRegion": "Hồ Chí Minh",
  //     "postalCode": "700000",
  //     "addressCountry": "VN"
  //   },
  //   "contactPoint": {
  //     "@type": "ContactPoint",
  //     "telephone": "+84-123-456-789",
  //     "contactType": "Customer Service"
  //   }
  // }
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
