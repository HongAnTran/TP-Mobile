import Header from '@/components/feature/Header'
import Footer from '@/components/feature/Footer'
import NavigationCategory from '@/components/feature/NavigationCategory'
import { TooltipProvider } from '@/components/ui/tooltip'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className=' min-h-screen' >
            <Header />
            <NavigationCategory />
            {children}
            <Footer />
        </main>
    )
}
