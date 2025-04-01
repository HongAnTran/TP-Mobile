import React from 'react'
import { useShopStore } from './shop-store-provider'
import useCart from '@/hooks/useCart'

export default function CartProvider({children}: {children: React.ReactNode}) {

    const {cart ,} = useCart()





    return children
}
