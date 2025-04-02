import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CustomerServiceApi from "@/services/customerService"; // Giả định API service
import { Order, OrderStatus } from "@/types/Order.type";
import { convetNumberToPriceVND, formatDate } from "@/utils";
import OrderStatusTag from "@/components/common/OrderStatusTag";
export const dynamic = 'force-dynamic'


export default async function OrdersPage() {

    const orders = await CustomerServiceApi.getListOrder(); 
  
    // Lọc đơn hàng theo trạng thái
    const draftOrders = orders.filter((order) => order.status === OrderStatus.DRAFT);

    const pendingOrders = orders.filter((order) => order.status === OrderStatus.PENDING);
    const processingOrders = orders.filter((order) => order.status === OrderStatus.PROCESSING);
    const successOrders = orders.filter((order) => order.status === OrderStatus.SUCCESS);
    const cancelledOrders = orders.filter((order) => order.status === OrderStatus.CANCELLED);
  
    const OrderTable = ({ orders }: { orders: Order[] }) => (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Mã đơn hàng</TableHead>
            <TableHead>Ngày đặt</TableHead>
            {/* <TableHead>Số lượng</TableHead> */}
            <TableHead>Tổng tiền</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.code}</TableCell>
                <TableCell>{order.sold_at ? formatDate(order.sold_at) : formatDate(order.created_at)}</TableCell>
                <TableCell>{convetNumberToPriceVND(order.total_price)}</TableCell>
                <TableCell>
                <OrderStatusTag status={order.status} />
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`/account/orders/${order.id}`}>Xem chi tiết</a>
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                Không có đơn hàng nào
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  
    return (
        <Card>
          <CardHeader>
            <CardTitle>Đơn hàng của tôi</CardTitle>
          </CardHeader>
          <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="all">Tất cả ({orders.length})</TabsTrigger>
                  <TabsTrigger value="pending">Chờ xác nhận ({pendingOrders.length})</TabsTrigger>
                  <TabsTrigger value="processing">Đang xử lý ({processingOrders.length})</TabsTrigger>
                  <TabsTrigger value="success">Hoàn thành ({successOrders.length})</TabsTrigger>
                  <TabsTrigger value="cancelled">Đã hủy ({cancelledOrders.length})</TabsTrigger>
                </TabsList>
  
                <TabsContent value="all">
                  <OrderTable orders={orders} />
                </TabsContent>
                <TabsContent value="pending">
                  <OrderTable orders={pendingOrders} />
                </TabsContent>
                <TabsContent value="processing">
                  <OrderTable orders={processingOrders} />
                </TabsContent>
                <TabsContent value="success">
                  <OrderTable orders={successOrders} />
                </TabsContent>
                <TabsContent value="cancelled">
                  <OrderTable orders={cancelledOrders} />
                </TabsContent>
              </Tabs>
          </CardContent>
        </Card>
    );
  }