'use client'
import Link from "@/components/common/Link"
import PriceText from "@/components/common/PriceText"
import useProductList from "@/hooks/useProductList"
import routes from "@/routes"
import Image from "next/image"

export  function ProductBuy({ ids }: { ids: number[] }) {
    const {data , isSuccess } = useProductList(
        {
            ids: ids.join(","),
            limit: 4,
        }
    )

    if(!isSuccess) return null  

    return (
          <div className="max-w-sm   rounded-xl overflow-hidden shadow-lg">
            <div className="flex items-center   p-3   bg-primary">
              <span className="text-xl mr-2 animate-wiggle" >
              </span>
              <h2 className=" text-secondary font-semibold text-lg">Phụ kiện mua kèm</h2>
            </div>
            <ul className="flex gap-2 flex-col text-gray-700 p-4">
              {data.datas.map((item, index) => {
                const image = item.thumnail_url ||  item.images[0].url 
                return (<Link href={`${routes.products}/${item.slug}`} key={index}>
                <li  className="flex   gap-2 items-center">
                    <Image src={image} alt={item.title} width={40} height={40} className=" w-10 h-10 object-cover flex-shrink-0" />
                  <div >
                    <p className=' text-xs line-clamp-2'> {item.title}</p>
                    <p className=' text-xs'> <PriceText className=" text-red-500" price={item.price}/></p>
                  </div>
                </li></Link>)
              })}
            </ul>
          </div>
    )
  }