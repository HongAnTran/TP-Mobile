"use client"
import { Product } from '@/types/product';
import React, { ReactNode, useState } from 'react'
import { createContext } from 'react';
import {  useToast } from '../ui/use-toast';
interface WishListValue {
  products: Product[]
  addProduct: (product: Product) => void
  removeProduct: (id: Product["id"]) => void
}



export const WishListContext = createContext<WishListValue>({} as WishListValue);

const MAX = 2


export default function WishListProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([])
  const { toast } = useToast()
  function addProduct(product: Product) {
    if (products.find(pro => pro.id === product.id)) {
      toast({
        title: "Sản phẩm này đã tồn tại",
      })
      return
    }

    let datas = [...products]
    if (datas.length === MAX) {
      toast({
        title: "Giới hạn so sánh 2 sản phẩm",
        
      } )
      // datas.pop()
      return
    }

    datas.unshift(product)
    setProducts(datas)
  }

  function removeProduct(id: Product["id"]) {

    let datas = [...products].filter(pro => pro.id !== id)
    setProducts(datas)
  }


  return (
    <WishListContext.Provider value={{
      products,
      addProduct,
      removeProduct
    }}>
      {children}

    </WishListContext.Provider>
  )
}
