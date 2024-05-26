import React from 'react'
import Checkout from './Checkout'
import OrderServiceApi from '@/services/orderService'

export default async function page({ params }: { params: { token: string } }) {
  const token = params.token
  const order = await OrderServiceApi.getDetail(token)

  return (
    <>
      <Checkout order={order} />
    </>

  )
}
