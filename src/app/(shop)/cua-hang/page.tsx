import { MapPinFilledIcon } from '@/components/icons'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { TypographyH1, TypographyH2, TypographyP } from '@/components/ui/typography'
import React from 'react'

export default function page() {
  return (
    <div className=' my-8'>
      <div className=' container'>
        <Breadcrumbs breadcrumbsList={[
          {
            label: "Cửa hàng của TP Mobile",
            isActive: true
          }]} />
        <div className=' mt-8'>
          <div className=' grid grid-cols-12 gap-6'>
            <div className=' col-span-12 md:col-span-4'>
              <div className=' border rounded-lg border-primary p-4  h-full'>
                  <TypographyH2  className='  text-center text-xl font-medium' >Cửa hàng của TP Mobile</TypographyH2>
                  {/* <TypographyP className='  text-center' >1 Cửa hàng trên toàn quốc</TypographyP> */}
                  <div className=' flex gap-2 justify-between mt-4'>
                    <div className=' flex-shrink-0'>
                    <MapPinFilledIcon />
                    </div>
                    <div>
                      <TypographyP>05 Đ. Văn Cao, Tân Hưng, Tân Phú, Thành phố Hồ Chí Minh, Việt Nam</TypographyP>
                    </div>
                  </div>
              </div>
            </div>
            <div className=' md:col-span-8 col-span-12'>
              <iframe className=' w-full ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.372301069024!2d106.61812397405349!3d10.7827710893664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d5f330ea7c7%3A0x1e87e39b41c64ce2!2sTP%20MOBILE%20STORE!5e0!3m2!1svi!2s!4v1714924406248!5m2!1svi!2s" width="600" height="450" loading="lazy" ></iframe>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
