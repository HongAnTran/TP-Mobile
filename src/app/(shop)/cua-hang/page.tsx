import Breadcrumbs from '@/components/ui/Breadcrumbs'
import StoreServiceApi from '@/services/StoreService'
import React from 'react'
import StoreList from './_components/StoreList'

export default async function page() {

  const stores = await StoreServiceApi.getList()

  return (
    <div className=' my-8'>
      <div className=' container'>
        <Breadcrumbs breadcrumbsList={[
          {
            label: "Cửa hàng của TP Mobile",
            isActive: true
          }]} />
        <div className=' mt-8'>
          <StoreList stores={stores} />
        </div>
      </div>

    </div>
  )
}


