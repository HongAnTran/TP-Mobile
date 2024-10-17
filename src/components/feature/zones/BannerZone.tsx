

import React from 'react'
import Link from "@/components/common/Link";

import Image from 'next/image'
import routes from '@/routes';
import { BannerZone as BannerZoneType } from '@/types/Structure.type';
import { generateGridClasses } from '@/utils/helper';
import { TypographyH3 } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';


export default function BannerZone({ data }: Pick<BannerZoneType, "data">) {
    const { col, rows, type, button, tags, title, typeCard } = data

    const gridClasses = generateGridClasses(col, "grid gap-4");

    return (
        <section className=' flex flex-col gap-4'>
            <TypographyH3 className=' text-center uppercase text-primary '>{title}</TypographyH3>
            <div className={gridClasses}>
                {rows.map((banner, index) => {
                    const image = banner.image
                    if (banner.link) {
                        return <Link href={banner.link}>
                            <Image quality={100} className='  rounded-md  h-auto' key={index} src={image.src} alt={image.alt || ""} width={image.width} height={image.height} />
                        </Link>
                    }
                    return <Image quality={100} className=' rounded-lg  max-h-[340px]   h-full lg:h-auto' key={index} src={image.src} alt={image.alt || ""} width={image.width} height={image.height} />
                })}
            </div>
            {button ? <div className=' flex gap-4 justify-center mt-2'>
                <Link href={button.link || routes.feedback}>
                    <Button className=' bg-primary text-white hover:scale-110 transition-all'>{button.label}</Button>
                </Link>
            </div> : null}
        </section>
    )
}


