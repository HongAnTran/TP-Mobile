import NavLink from "@/components/common/NavLink";
import NoNavigationLayout from "@/layouts/NoNavigationLayout";
import routes from "@/routes";

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
      link: routes.endow,
      text: "Chính sách ưu đãi"
    },
    {
      link: routes.guaranteePolicy,
      text: "Chính sách bảo hành"
    },
    {
      link: routes.changePolicy,
      text: "Chính sách đổi trả"
    },
    {
      link: routes.installmentPolicy,
      text: "Chính sách trả góp"
    },
  ]
  return <div className="content-banner relative  bg-primary min-h-[350px] lg:min-h-[400px] z-0   ">
    <div className="content-menu container absolute top-[60px] left-[50%] translate-x-[-50%] text-center color-white">
      <p className="title_item font-bold text-xl lg:text-4xl mb-[40px] uppercase  text-white" >Các chính sách tại TP Mobile</p>
      <div className="bottom-nav" id="bottom-nav3">
        <ul className=' lg:flex lg:flex-wrap  lg:items-center grid grid-cols-2  lg:justify-center gap-2 lg:gap-[30px] m-0'>
          {menus.map((menu) => {
            return <li key={menu.link} className=" w-full lg:w-auto">
              <NavLink activeClassName='bg-white  text-[#EF6837]' className=' w-full text-xs p-3  justify-center lg:px-6 lg:py-4  bg-white/20 rounded-md lg:rounded-xl  font-bold text-white inline-flex  hover:text-[#EF6837] hover:bg-white' absolute href={menu.link}>		{menu.text}</NavLink>
            </li>
          })}


        </ul>
      </div>
    </div>
  </div>
}