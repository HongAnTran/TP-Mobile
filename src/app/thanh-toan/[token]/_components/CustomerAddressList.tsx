"use client"
import { Button } from '@/components/ui/button'
import { Address } from '@/types/Address.type'
import { Customer } from '@/types/Customer.type'
import React from 'react'

export default function CustomerAddressList({
    addressList
    , customer,
    onSelectAddress,
    onAddAddress,
    onEditAddress,
    onDeleteAddress,
} : {
    customer : Customer,
    addressList : Address[],
    onSelectAddress?: (address : Address) => void,
    onAddAddress?: () => void,
    onEditAddress?: (address : Address) => void,
    onDeleteAddress?: (address : Address) => void,}) {
  return (
    <div>
        <p className="text-xl font-medium capitalize">Địa chỉ giao hàng</p>
        <p className="text-gray-400">Chọn địa chỉ giao hàng của bạn.</p>
        <div className="flex items-center justify-between mt-4 mb-2">
            <Button onClick={onAddAddress}>Thêm địa chỉ mới</Button>
          </div>
        {
            addressList.map((address) => {
                return (
                    <AddressItem key={address.id} address={address} />
                )
            })
        }
    </div>
  )
}

function AddressItem({address} :{ address : Address}){
    return (

        <div className="flex items-center justify-between py-2 px-4 border-b border-gray-200">
            {address.detail_address} - {address.phone} - {address.name}
            <button className="text-sm text-blue-500 hover:text-blue-700">Chỉnh sửa</button>
        </div>
    )
}
