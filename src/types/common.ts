interface FilterBase {
  take?: number
  skip?: number
}

interface ResList<T>{
  datas : T[]
  total : number
}

export type { FilterBase,ResList}