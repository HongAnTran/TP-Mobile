"use client"

import InputController from '@/components/common/inputs/InputController'
import SelectController from '@/components/common/inputs/SelectController'
import PriceText from '@/components/common/PriceText'
import { Button } from '@/components/ui/button'
import { TypographySpan } from '@/components/ui/typography'
import { Location, LocationTypeCode } from '@/types/location'
import { Order, OrderCheckoutInput, OrderPickupStatus, PaymentMethod, PaymentStatus,ShippingType  } from '@/types/Order.type'
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import OrderServiceApi from '@/services/client/orderService'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import routes from '@/routes'
import BoxFixedBottom from '@/components/common/BoxFixedBottom'
import LocationServiceClient from '@/servicesClient/LocationService'
import { LoadingIcon } from '@/components/icons'
import useProfile from '@/hooks/useProfile'
import useCustomerAddress from '@/hooks/useCustomerAddress'
import ConditionView from '@/components/common/ConditionView'
import CustomerAddressList from './CustomerAddressList'
import { ShippingTypeOptions } from '@/consts/order'
import { RadioGroupItem , RadioGroup } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import useStores from '@/hooks/useStores'
import { Store } from '@/types/Store.type'
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
  phone: yup.string().trim().required("Vui lòng nhập").matches(vietnamPhoneRegex, "Số điện thoại không hợp lệ"), // Số điện thoại liên hệ
  street: yup.string().trim().when("shippingType", {
    is: ShippingType.SHIP, 
    then: (schema) => schema.required("Vui lòng nhập"),
    otherwise: (schema) => schema.notRequired(),
  }), // Đường
  province: yup.string().when("shippingType", {
    is: ShippingType.SHIP, 
    then: (schema) => schema.required("Vui lòng nhập"),
    otherwise: (schema) => schema.notRequired(),
  }),
  district: yup.string().when("shippingType", {
    is: ShippingType.SHIP, 
    then: (schema) => schema.required("Vui lòng nhập"),
    otherwise: (schema) => schema.notRequired(),
  }),
  ward: yup.string().when("shippingType", {
    is: ShippingType.SHIP, 
    then: (schema) => schema.required("Vui lòng nhập"),
    otherwise: (schema) => schema.notRequired(),
  }),
  type: AddressType,
  full_name: yup.string().trim().required("Vui lòng nhập"), // Tên của người nhận hàng
  note: yup.string(), 
  shippingType: yup.mixed<ShippingType>().oneOf([ShippingType.SHIP, ShippingType.PICKUP]),
});

export type Address = yup.InferType<typeof AddressInfoSchema>;

