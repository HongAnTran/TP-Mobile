// app/account/orders/[code]/page.tsx
import OrderServiceApi from '@/services/orderService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import { Order } from '@/types/Order.type';
import OrderStatusTag from '@/components/common/OrderStatusTag';
import { format } from 'date-fns';
import { convetNumberToPriceVND } from '@/utils';
import Link from '@/components/common/Link';
import routes, { privateRoutes } from '@/routes';
import Image from 'next/image';

// Buộc route chạy động vì dùng API
export const dynamic = 'force-dynamic';

export default async function OrderDetailPage({ params }: { params: { code: string } }) {
  const { code } = params;

  // Lấy chi tiết đơn hàng từ API
  let order: Order;
  try {
    order = await OrderServiceApi.getDetailByCode(code);
    if (!order) {
      return notFound(); // Trả về 404 nếu không tìm thấy đơn hàng
    }
  } catch (error) {
    return notFound();
  }
    const date = order.sold_at ? order.sold_at : order.created_at
    const dateFormatted = format(new Date(date), 'hh:mm - dd/MM/yyyy')

  return (
      <Card>
        <CardHeader>
           
          <CardTitle>Chi tiết đơn hàng #{order.code}</CardTitle>
          <div className="flex items-center gap-2 mt-2">
          <OrderStatusTag  status={order.status}/>
            <span className="text-sm text-muted-foreground">
              Đặt ngày: {dateFormatted}
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Thông tin khách hàng */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Thông tin khách hàng</h3>
              <p>{order.customer?.full_name || 'Khách vãng lai'}</p>
              <p>{order.customer?.email || 'Không có email'}</p>
              <p>{order.customer?.phone}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Thông tin giao hàng</h3>
              {order.shipping ? (
                <>
                  <p>{order.shipping.fullname}</p>
                  <p>{order.shipping.phone}</p>
                  <p>{order.shipping.address}</p>
                </>
              ) : order.pickup ? (
                <>
                  <p>{order.pickup.store.name}</p>
                  <p>{order.pickup.store.detail_address}</p>
                </>
              ) : (
                <p>Không có thông tin giao hàng</p>
              )}
            </div>
          </div>

          {/* Danh sách sản phẩm */}
          <div>
            <h3 className="font-semibold mb-2">Sản phẩm</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>

                  <TableHead>Tên sản phẩm</TableHead>
                  <TableHead>Số lượng</TableHead>
                  <TableHead>Đơn giá</TableHead>
                  <TableHead>Thành tiền</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                        {item.variant.image?.url && 
                        <Image width={100} height={100} src={item.variant.image?.url} alt={item.product.title}  />
                        }
                    </TableCell>

                    <TableCell>{item.product.title} - {item.variant.title}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{convetNumberToPriceVND(item.price)}</TableCell>
                    <TableCell>{convetNumberToPriceVND(item.line_price)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Tổng tiền */}
          <div className="flex justify-end">
            <div className="w-full md:w-1/3 space-y-2">
              <div className="flex justify-between">
                <span>Tạm tính:</span>
                <span>{convetNumberToPriceVND(order.temp_price)}</span>
              </div>
              <div className="flex justify-between">
                <span>Phí vận chuyển:</span>
                <span>{convetNumberToPriceVND(order.ship_price)}</span>
              </div>
              <div className="flex justify-between">
                <span>Giảm giá:</span>
                <span>-{convetNumberToPriceVND(order.discount)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Tổng cộng:</span>
                <span>{convetNumberToPriceVND(order.total_price)}</span>
              </div>
              {order.payment && (
                <div className="flex justify-between">
                  <span>Thanh toán:</span>
                  <span>{order.payment.method} </span>
                </div>
              )}
            </div>
          </div>

          {/* Ghi chú (nếu có) */}
          {order.note && (
            <div>
              <h3 className="font-semibold mb-2">Ghi chú</h3>
              <p className="text-muted-foreground">{order.note}</p>
            </div>
          )}

          {/* Nút hành động */}
          <div className="flex justify-end gap-2">
            {/* {order.status === 'PENDING' && (
              <Button variant="destructive">Hủy đơn hàng</Button>
            )} */}
            <Button variant="outline" asChild>
              <Link href={privateRoutes.accountOrders}>Quay lại danh sách</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
  );
}