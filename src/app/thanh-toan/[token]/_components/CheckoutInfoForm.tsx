"use client"

import InputController from '@/components/common/inputs/InputController'
import SelectController from '@/components/common/inputs/SelectController'
import PriceText from '@/components/common/PriceText'
import { Button } from '@/components/ui/button'
import { TypographySpan } from '@/components/ui/typography'
import LocationServiceApi from '@/services/locationService'
import { Location } from '@/types/location'
import { Order, OrderCheckoutInput, PaymentStatus } from '@/types/order'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import OrderServiceApi from '@/services/orderService'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import routes from '@/routes'

interface LocationState {
  provices: Location[],
  districts: Location[],
  wards: Location[],
}

const AddressType = yup.mixed<'home' | 'office'>().oneOf(['home', 'office']);
const vietnamPhoneRegex = /^(0|\+84)[\s.-]?((3[2-9]|5[2689]|7[06-9]|8[1-689]|9[0-46-9])[\s.-]?\d{3}[\s.-]?\d{4}|\d{9})$/;
// Định nghĩa AddressInffo schema
const AddressInfoSchema = yup.object().shape({
  email: yup.string().nullable().email("Không đúng định dạng"), // Địa chỉ email của người nhận hàng (có thể là null)
  street: yup.string().required("Vui lòng nhập"), // Đường
  phone: yup.string().required("Vui lòng nhập").matches(vietnamPhoneRegex, "Số điện thoại không hợp lệ"), // Số điện thoại liên hệ
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

  const { toast } = useToast()
  const router = useRouter()

  const { control, handleSubmit, watch, setValue, formState } = useForm<Address>({
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

  async function onSubmit(data: Address) {
    try {
      const body: OrderCheckoutInput = {
        note: data.note,
        payment: {
          create: {
            amount: order.total_price,
            method: "cod",
            status: PaymentStatus.PENDING,
            payment_date: null
          }
        },
        shipping: {
          create: {
            fullname: data.full_name,
            address: data.street,
            province: data.province.code,
            country: "vi",
            district: data.district.code,
            ward: data.ward.code,
            phone: data.phone,
            address_full: `${data.street}, ${location.wards.find(ward => ward.code === data.ward.code)?.name}, ${location.districts.find(ward => ward.code === data.district.code)?.name}, ${location.provices.find(ward => ward.code === data.province.code)?.name}`,
          }
        }

      }

      const res = await OrderServiceApi.checkoutClient(order.id, body)

      router.replace(`${routes.checkoutSuccess}/${res.token}`)
    } catch (error) {
      // router.push(`${routes.checkoutFail}/${res.token}`)
      toast({ title: "Đặt hàng thất bại vui lòng thử lại" })

    }
  }



  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=' form-list flex flex-col gap-4 mt-4'>
        <InputController inputProps={{ required: true }} label='Họ và tên' name="full_name" control={control} isShowError />
        <div className='   grid grid-cols-1 lg:grid-cols-2  gap-2'>
          <InputController inputProps={{ required: true }} isNumber label='Số điện thoại' name="phone" control={control} isShowError />
          <InputController label='Email' name="email" control={control} />
        </div>
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-2'>
          <SelectController
            required
            items={location.provices.map(item => {
              return { label: item.name, value: item.code.toString() }
            })}
            label='Tỉnh / thành'
            name="province.code"
            control={control} />

          <SelectController
            required

            items={location.districts.map(item => {
              return { label: item.name, value: item.code.toString() }
            })}
            label='Quận / huyện'
            name="district.code"
            control={control} />

          <SelectController
            required

            items={location.wards.map(item => {
              return { label: item.name, value: item.code.toString() }
            })}
            label='Phường / xã'
            name="ward.code"
            control={control} />
        </div>
        <InputController inputProps={{ required: true }} label='Tên đường' name="street" control={control} isShowError />
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
          <PriceText className=' text-sm' price={0} notAutoChange />
        </li>
        <li className=' flex items-center justify-between'>
          <TypographySpan className=' text-gray-500'>Vận chuyển</TypographySpan>
          <PriceText className=' text-sm' price={0} notAutoChange />
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

      <Button type="submit" disabled={!formState.isValid} className='text-white w-full bg-red-500 hidden md:block'>
        Đặt hàng
      </Button>


      <div className='md:hidden fixed  shadow-xl bottom-0 left-0 right-0 w-ful p-2 bg-white  z-40'>
        <Button type="submit" disabled={!formState.isValid} className='text-white font-bold uppercase flex gap-2  w-full bg-red-500'>
          Đặt hàng{" "}
          <span className=' md:hidden'>

            ( <PriceText className=' text-sm text-white font-bold' price={order.total_price} />)
          </span>
        </Button>
      </div>
    </form>
  )
}
