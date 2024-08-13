import Header from '@/components/feature/headers/Header'
import Footer from '@/components/feature/Footer'
import CompareProduct from '@/components/feature/CompareProduct'
import ListStickyButton from '@/components/common/ListStickyButton'
import NavigationCategory from '@/components/feature/NavigationCategory'
import { ShopStoreProvider } from '@/providers/shop-store-provider'
import TabsBarMobile from '@/components/feature/TabsBarMobile'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <ShopStoreProvider>
            <main className=' min-h-screen flex flex-col scroll-smooth ' >
                <Header />
                <NavigationCategory  />
                <div className=' flex-1'>
                    {children}
                </div>
                <TabsBarMobile />
                <Footer />
                <CompareProduct />
                <ListStickyButton />
            </main>
        </ShopStoreProvider>
    )
}
