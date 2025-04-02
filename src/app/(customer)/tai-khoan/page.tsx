import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BadgeIcon, CubeIcon } from "@radix-ui/react-icons";
import { MapPinFilledIcon } from "@/components/icons";
import CustomerServiceApi from "@/services/customerService";
import { formatDate } from "@/utils";
import { getGenderLabel } from "@/consts/customer";
import Link from "@/components/common/Link";
import { privateRoutes } from "@/routes";
export const dynamic = 'force-dynamic'


export default async function AccountOverview() {
  const customer = await CustomerServiceApi.profile();
  return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Xin chào, {customer.full_name}!</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex  lg:flex-row flex-col gap-2 lg:gap-4">
              <Avatar className="lg:h-16 lg:w-16 w-10 h-10">
                <AvatarImage src={customer.avatar || undefined} alt={customer.full_name} />
                <AvatarFallback>
                  {customer.first_name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className=" flex-1">
               <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
               <p className="text-muted-foreground">
                  <b>Email:</b> {customer.email}
                </p>
                <p className="text-muted-foreground">
                <b>Số điện thoại:</b> {customer.phone}
                </p>
                <p className="text-muted-foreground">
                  <b>Giới tính:</b> {getGenderLabel(customer.gender)}
                </p>
              {customer.birthday && <p className="text-muted-foreground">
                 <b>Sinh nhật:</b> {formatDate(customer.birthday)}
                </p>}  
                <p className=" text-muted-foreground">
                  <b>Tham gia từ:</b> {formatDate(customer.created_at)}
                </p>
               </div>
                {/* <Button variant="outline" size="sm" className="mt-2">
                  Chỉnh sửa hồ sơ
                </Button> */}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Thống kê nhanh */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tổng quan đơn hàng</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CubeIcon className="h-5 w-5 text-muted-foreground" />
                    <span>Tổng số đơn hàng</span>
                  </div>
                  <Badge variant="secondary">{customer.orders.total}</Badge>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <CubeIcon className="h-5 w-5 text-muted-foreground" />
                    <span>Đơn hàng chưa hoàn thành</span>
                  </div>
                  <Badge variant="default">{customer.orders.draft}</Badge>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <CubeIcon className="h-5 w-5 text-muted-foreground" />
                    <span>Đơn hàng đang xử lý</span>
                  </div>
                  <Badge variant="secondary">{customer.orders.pending}</Badge>
                </div>
                <div className="flex  items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <CubeIcon className="h-5 w-5 text-muted-foreground" />
                    <span>Đơn hàng đã hoàn thành</span>
                  </div>
                  <Badge variant="succsess">{customer.orders.success}</Badge>
                </div>
                <Link href={privateRoutes.accountOrders} >
                <Button variant="link" className="p-0 h-auto">
                  Xem tất cả đơn hàng
                </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Địa chỉ mặc định</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPinFilledIcon className="h-5 w-5 text-muted-foreground mt-1" />
                    Chưa có địa chỉ nào được thiết lập
                  {/* <span>{user.defaultAddress}</span> */}
                </div>
                {/* <Button variant="outline" size="sm">
                  Quản lý địa chỉ
                </Button> */}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Thông báo hoặc hoạt động gần đây (tùy chọn) */}
        {/* <Card>
          <CardHeader>
            <CardTitle className="text-lg">Hoạt động gần đây</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Đơn hàng #1234 đã được giao - 01/04/2025
              </li>
              <li className="text-sm text-muted-foreground">
                Cập nhật thông tin địa chỉ - 30/03/2025
              </li>
              <li className="text-sm text-muted-foreground">
                Đặt hàng mới #1235 - 28/03/2025
              </li>
            </ul>
          </CardContent>
        </Card> */}
      </div>
  );
}