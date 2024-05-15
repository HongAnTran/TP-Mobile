import Breadcrumbs from '@/components/ui/Breadcrumbs'
import routes from '@/routes'
import { Product as ProductType } from '@/types/product'
import React from 'react'
import ProductDetail from '../_components/ProductDetail'
import ProductDescription from '../_components/ProductDescription'
import SectionCategoryCarousel from '@/components/feature/SectionCategoryCarousel'
import ProductsRecentViewList from '@/components/feature/ProductsRecentViewList'

export default function Product({product} :{product:ProductType}) {
  return (
    <div className=' my-8'>
      <div className=' container'>
        <Breadcrumbs breadcrumbsList={[
          
          {
            label: "Sản phẩm",
            slug : routes.products
          },

          {
          label: product.title,
          isActive: true
        }
      ]
        
        } />

        <div className=' mt-8'>
        <ProductDetail product={product} />
        </div>
        <div className=' mt-16'>
        <ProductDescription product={product} />
        </div>
        <div className=' mt-16'>
          <SectionCategoryCarousel title="Sản phẩm tương tự" productIds={[]} />
        </div>
        <div className=' mt-16'>
         <ProductsRecentViewList />
        </div>
      </div>
    </div>
  )
}
