
import fetchApiPublic from '@/api/instances/routerhandlersInstance'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import FeedbackList from './FeedbackList'

export default async function page() {

  return (
    <div className=' my-8'>
      <div className=' container'>
        <Breadcrumbs breadcrumbsList={[
          {
            label: "Feedback của khách hàng",

            isActive: true
          }
        ]} />
        <div className=' mt-2'>
          <FeedbackList />
        </div>
      </div>
    </div>
  )
}
