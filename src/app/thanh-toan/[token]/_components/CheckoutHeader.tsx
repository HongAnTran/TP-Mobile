
import Logo from '@/components/common/Logo'
import Steps, { StepProps } from '@/components/common/Steps';
import React from 'react'

export default function CheckoutHeader({steps} : { steps : StepProps[]}) {

  return (
    <div className="flex   justify-center items-center border-b bg-white py-4 lg:flex-row sm:px-4">
      <Steps steps={steps} />
    </div>
  )
}
