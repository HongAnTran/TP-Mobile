import Header from '@/components/feature/Header'
import Footer from '@/components/feature/Footer'
import BannerHeader from '@/components/feature/BannerHeader'
import NavigationCategory from '@/components/feature/NavigationCategory'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className=' min-h-screen' >
            {/* <BannerHeader /> */}
            <Header />
            <NavigationCategory />
            {children}
            <Footer />
        </main>
    )
}
