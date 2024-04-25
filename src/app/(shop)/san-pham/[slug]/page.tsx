import React from 'react'
import { notFound } from 'next/navigation'

import ProductsServiceApi from '@/services/productService'

import Breadcrumbs from '@/components/ui/Breadcrumbs'
import ProductDetail from '../_components/ProductDetail'
import ProductDescription from '../_components/ProductDescription'
import SectionCategoryCarousel from '@/components/feature/SectionCategoryCarousel'
import routes from '@/routes'

export default async function page({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const product = await ProductsServiceApi.getDetail(slug)

  if (!product) {
    notFound()
  }

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
          <SectionCategoryCarousel title="Xem gần đây" productIds={[]} />
        </div>
      </div>
    </div>
  )
}
