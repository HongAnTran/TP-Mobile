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
type ValueFiter =  {
  price: number[];
  categories?: CategoryProduct["slug"][]
  keyword? : string,
  page : number
  [x: string]: number[] | string[] | string | undefined | number;
}
export type { FilterBase,ResList , OptionsUseQuery , ValueFiter}