export default function CheckoutInfoForm({ order }: { order: Order }) {
  const { toast } = useToast()
  const router = useRouter()

  const { data : customer , isLoading : isLoadingCustomer } = useProfile()

  const [shippingType, setShippingType] = useState<ShippingType>(ShippingType.SHIP)
  const [storePickup, setStorePickup] = useState<Store | undefined>(undefined)

  const {data : address , isLoading : isLoadingAddress , isSuccess:isSuccessAddress} = useCustomerAddress(customer?.email || "", {
    enabled: !!customer?.email
  })


  const [isSubmit, setIsSubmit] = useState(false)
  const [location, setLocation] = useState<LocationState>({
    provices: [],
    districts: [],
    wards: [],
  })

  const { control, handleSubmit, watch, setValue, formState,trigger , ...res } = useForm<Address>({
    // defaultValues: order.shipping,
    resolver: yupResolver(AddressInfoSchema),
    mode : "onChange"
  })

  const watchProvice = watch("province")
  const watchDistrict = watch("district")


  const { data: provices } = LocationServiceClient.useList({ type: LocationTypeCode.PROVINCE })
  const { data: districts } = LocationServiceClient.useList({ type: LocationTypeCode.DISTRICT, parent_code: watchProvice }, {
    enabled: !!watchProvice
  })
  const { data: wards } = LocationServiceClient.useList({ type: LocationTypeCode.WARD, parent_code: watchDistrict }
    , {
      enabled: !!watchDistrict
    }
  )

  


  useEffect(() => {
    if (provices) {
      setLocation(pre => ({ ...pre, provices: provices }))
    }
  }, [provices])
  useEffect(() => {
    if (!districts) {
      return
    }
    setLocation(pre => ({ ...pre, districts: districts }))
    setValue("district", districts[0].code)
  }, [setValue, districts])

  useEffect(() => {
    if (!wards) {
      return
    }
    setLocation(pre => ({ ...pre, wards: wards }))
    setValue("ward", wards[0].code)
  }, [setValue, wards])


  useEffect(() => {
    setValue("district", "")
    setValue("ward", "")
  }, [watchProvice, setValue])

  useEffect(() => {
    if(customer){
      setValue("full_name", customer.full_name)
      setValue("email", customer.email)
      if(customer.phone){
        setValue("phone", customer.phone)
      }
    }
  }, [customer, setValue])

  useEffect(() => {
    trigger("shippingType")
  },[shippingType, trigger])

  async function onSubmit(data: Address) {
    try {
      setIsSubmit(true)
      let body: OrderCheckoutInput = {
        note: data.note,
        shipping_type : shippingType,
        payment: {
          create: {
            amount: order.total_price,
            method: PaymentMethod.COD,
            payment_date: null,
            status :PaymentStatus.PENDING
          }
        },
      }
      if(shippingType === ShippingType.PICKUP && storePickup){
          body = {
            ...body,
            pickup:{
             create:{
              fullname: data.full_name,
              phone: data.phone,
              email: data.email || null,
              note: data.note,
              status : OrderPickupStatus.PENDING,
              store:{
                connect:{
                  id: storePickup.id
                }
              }
             }
            }
          }
      }
      if(shippingType === ShippingType.SHIP){
        body = {
          ...body,
          shipping: {
            create: {
              email: data.email || null,
              fullname: data.full_name,
              address: data.street || "",
              province: data.province || "",
              country: "vi",
              district: data.district|| "",
              ward: data.ward|| "",
              phone: data.phone,
              address_full: `${data.street}, ${location.wards.find(ward => ward.code === data.ward)?.name_with_type}, ${location.districts.find(ward => ward.code === data.district)?.name_with_type}, ${location.provices.find(ward => ward.code === data.province)?.name_with_type}`,
            }
          }
        }
      }


      const res = await OrderServiceApi.checkoutClient(order.token, body)
      router.replace(`${routes.checkoutSuccess}/${res.token}`)
    } catch (error) {
      toast({ title: "Đã có lỗi xảy ra vui lòng thử lại hoặc liên hệ 0559.010.261" })
    } finally {
      setIsSubmit(false)
    }
  }



  return (
    <FormProvider 
      {...res} 
      control={control}
      handleSubmit={handleSubmit}
      setValue={setValue}
      watch={watch}
      formState={formState}
      trigger={trigger}
    >
      <p className=' mt-8'>Chọn hình thức giao hàng</p>
    <RadioGroup  defaultValue={shippingType.toString()}
      className=' flex lg:gap-8 lg:flex-row flex-col'
    onValueChange={(value) => {
      setValue("shippingType", +value as unknown as ShippingType)
      setShippingType(+value as unknown as ShippingType)
    }
    } >
      {ShippingTypeOptions.map((item)=>{
        return <div key={item.value} className="flex  items-center space-x-2">
          <RadioGroupItem value={item.value.toString()}className=' h-6 w-6' />
          <Label htmlFor={item.value.toString()} className=' text-lg'>{item.label}</Label>
        </div>
      })}
    </RadioGroup>

    <form onSubmit={handleSubmit(onSubmit)}>
      {/* {shippingType === ShippingType.SHIP && (
           <ConditionView isFallback={isLoadingCustomer || isLoadingAddress} fallBack={<div className=' h-40 flex items-center justify-center'> <LoadingIcon /> </div>}>
           <>
       {
           customer && isSuccessAddress ? <div className=' form-list flex flex-col gap-4 mt-4'>
             <CustomerAddressList customer={customer} addressList={address} />
             </div>  : <FormPublicInfo location={location} />
         }
       </>
     </ConditionView>
      )} */}
      {shippingType === ShippingType.SHIP  && <FormPublicInfo location={location} />}
      {shippingType === ShippingType.PICKUP && (<FormPickupInfo 
        onSelectStore={(store) => {
          setStorePickup(store)
        }}
        storeActive={storePickup}
      /> )}
   
    
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

      <Button type="submit" disabled={!formState.isValid || isSubmit} className='text-white w-full bg-red-500 hidden md:block'>

        {isSubmit && <LoadingIcon />}
        Đặt hàng
      </Button>

      <BoxFixedBottom >
        <Button type="submit" disabled={!formState.isValid || isSubmit} className='text-white font-bold uppercase flex gap-2  w-full bg-red-500'>
          {isSubmit && <LoadingIcon />}
          Đặt hàng{" "}
          <span className=' md:hidden'>

            ( <PriceText className=' text-sm text-white font-bold' price={order.total_price} />)
          </span>
        </Button>
      </BoxFixedBottom>
    </form>
    </FormProvider>

  )
}


