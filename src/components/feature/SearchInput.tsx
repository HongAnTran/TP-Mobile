"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import InputController from "@/components/common/inputs/InputController"
import { useForm } from 'react-hook-form'
import ProductsServiceApi from '@/services/ProductService';
import { ProductInList } from '@/types/Product.types';
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
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

const placeholders = ["Bạn đang muốn tìm gì...?", "Nhập tên sản phẩm...", "Ipad giá rẻ..."]; // Các placeholder bạn muốn sử dụng

export default function SearchInput({ className }: { className?: string }) {

  const [productsSearch, setProductsSearch] = useState<ProductInList[]>([])
  const [openSearch, setOpenSearch] = useState(false);

  const [placeholder, setPlaceholder] = useState('');
  const [typingForward, setTypingForward] = useState(true);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const router = useRouter()
  const { control, handleSubmit, watch } = useForm<{ keyword: string }>({
    defaultValues: {
      keyword: ""
    }
  })

  const keyword = watch("keyword")



  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchProductByKeyword = useCallback(debounce(async (keyword: string) => {
    if (!keyword.trim()) {
      setProductsSearch([])
      return
    }
    const { datas: products } = await ProductsServiceApi.getList({ limit: 5, keyword: keyword })
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
    <HoverCard open={openSearch} onOpenChange={(open) => { }}>
      <HoverCardTrigger>
        <form onChange={handleSubmit((data) => {
          searchProductByKeyword(data.keyword)
        })
        }

          onSubmit={e => e.preventDefault()}
        >
          <InputController
            inputProps={{
              placeholder: placeholder,
              className: cn(" text-[#f8f8d9]   placeholder:text-[#f8f8d9] rounded-lg  border-2  ", className),
              autoComplete: "off",
              onFocus: () => {
                if (productsSearch.length) {
                  setOpenSearch(true)
                }
              },
              onBlur: () => {
                setOpenSearch(false)
              },

              onKeyUp: (key) => {
                if (key.key === "Enter") {
                  router.push(`${routes.search}?keyword=${keyword}`)
                }
              },
            }}
            isShowError={false}
            name="keyword" control={control} />
        </form>
      </HoverCardTrigger>

      <HoverCardContent className=' w-[400px] bg-primary    '>
        {productsSearch.length ? <ul className=' flex flex-col gap-3  '>
          {productsSearch.map(product => {
            return <ProductItemSearch key={product.id} product={product} />
          })}
          <Link className=' text-[#f8f8d9]    text-center' href={`${routes.search}?keyword=${keyword}`}>Xem tất cả</Link>
        </ul> : <TypographyP className='  text-[#f8f8d9]  '>Không có kết quả</TypographyP>}
      </HoverCardContent>
    </HoverCard>



  )
}


function ProductItemSearch({ product }: { product: ProductInList }) {
  return (
    <Link href={`${routes.products}/${product.slug}`} className=' group'>
      <li className=' flex gap-2 py-1 border-b'>

        <div>
          <Image className='  rounded' src={product.images[0].url} alt='product' width={50} height={50} />
        </div>
        <TypographySpan className=' text-[#f8f8d9]    group-hover:text-blue-500 hover:text-blue-500 font-bold line-clamp-2 ' >{product.title}</TypographySpan>
      </li>
    </Link>
  )

}