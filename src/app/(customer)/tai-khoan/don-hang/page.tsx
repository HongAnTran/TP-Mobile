import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CustomerServiceApi from "@/services/customerService"; 
import { Order, OrderStatus } from "@/types/Order.type";
import { OrderItem } from "./_components/OrderItem";
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
            <TableHead >Mã đơn hàng</TableHead>
            <TableHead>Ngày đặt</TableHead>
            <TableHead>Tổng tiền</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <OrderItem key={order.id} order={order} />
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
              <Tabs defaultValue="draft" className="w-full">
                <TabsList className="grid h-auto w-full grid-cols-2  lg:grid-cols-5">
                  {/* <TabsTrigger value="all">Tất cả ({orders.length})</TabsTrigger> */}
                  <TabsTrigger value="draft">Chưa hoàn tất ({draftOrders.length})</TabsTrigger>
                  <TabsTrigger value="pending">Chờ xác nhận ({pendingOrders.length})</TabsTrigger>
                  <TabsTrigger value="processing">Đang xử lý ({processingOrders.length})</TabsTrigger>
                  <TabsTrigger value="success">Hoàn thành ({successOrders.length})</TabsTrigger>
                  <TabsTrigger value="cancelled">Đã hủy ({cancelledOrders.length})</TabsTrigger>
                </TabsList>
                {/* <TabsContent value="all">
                  <OrderTable orders={orders} />
                </TabsContent> */}
                <TabsContent value="draft">
                  <OrderTable orders={draftOrders} />
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

