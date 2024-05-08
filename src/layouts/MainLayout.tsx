import Header from '@/components/feature/Header'
import Footer from '@/components/feature/Footer'
import CompareProduct from '@/components/feature/CompareProduct'
export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className=' min-h-screen flex flex-col scroll-smooth' >
            <Header />
         
            <div className=' flex-1'>
                {children}
            </div>
            <Footer />
            <CompareProduct />
        </main>
    )
}
