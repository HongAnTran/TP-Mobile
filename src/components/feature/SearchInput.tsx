"use client"
import React, { useEffect, useState } from 'react'
import InputController from "@/components/common/inputs/InputController"
import { useForm } from 'react-hook-form'
import ProductsServiceApi from '@/services/productService';
import { Product } from '@/types/product';
import {
  HoverCardTrigger,
  HoverCard,
  HoverCardContent
} from "@/components/ui/hover-card"
import Image from 'next/image';
import { TypographyP, TypographySpan } from '../ui/typography';
import Link from 'next/link';
import routes from '@/routes';


const placeholders = ["Bạn đang muốn tìm gì...?", "Nhập tên sản phẩm...", "Ipad giá rẻ..."]; // Các placeholder bạn muốn sử dụng

export default function SearchInput() {

  const [productsSearch, setProductsSearch] = useState<Product[]>([])
  const [openSearch, setOpenSearch] = useState(false);

  const [placeholder, setPlaceholder] = useState('');
  const [typingForward, setTypingForward] = useState(true);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);



  const { control, handleSubmit, setValue } = useForm<{ keyword: string }>({
    defaultValues: {
      keyword: ""
    }
  })


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


  async function searchProductByKeyword(keyword: string) {
    const datas = await ProductsServiceApi.getList({ keyword: keyword, limit: 5 })
    console.log(datas)
    setProductsSearch(datas)
    setOpenSearch(true)

  }


  return (
    <HoverCard open={openSearch} onOpenChange={(open) => {
      console.log(open)
      if (!open) {
        // setProductsSearch([]),
        //   setValue("keyword", "")
      }
    }}>
      <HoverCardTrigger>
        <form onChange={handleSubmit((data) => {
          searchProductByKeyword(data.keyword)
        })
        }>

          <InputController inputProps={{
            placeholder: placeholder,
            className: " text-white placeholder:text-white",
            autoComplete: "off",
            onBlur: () => {
              setValue("keyword", "")
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
        </ul> : <TypographyP className='  text-white'>Không có kết quả</TypographyP>}
      </HoverCardContent>
    </HoverCard>



  )
}


function ProductItemSearch({ product }: { product: Product }) {
  return <li className=' flex gap-2'>

    <div>
      <Image className='  rounded' src={product.image.src} alt='product' width={50} height={50} />
    </div>
    <Link href={`${routes.products}/${product.slug}`}>
      <TypographySpan className=' text-white  hover:text-blue-500 font-bold line-clamp-2 ' >{product.title}</TypographySpan>
    </Link>
  </li>
}