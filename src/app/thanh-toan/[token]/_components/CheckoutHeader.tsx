
import Logo from '@/components/common/Logo'
import Steps, { StepProps } from '@/components/common/Steps';
import React from 'react'

export default function CheckoutHeader() {
  const steps: StepProps[] = [
    {
      label: 'Cửa hàng',
      link: '/home',
      status: 'completed',
    },
    {
      label: 'Giỏ hàng',
      link: '/cart',
      status: 'completed',
    },
    {
      label: 'Thanh toán',
      link: '#',
      status: 'active',
    },
    {
      label: 'Xác nhận',
      link: '#',
      status: 'pending',
    },
  ];
  return (
    <div className="flex flex-col justify-between items-center border-b bg-white py-4 sm:flex-row sm:px-10">
      <Logo className=' text-primary' />
      <Steps steps={steps} />
    </div>
  )
}
