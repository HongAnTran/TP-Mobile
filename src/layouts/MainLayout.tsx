import Header from '@/components/feature/Header'
import Footer from '@/components/feature/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className=' min-h-screen' >
            <Header />
            {children}
            <Footer />
        </main>
    )
}
