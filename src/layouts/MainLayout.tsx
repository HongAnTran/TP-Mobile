import Header from '@/components/feature/Header'
import Footer from '@/components/feature/Footer'
import NavigationCategory from '@/components/feature/NavigationCategory'
import { TooltipProvider } from '@/components/ui/tooltip'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className=' min-h-screen flex flex-col scroll-smooth' >
            <Header />
         
            <div className=' flex-1'>
                {children}
            </div>
            <Footer />
        </main>
    )
}