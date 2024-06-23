import Footer from '@/components/feature/Footer'
import ListStickyButton from '@/components/common/ListStickyButton'
import HeaderArtice from '@/components/feature/HeaderArtice'
import NavigationCategoryArticle from '@/components/feature/NavigationCategoryArticle'

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className=' min-h-screen flex flex-col scroll-smooth bg-[#f7f7ff]' >
            <HeaderArtice />
            <NavigationCategoryArticle />
            <div className=' flex-1 container py-8 '>
                {children}
            </div>
            <Footer />
            <ListStickyButton />
        </main>
    )
}
