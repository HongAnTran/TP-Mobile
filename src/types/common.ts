import { QueryKey, UseQueryOptions } from "@tanstack/react-query"
import { CategoryProduct } from "./categoryProduct"

interface FilterBase {
  page?: number
  limit?: number
}

interface ResList<T>{
  datas : T[]
  total : number
}

type OptionsUseQuery = Omit<
  UseQueryOptions<any, any, any, QueryKey>,
  "queryKey" | "queryFn"
>
interface ValueFiter {
  color?: string[];
  price: number[];
  capacity?: string[]
  ram?: string[]
  chargerType?: string[]
  categories?: CategoryProduct["slug"][]
  keyword? : string
}
export type { FilterBase,ResList , OptionsUseQuery , ValueFiter}