

import React from 'react'
import Link from "@/components/common/Link";

import Image from 'next/image'
import { NavigationZone as NavigationZoneType } from '@/types/Structure.type';
import { generateGridClasses } from '@/utils/helper';
import { TypographyP } from '@/components/ui/typography';
export default function NavigationZone({ data }: Pick<NavigationZoneType, "data">) {
    const { col, rows, type, button, tags, title, typeCard } = data

    const gridClasses = generateGridClasses(col, "grid  gap-1 md:gap-4");

    return (
        <nav className=' p-1 md:p-4 bg-white rounded-lg shadow-md'>
            <ul className={gridClasses}>
                {rows.map((banner, index) => {
                    const image = banner.image
                    const title = banner.title || ""
                    if (banner.link) {
                        return (
                            <Link key={index} href={banner.link} className='w-full'>
                            <li className='  group aspect-square py-1  rounded-lg flex flex-col  items-center justify-center '>
                            <Image quality={100} className=' group-hover:scale-110 transition  duration-300   object-contain h-full w-full ' key={index} src={image.src} alt={image.alt || ""} width={image.width} height={image.height} />
                            <TypographyP className='text-center text-xs md:text-sm   md:font-semibold color-gray-600'>{title}</TypographyP>
                                 </li>
                            </Link>
                        )
                    }
                    return <li key={index} className='aspect-square py-1  rounded-lg flex flex-col  items-center justify-center '>
                        <Image quality={100} className='  object-contain h-full w-full ' key={index} src={image.src} alt={image.alt || ""} width={image.width} height={image.height} />
                        <TypographyP className='text-center text-xs md:text-sm   md:font-semibold color-gray-600'>{title}</TypographyP>
                    </li>
                })}
            </ul>
        </nav>
    )
}


