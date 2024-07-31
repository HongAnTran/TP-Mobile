import Breadcrumbs from '@/components/ui/Breadcrumbs'
import routes from '@/routes'
import { Product as ProductType } from '@/types/Product.types'
import React from 'react'
import ProductDetail from '../_components/ProductDetail'
import ProductDescription from '../_components/ProductDescription'
import ProductsRecentViewList from '@/components/feature/ProductsRecentViewList'
import LayoutContainer from '@/layouts/LayoutContainer'
import ProductCarousel from '@/components/common/ProductCarousel'
import { CategoryProduct } from '@/types/categoryProduct'
import ProductsServiceApi from '@/services/productService'
import SectionFeedback from '@/components/feature/SectionFeedback'

export default function Product({ product }: { product: ProductType }) {
  return (
    <LayoutContainer>
      <>
        <Breadcrumbs breadcrumbsList={[

          {
            label: "Sản phẩm",
            slug: routes.products
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
          <ProductRelated categoryId={product.category_id} productId={product.id} />
        </div>
        <div className=' mt-16'>
          <ProductsRecentViewList />
        </div>
        <div className=' mt-16'>
          <SectionFeedback/>
        </div>
      </>
    </LayoutContainer>
  )
}

async function ProductRelated({ categoryId, productId }: { productId: ProductType["id"], categoryId: CategoryProduct['id'] }) {
  const { datas } = await ProductsServiceApi.getList({ limit: 12, category_id: categoryId })
  return (
    <ProductCarousel title="Sản phẩm tương tự" products={datas.filter(product => product.id !== productId)} />
  )
}
