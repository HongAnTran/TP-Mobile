// layouts/CustomerAccountLayout.jsx
import NavLink from "@/components/common/NavLink";
import NoNavigationLayout from "@/layouts/NoNavigationLayout";
import { cn } from "@/lib/utils"; // Utility function từ ShadUI để kết hợp classNames
import { privateRoutes } from "@/routes";
import { ExitIcon } from "@radix-ui/react-icons";
import LogoutItem from "./tai-khoan/don-hang/_components/LogoutItem";

export default function CustomerAccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Menu items cho sidebar
  const sidebarItems = [
    { title: "Tổng quan", href: privateRoutes.account },
    { title: "Đơn hàng", href: privateRoutes.accountOrders },
    // { title: "Địa chỉ", href:privateRoutes.accountAddress },
    // { title: "Đổi mật khẩu", href: privateRoutes.accountChangePassword },
  ];

  return (
    <NoNavigationLayout>
      <div className="bg-[#f5f5f7]">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <aside className="w-full md:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h2 className="text-lg font-semibold mb-4">Tài khoản của tôi</h2>
                <nav className="space-y-2">
                  {sidebarItems.map((item) => (
                    <NavLink
                      key={item.title}
                      absolute
                      href={item.href}
                      activeClassName=" bg-primary text-white"
                      className={cn(
                        "block px-3 py-2 rounded-md text-sm",
                        "hover:bg-gray-100 hover:text-primary",
                        "transition-colors duration-200"
                      )}
                    >
                      {item.title}
                    </NavLink>
                  ))}
          <LogoutItem />
                </nav>
              </div>
            </aside>
            <main className="w-full md:w-3/4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </NoNavigationLayout>
  );
}