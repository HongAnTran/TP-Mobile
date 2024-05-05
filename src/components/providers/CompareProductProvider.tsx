"use client"
import { Product } from '@/types/product';
import React, { ReactNode, useState } from 'react'
import { createContext } from 'react';
import { toast, useToast } from '../ui/use-toast';
import Link from 'next/link';
import routes from '@/routes';
import Image from 'next/image';
import compareIMG from "../../../public/compare.png"
import { TypographySpan } from '../ui/typography';

interface CompareProductValue {
  products: Product[]
  addProduct?: (product: Product) => void
  removeProduct?: (id: Product["id"]) => void
}


interface CompareData {
  key: keyof Product
  label: string
  values: any[]
}

const data: CompareData[] = [
  { key: "category_title", label: "Loại sản phẩm", values: [] },
  { key: "options", label: "Loại sản phẩm", values: [] },
]

export const CompareProduct = createContext<CompareProductValue>({ products: [] });

const MAX = 2


export default function CompareProductProvider({ children }: { children: ReactNode }) {
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
      datas.pop()
    }

    datas.unshift(product)
    setProducts(datas)
  }

  function removeProduct(id: Product["id"]) {

    let datas = [...products].filter(pro => pro.id !== id)
    setProducts(datas)
  }

  // function getCompareData() {
  //   const data: CompareData[] = []
  //   const firstProduct = products[0]
  //   for (const key in firstProduct) {
  //     if (Object.prototype.hasOwnProperty.call(firstProduct, key)) {
  //       const element = firstProduct[key];

  //     }
  //   }
  // }

  return (
    <CompareProduct.Provider value={{
      products,
      addProduct,
      removeProduct
    }}>
      {children}

      {products.length ? <Link title='So sánh sản phẩm' href={routes.compareProduct} className='   fixed  bottom-20 left-20 w-[60px] h-[60px] rounded-full shadow-xl bg-black text-white'>
        <div className=' w-full h-full flex items-center justify-center relative'>

          <Image src={compareIMG} alt='compare' width={40} height={40} />
          <TypographySpan className=' flex items-center justify-center  rounded-full w-5 h-5   bg-red-600 absolute top-0 -right-1 text-white'>{products.length}</TypographySpan>
        </div>
      </Link> : null}

    </CompareProduct.Provider>
  )
}
