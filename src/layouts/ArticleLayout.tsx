import Footer from '@/components/feature/Footer'
import ListStickyButton from '@/components/common/ListStickyButton'
import HeaderMini from '@/components/feature/HeaderMini'
import NavigationCategory from '@/components/feature/NavigationCategory'

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className=' min-h-screen flex flex-col scroll-smooth' >
            <HeaderMini/>
            <NavigationCategory type="artice" />
            <div className=' flex-1'>
                {children}
            </div>
            <Footer />
            <ListStickyButton />
        </main>
    )
}
