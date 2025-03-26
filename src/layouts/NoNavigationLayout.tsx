import Header from '@/components/feature/headers/Header'
import Footer from '@/components/feature/Footer'
import ListStickyButton from '@/components/common/ListStickyButton'
import { ShopStoreProvider } from '@/providers/shop-store-provider'
import { AuthStoreProvider } from '@/providers/auth-store-provider'

export default function NoNavigationLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthStoreProvider>
            <ShopStoreProvider>
                <main className=' min-h-screen flex flex-col scroll-smooth' >
                    <Header />
                    <div className=' flex-1'>
                        {children}
                    </div>
                    <Footer />
                    <ListStickyButton />
                </main>
            </ShopStoreProvider>
        </AuthStoreProvider>
    )
}