function FormPublicInfo({
location
}:{
  location: LocationState,
}){
  const {control} = useFormContext()
  return     <div className=' form-list flex flex-col gap-4 mt-4'>
  <InputController inputProps={{ required: true }} label='Họ và tên' name="full_name" control={control} isShowError />
  <div className='   grid grid-cols-1 lg:grid-cols-2  gap-2'>
    <InputController inputProps={{ required: true }} isNumber label='Số điện thoại' name="phone" control={control} isShowError />
    <InputController label='Email' name="email" control={control} />
  </div>
  <div className=' grid grid-cols-1 lg:grid-cols-3 gap-2'>
    <SelectController
      required
      items={location.provices.map(item => {
        return { label: item.name_with_type, value: item.code.toString() }
      })}
      label='Tỉnh / thành'
      name="province"
      control={control} />

    <SelectController
      required

      items={location.districts.map(item => {
        return { label: item.name_with_type, value: item.code.toString() }
      })}
      label='Quận / huyện'
      name="district"
      control={control} />

    <SelectController
      required

      items={location.wards.map(item => {
        return { label: item.name_with_type, value: item.code.toString() }
      })}
      label='Phường / xã'
      name="ward"
      control={control} />
  </div>
  <InputController inputProps={{ required: true }} label='Tên đường' name="street" control={control} isShowError />
  <InputController label='Ghi chú' name="note" control={control} />
</div>
}

function FormPickupInfo({
  onSelectStore,
  storeActive
}:{
  onSelectStore?: (store: Store) => void
  storeActive?: Store
}){
  const {control} = useFormContext()
  const {data : stores  , isLoading , isSuccess} = useStores()

  function onChange(value: string){
    const store = stores?.find(item => item.id.toString() === value)
    if(store && onSelectStore){
      onSelectStore(store)
    }
  }

  useEffect(() => {
    if(stores && stores.length && !storeActive){
      onSelectStore?.(stores[0])
    }
  },[stores , onSelectStore, storeActive])

  if(isLoading){
    return <div className=' h-40 flex items-center justify-center'> <LoadingIcon /> </div>
  }

  if(!isSuccess || !stores?.length){
    return <div className=' h-40 flex items-center justify-center'> Không có cửa hàng nào </div>
  }

  return (
    <div className=' form-list flex flex-col gap-4 mt-4'>
      <InputController inputProps={{ required: true }} label='Họ và tên' name="full_name" control={control} isShowError />
      <div className='   grid grid-cols-1 lg:grid-cols-2  gap-2'>
        <InputController inputProps={{ required: true }} isNumber label='Số điện thoại' name="phone" control={control} isShowError />
        <InputController label='Email' name="email" control={control} />
      </div>
      <InputController label='Ghi chú' name="note" control={control} />


      <p>Chọn cửa hàng lấy hàng</p>
      <RadioGroup
        value={storeActive?.id?.toString()}
        className="flex flex-col gap-4"
        onValueChange={(value) => onChange(value)}
      >
        {stores.map((item) => (
          <div key={item.id.toString()} className="flex items-center space-x-2">
            <RadioGroupItem className=' h-6 w-6' value={item.id.toString()} />
            <Label htmlFor={item.id.toString()} className="text-lg">
              <div>
                <p className="font-medium  text-sm  lg:text-lg">{item.name} - {item.phone}</p>
                <p className="text-sm text-gray-500">{item.detail_address}</p>
              </div>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )

}
  