import Breadcrumbs from '@/components/ui/Breadcrumbs'
import ProductSpecificationsServiceApi from '@/services/productSpecifications'
import CompareProduct from './CompareProduct'

export default async function page() {


  const types = await ProductSpecificationsServiceApi.getListType()
  const groups = await ProductSpecificationsServiceApi.getListGroup()


  return (
    <div className=' my-8'>

      <div className=' container'>
        <Breadcrumbs breadcrumbsList={[
          {
            label: "So sánh sản phẩm",
            isActive: true
          }]} />
        <CompareProduct types={types} groups={groups} />
      </div>
    </div>
  )
}


