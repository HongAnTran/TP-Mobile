interface Location {
  id: string,
  name: string,
  type: LocationTypeCode,
  name_with_type : string
  code: string,
  parent_code?: string
}

type LocationFilter = Pick<Location , "parent_code" | "type">

export enum LocationTypeCode {
  PROVINCE  = "PROVINCE",
  DISTRICT= "DISTRICT",
  WARD= "WARD",
}

export type { Location ,LocationFilter }