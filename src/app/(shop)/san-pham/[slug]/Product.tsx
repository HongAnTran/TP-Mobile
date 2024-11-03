import Breadcrumbs from '@/components/ui/Breadcrumbs'
import routes from '@/routes'
import { Product as ProductType } from '@/types/Product.types'
import React, { Suspense } from 'react'
import ProductDetail from '../_components/ProductDetail'
import ProductDescription from '../_components/ProductDescription'
import ProductsRecentViewList from '@/components/feature/ProductsRecentViewList'
import LayoutContainer from '@/layouts/LayoutContainer'
import ProductCarousel from '@/components/common/product/ProductCarousel'
import { CategoryProduct } from '@/types/categoryProduct'
import ProductsServiceApi from '@/services/ProductsService'
import StoreServiceApi from '@/services/StoreService'
import { TabsTrigger, Tabs, TabsContent, TabsList } from '@/components/ui/tabs';
import ProductsSkeleton from '@/components/common/product/ProductsSkeleton'
import { SearchParams } from '@/types/common.type'
import SETTINGS from '@/consts/settings'
export default async function Product({ product, searchParams }: { product: ProductType, searchParams: SearchParams }) {
  const stores = await StoreServiceApi.getList()
  const params = searchParams[SETTINGS.KEY_ACTIVE_OPTIONS] as string || ""
  const optionsSlug = params.split(",")
  const variantActive = product.variants.find(variant => variant.attribute_values.every(value => optionsSlug.includes(value.slug)))
  const groups = product.attributes
  const attribute_values = variantActive?.attribute_values || []
  const optionsDefault = groups.map(group => {
    const actribute = attribute_values.find(op => group.attribute.id === op.attribute_id)
    return actribute?.id as number
  }).filter(Boolean)
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
        <div className=' mt-6'>
          <ProductDetail product={product} stores={stores} optionsDefault={optionsDefault.length ? optionsDefault : undefined} />
        </div>
        <div className=' mt-16'>
          <ProductDescription product={product} />
        </div>
        <div className=' mt-16'>
          <Tabs defaultValue={product.related.length ? "buy" : "related"} className="w-full">
            <TabsList >
              {product.related.length ? <TabsTrigger value="buy" >Phụ kiện mua kèm</TabsTrigger> : null}

              <TabsTrigger value="related">Sản phẩm tương tự</TabsTrigger>
            </TabsList>
            {product.related.length ? <TabsContent value="buy" className=' w-full'>
              <Suspense fallback={<ProductsSkeleton />}>
                <ProductBuy ids={product.related} />
              </Suspense>

            </TabsContent> : null}

            <TabsContent value="related" className=' w-full'>
              <Suspense fallback={<ProductsSkeleton />}>
                <ProductRelated categoryId={product.category_id} productId={product.id} />
              </Suspense>
            </TabsContent>
          </Tabs>
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
async function ProductBuy({ ids }: { ids: number[] }) {
  const { datas } = await ProductsServiceApi.getList({ limit: 8, ids: ids.join(",") })
  return (
    <ProductCarousel title="Phụ kiện mua kèm" products={datas} />
  )
}
