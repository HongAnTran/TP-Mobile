import { getOrderStatusLabel } from '@/consts/order';
import { OrderStatus } from '@/types/Order.type';
import React from 'react'

export default function OrderStatusTag({status} : {status:OrderStatus}) {

        switch (status) {
            case OrderStatus.DRAFT:
                return  (
                    <span className='text-gray-500 text-xs font-medium bg-gray-100 rounded-full px-2 py-1'>
                        {getOrderStatusLabel(status)}
                    </span>
                )
            case OrderStatus.PENDING:
                return  (
                    <span className='text-yellow-500 text-xs font-medium bg-yellow-100 rounded-full px-2 py-1'>
                       {getOrderStatusLabel(status)}

                    </span>
                )
            case OrderStatus.PROCESSING:
                return  (
                    <span className='text-blue-500 text-xs font-medium bg-blue-100 rounded-full px-2 py-1'>
                       {getOrderStatusLabel(status)}
                    </span>
                )
            case OrderStatus.SUCCESS:
                return  (
                    <span className='text-green-500 text-xs font-medium bg-green-100 rounded-full px-2 py-1'>
                        {getOrderStatusLabel(status)}
                    </span>
                )
            case OrderStatus.CANCELLED:
                return  (
                    <span className='text-red-500 text-xs font-medium bg-red-100 rounded-full px-2 py-1'>
                      {getOrderStatusLabel(status)}
                    </span>
                )
            default:
                break;
        }
}
