"use client"

import InputController from '@/components/common/inputs/InputController'
import SelectController from '@/components/common/inputs/SelectController'
import PriceText from '@/components/common/PriceText'
import { Button } from '@/components/ui/button'
import { TypographySpan } from '@/components/ui/typography'
import LocationServiceApi from '@/services/locationService'
import { Location } from '@/types/location'
import { Order } from '@/types/order'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface LocationState {
  provices: Location[],
  districts: Location[],
  wards: Location[],
}

const AddressType = yup.mixed<'home' | 'office'>().oneOf(['home', 'office']);

// Định nghĩa AddressInffo schema
const AddressInfoSchema = yup.object().shape({
  email: yup.string().nullable().email("Không đúng định dạng"), // Địa chỉ email của người nhận hàng (có thể là null)
  street: yup.string().required("Vui lòng nhập"), // Đường
  phone: yup.string().required("Vui lòng nhập"), // Số điện thoại liên hệ
  province: yup.object().shape({
    code: yup.string().required("Vui lòng chọn"), // Mã code của thành phố
    name: yup.string(), // Tên của thành phố
  }).required(),
  district: yup.object().shape({
    code: yup.string().required("Vui lòng chọn"), // Mã code của thành phố
    name: yup.string(), // Tên của thành phố
  }).required(),
  ward: yup.object().shape({
    code: yup.string().required("Vui lòng chọn"), // Mã code của thành phố
    name: yup.string(), // Tên của thành phố
  }).required(),
  type: AddressType,
  full_name: yup.string().required("Vui lòng nhập"), // Tên đầy đủ của người nhận
  note: yup.string(), // Tên đầy đủ của người nhận
  isDefault: yup.boolean(), // Địa chỉ mặc định
});

export type Address = yup.InferType<typeof AddressInfoSchema>;

export default function CheckoutInfoForm({ order }: { order: Order }) {
  const [location, setLocation] = useState<LocationState>({
    provices: [],
    districts: [],
    wards: [],
  })




  const { control, handleSubmit, watch, setValue } = useForm<Address>({
    // defaultValues: order.shipping,
    resolver: yupResolver(AddressInfoSchema)
  })
  const watchProvice = watch("province.code")
  const watchDistrict = watch("district.code")


  useEffect(() => {
    (async () => {
      const res = await LocationServiceApi.getListProvinces()
      setLocation(pre => ({ ...pre, provices: res }))
    })()
  }, [])


  useEffect(() => {
    if (!watchProvice) {
      return
    }
    (async () => {

      const res = await LocationServiceApi.getListDistrictsByProvice(watchProvice)
      setLocation(pre => ({ ...pre, districts: res }))
      setValue("district.code", res[0].code)
    })()
  }, [setValue, watchProvice])

  useEffect(() => {
    if (!watchDistrict) {
      return
    }
    (async () => {

      const res = await LocationServiceApi.getListWardsByDistricts(watchDistrict)
      setLocation(pre => ({ ...pre, wards: res }))
      setValue("ward.code", res[0].code)

    })()
  }, [setValue, watchDistrict])

  function onSubmit(data: Address) {
    console.log(data)

  }



  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=' form-list flex flex-col gap-4 mt-4'>
        <InputController label='Họ và tên' name="full_name" control={control}  isShowError/>
        <div className='  flex gap-2'>
          <InputController label='Email' name="email" control={control} />
          <InputController label='Số điện thoại' name="phone" control={control} isShowError/>
        </div>
        <div className='  flex gap-2'>
          <SelectController
            items={location.provices.map(item => {
              return { label: item.name, value: item.code.toString() }
            })}
            label='Tỉnh / thành'
            name="province.code"
            control={control} />

          <SelectController
            items={location.districts.map(item => {
              return { label: item.name, value: item.code.toString() }
            })}
            label='Quận / huyện'
            name="district.code"
            control={control} />

          <SelectController
            items={location.wards.map(item => {
              return { label: item.name, value: item.code.toString() }
            })}
            label='Phường / xã'
            name="ward.code"
            control={control} />
        </div>
        <InputController label='Tên đường' name="street" control={control}  isShowError/>
        <InputController label='Ghi chú' name="note" control={control} />
      </div>

      <div className=' mt-8 '>
        <p className="text-lg font-medium">Phương thức thanh toán</p>
        <div className="mt-5 grid gap-6">
          <div className="relative">
            <input className="peer hidden" id="radio_1" type="radio" name="radio" checked readOnly />
            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">

              <div className="">
                <span className="mt-2 font-semibold">COD</span>
                <p className="text-slate-500 text-sm leading-6">2-4h (nội thành phố Hồ Chí Minh)</p>
              </div>
            </label>
          </div>

        </div>
      </div>
      <ul className=' flex flex-col gap-4  my-4  '>
        <li className=' flex items-center justify-between'>
          <TypographySpan className=' text-gray-500'>Tạm tính</TypographySpan>
          <PriceText className=' text-sm' price={order.total_price} />
        </li>
        <li className=' flex items-center justify-between'>
          <TypographySpan className=' text-gray-500'>Khuyến mãi</TypographySpan>
          <PriceText className=' text-sm' price={0} />
        </li>
        <li className=' flex items-center justify-between'>
          <TypographySpan className=' text-gray-500'>Vận chuyển</TypographySpan>
          <PriceText className=' text-sm' price={0} />
        </li>
        <hr />

        <li className=' flex items-center justify-between'>
          <TypographySpan className=' font-bold'>Tổng tiền:</TypographySpan>
          <div className=' flex gap-1 items-center'>
            <PriceText className=' text-sm text-red-500 font-bold' price={order.total_price} />
            <TypographySpan > ({order.items.length}) </TypographySpan>
          </div>
        </li>
      </ul>

      <Button type="submit" className=' w-full'>Thanh toán</Button>
    </form>
  )
}