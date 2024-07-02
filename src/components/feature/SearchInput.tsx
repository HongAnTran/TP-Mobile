"use client"
import React, { useCallback, useEffect, useState } from 'react'
import InputController from "@/components/common/inputs/InputController"
import { useForm } from 'react-hook-form'
import ProductsServiceApi from '@/services/productService';
import {  ProductInList } from '@/types/product';
import {
  HoverCardTrigger,
  HoverCard,
  HoverCardContent
} from "@/components/ui/hover-card"
import Image from 'next/image';
import { TypographyP, TypographySpan } from '../ui/typography';
import Link from "@/components/common/Link";

import routes from '@/routes';
import { debounce } from '@/utils';

const placeholders = ["Bạn đang muốn tìm gì...?", "Nhập tên sản phẩm...", "Ipad giá rẻ..."]; // Các placeholder bạn muốn sử dụng

export default function SearchInput() {

  const [productsSearch, setProductsSearch] = useState<ProductInList[]>([])
  const [openSearch, setOpenSearch] = useState(false);

  const [placeholder, setPlaceholder] = useState('');
  const [typingForward, setTypingForward] = useState(true);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);


  const { control, handleSubmit, setValue, watch } = useForm<{ keyword: string }>({
    defaultValues: {
      keyword: ""
    }
  })




  const searchProductByKeyword = useCallback(debounce(async (keyword: string) => {
    if (!keyword.trim()) {
      setProductsSearch([])
      return
    }
    const { products } = await ProductsServiceApi.getListClient({ take: 5, keyword: keyword })
    setProductsSearch(products)
    setOpenSearch(true)
  }, 500), [])

  useEffect(() => {
    const currentPlaceholder = placeholders[placeholderIndex];
    let timeout: NodeJS.Timeout | undefined
    const interval = setInterval(() => {
      if (typingForward) {
        if (placeholder.length < currentPlaceholder.length) {
          setPlaceholder(currentPlaceholder.slice(0, placeholder.length + 1));
        } else {
          timeout = setTimeout(() => {
            setTypingForward(false);
            // setTypingForward(true);
          }, 1000); // Dừng 0.5 giây trước khi bắt đầu chạy ngược lại
        }
      } else {
        if (placeholder.length > 0) {
          setPlaceholder(currentPlaceholder.slice(0, placeholder.length - 1));
        } else {
          setTypingForward(true);
          setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
        }
      }
    }, 60); // Thay đổi placeholder mỗi 0.1 giây

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    }
  }, [placeholder, typingForward, placeholderIndex]);



  return (
    <HoverCard open={openSearch} onOpenChange={(open) => {
      if (!open) {
        // setProductsSearch([]),
        //   setValue("keyword", "")
      }
    }}>
      <HoverCardTrigger>
        <form onChange={handleSubmit((data) => {
          searchProductByKeyword(data.keyword)
        })
        }
        >
          <InputController

            inputProps={{
              placeholder: placeholder,
              className: " text-white placeholder:text-white",
              autoComplete: "off",
              onBlur: () => {
                // setValue("keyword", "")
                setOpenSearch(false)
              }

            }}
            name="keyword" control={control} />
        </form >
      </HoverCardTrigger>

      <HoverCardContent className=' w-[400px] bg-primary  '>
        {productsSearch.length ? <ul className=' flex flex-col gap-2'>

          {productsSearch.map(product => {
            return <ProductItemSearch key={product.id} product={product} />
          })}

          <Link href={`${routes.search}?keyword=${watch("keyword")}`}>Xem tất cả</Link>
        </ul> : <TypographyP className='  text-white'>Không có kết quả</TypographyP>}
      </HoverCardContent>
    </HoverCard>



  )
}


function ProductItemSearch({ product }: { product: ProductInList }) {
  return <li className=' flex gap-2'>

    <div>
      <Image className='  rounded' src={product.featured_image} alt='product' width={50} height={50} />
    </div>
    <Link href={`${routes.products}/${product.slug}`}>
      <TypographySpan className=' text-white  hover:text-blue-500 font-bold line-clamp-2 ' >{product.title}</TypographySpan>
    </Link>
  </li>
}