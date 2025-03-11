import NavLink from "@/components/common/NavLink";
import NoNavigationLayout from "@/layouts/NoNavigationLayout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NoNavigationLayout>
      <div className=' bg-[#f5f5f7]'>
        <SessionHeaderPage />
        {children}
      </div>
    </NoNavigationLayout>
  );
}


function SessionHeaderPage() {
  const menus = [
    {
      link: "/chinh-sach-uu-dai",
      text: "Chính sách ưu đãi"
    },
    {
      link: "/chinh-sach-bao-hanh",
      text: "Chính sách bảo hành"
    },
    {
      link: "/chinh-sach-doi-tra",
      text: "Chính sách đổi trả"
    },
  ]
  return <div className="content-banner relative  bg-primary min-h-[400px] z-0   ">
    <div className="content-menu container absolute top-[60px] left-[50%] translate-x-[-50%] text-center color-white">
      <p className="title_item font-bold text-4xl mb-[40px] uppercase  text-white" >Các chính sách tại TP Mobile</p>
      <div className="bottom-nav" id="bottom-nav3">
        <ul className=' flex  items-center justify-center gap-[30px] m-0'>
          {menus.map((menu) => {
            return <li key={menu.link}>
              <NavLink activeClassName='bg-white  text-[#EF6837]' className='  px-6 py-4  bg-white/20 rounded-xl  font-bold text-white inline-flex  hover:text-[#EF6837] hover:bg-white' absolute href={menu.link}>		{menu.text}</NavLink>
            </li>
          })}


        </ul>
      </div>
    </div>
  </div>
}