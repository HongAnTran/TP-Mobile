import Breadcrumbs from '@/components/ui/Breadcrumbs'
import ProductSpecificationsServiceApi from '@/services/productSpecifications'
import CompareProduct from './CompareProduct'

export default async function page() {


  const types = await ProductSpecificationsServiceApi.getListType()


  return (
    <div className=' my-8'>

      <div className=' container'>
        <Breadcrumbs breadcrumbsList={[
          {
            label: "So sánh sản phẩm",
            isActive: true
          }]} />
        <CompareProduct types={types} />
      </div>
    </div>
  )
}


