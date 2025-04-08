import Breadcrumbs from '@/components/ui/Breadcrumbs'
import routes from '@/routes'
import { Product as ProductType } from '@/types/Product.types'
import React from 'react'
import ProductDetail from '../_components/ProductDetail'
import ProductDescription from '../_components/ProductDescription'
import ProductsRecentViewList from '@/components/feature/ProductsRecentViewList'
import LayoutContainer from '@/layouts/LayoutContainer'
import ProductCarousel from '@/components/common/product/ProductCarousel'
import { CategoryProduct } from '@/types/categoryProduct'
import ProductsServiceApi from '@/services/ProductsService'
import StoreServiceApi from '@/services/StoreService'
import { SearchParams } from '@/types/Common.type'
import SETTINGS from '@/consts/config'
import dynamic from 'next/dynamic'
const ProductRatingSection = dynamic(() => import('../_components/ProductRatingSection'), { ssr: false })
export default async function Product({ product, searchParams }: { product: ProductType, searchParams: SearchParams }) {
  const stores = await StoreServiceApi.getList()
  const params = searchParams[SETTINGS.KEY_ACTIVE_OPTIONS] as string || ""
  const variantSKU = params
  const variantActive = product.variants.find(variant => variant.sku === variantSKU) || product.variants[0]
  const groups = product.attributes
  const attribute_values = variantActive?.attribute_values || []

  const optionsDefault = groups.map(group => {
    const actribute = attribute_values.find(op => group.attribute.id === op.attribute_id)
    return actribute?.id as number
  }).filter(Boolean)

  return (
    <LayoutContainer>
      <>
        <div className=' pt-4'>
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
        </div>
        <div className=' mt-6'>
          <ProductDetail product={product} stores={stores} optionsDefault={optionsDefault.length ? optionsDefault : undefined} />
        </div>
        <div className=' mt-10'>
          <ProductDescription product={product} />
        </div>
        <div className=' mt-10'>
        <div className='grid grid-cols-12 gap-4'>
        <div className=' col-span-12 lg:col-span-8 scroll-m-24' id='rating'>
        <ProductRatingSection product={product} />
          </div>
        <div className=' col-span-12 lg:col-span-4'>
          </div>
          </div>
        </div>
        <div className=' mt-16'>
        <ProductRelated categoryId={product.category_id} productId={product.id} />
        </div>
        <div className=' mt-16'>
          <ProductsRecentViewList />
        </div>
      </>
    </LayoutContainer>
  )
}

async function ProductRelated({ categoryId, productId }: { productId: ProductType["id"], categoryId: CategoryProduct['id'] }) {
  const { datas } = await ProductsServiceApi.getList({ limit: 8, category_id: categoryId })
  return (
    <ProductCarousel title="Sản phẩm tương tự" products={datas.filter(product => product.id !== productId)} />
  )
}

