interface FilterBase {
  page?: number
  limit?: number
}

interface ResList<T>{
  datas : T[]
  total : number
}

export type { FilterBase,ResList}