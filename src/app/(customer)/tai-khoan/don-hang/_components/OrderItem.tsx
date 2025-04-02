"use client"

import DialogUi from "@/components/common/Dialog"
import Link from "@/components/common/Link"
import OrderStatusTag from "@/components/common/OrderStatusTag"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import routes, { privateRoutes } from "@/routes"
import { Order, OrderStatus } from "@/types/Order.type"
import { convetNumberToPriceVND } from "@/utils"
import { format } from "date-fns"
import { useEffect, useState } from "react"

export function OrderItem({ order }: { order: Order }) {

    const [open , setOpen] = useState(false)
    const [timeLeftFormatted, setTimeLeftFormatted] = useState("")
    const [isExpired, setIsExpired] = useState(false)
    const {status} = order
    const isDraft = status === OrderStatus.DRAFT
    const isAllowCancel = status === OrderStatus.PENDING || status === OrderStatus.PROCESSING
    const date = order.sold_at ? order.sold_at : order.created_at
    const dateFormatted = format(new Date(date), 'hh:mm - dd/MM/yyyy')

    function handleCancelOrder() {
    }
        useEffect(() => {
                // if isDraft => cacl date remove befor 1 day = created_at + 1 day
                const dateRemoveDraft = new Date(order.created_at)
                dateRemoveDraft.setDate(dateRemoveDraft.getDate() + 1)
            
                // tính toán thời gian còn lại để hủy đơn hàng
            
                const timeLeft = dateRemoveDraft.getTime() - new Date().getTime()
            
                // tính toán thời gian còn lại theo format hh:mm:ss
                const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
                const minutesLeft = Math.floor((timeLeft / (1000 * 60)) % 60);
                const secondsLeft = Math.floor((timeLeft / 1000) % 60);
                
                // nếu thời gian còn lại <= 0 thì không cho phép hủy đơn hàng
                if (timeLeft <= 0) {
                    setIsExpired(true)
                    setTimeLeftFormatted("Hết hạn")
                    return
                }

                const formatNumber = (num : number) => num < 10 ? `0${num}` : num;
                const timeLeftFormatted = `còn ${formatNumber(hoursLeft)} giờ ${formatNumber(minutesLeft)} phút`;
                setTimeLeftFormatted(timeLeftFormatted)
        },[order.created_at])


    return  <>
    <TableRow  className=" w-[100px] border-0 hover:bg-slate-50 data-[state=active]:bg-slate-100">
    <TableCell>{isDraft ? "Chưa xác định" :  <b>#{order.code}</b>}</TableCell>
    <TableCell>{dateFormatted}</TableCell>
    <TableCell>{convetNumberToPriceVND(order.total_price)}</TableCell>
    <TableCell>
       {isDraft ? `${timeLeftFormatted}` : <OrderStatusTag status={status} />}
    </TableCell>
    <TableCell>
        {isDraft ? !isExpired ?  <Button variant="outline" size="sm" asChild>
            <Link href={`${routes.checkout}/${order.token}`}>Tiếp tục</Link>
        </Button> : null :      <Button variant="link" size="sm" asChild>
        <Link href={`${privateRoutes.accountOrders}/${order.code}`}>Chi tiết</Link>
      </Button>}
 
      {/* {isAllowCancel && <Button variant="destructive" size="sm" className="ml-2"
        onClick={()=>{ setOpen(true)}}
      >
        Hủy
        </Button>} */}
    </TableCell>
  </TableRow>
    <DialogUi  closeButton={null} open={open} onClose={setOpen} title="" closeOnMask={false} className="w-[400px]">
        <div className="flex flex-col gap-4">
            <p className="text-lg text-muted-foreground  text-center">Bạn có chắc chắn muốn hủy đơn hàng <b>{order.code}</b> không?</p>
            <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Đóng</Button>
                <Button variant="destructive" size="sm" onClick={handleCancelOrder}>Xác nhận</Button>
            </div>
        </div>
    </DialogUi>
    </>
  }