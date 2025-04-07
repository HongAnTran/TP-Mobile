import Header from '@/components/feature/headers/Header'
import Footer from '@/components/feature/Footer'
import CompareProduct from '@/components/feature/CompareProduct'
import ListStickyButton from '@/components/common/ListStickyButton'
import NavigationCategory from '@/components/feature/NavigationCategory'
import { ShopStoreProvider } from '@/providers/shop-store-provider'
import TabsBarMobile from '@/components/feature/TabsBarMobile'
import LoginDialog from '@/components/feature/login/LoginDialog'
import { AuthStoreProvider } from '@/providers/auth-store-provider'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthStoreProvider >
            <ShopStoreProvider>
                <main className=' bg-[#F5F5F7] min-h-screen flex flex-col scroll-smooth ' >
                    <Header />
                    <NavigationCategory />
                    <div className=' flex-1'>
                        {children}
                    </div>
                    <TabsBarMobile />
                    <Footer />
                    <CompareProduct />
                    <ListStickyButton />
                    <LoginDialog />

                </main>
            </ShopStoreProvider>
        </AuthStoreProvider>
    )
}
