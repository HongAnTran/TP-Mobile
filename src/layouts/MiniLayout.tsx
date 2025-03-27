import Footer from "@/components/feature/Footer";
import HeaderMini from "@/components/feature/headers/HeaderMini";

export default function MiniLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className=" min-h-screen ">
            <HeaderMini />
            <div className="  container">
                {children}
            </div>
            <Footer />
        </main>
    )
}
