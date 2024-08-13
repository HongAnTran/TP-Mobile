import Footer from "@/components/feature/Footer";
import HeaderMini from "@/components/feature/headers/HeaderMini";

export default function MiniLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <HeaderMini />
            <div className=" bg-[#f7f7ff]">
                {children}
            </div>
            <Footer />
        </main>
    )
}
