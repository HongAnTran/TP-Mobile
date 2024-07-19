interface Location {
  id: string,
  name: string,
  type: LocationTypeCode,
  code: string,
  parent_code?: string
}
enum LocationTypeCode {
  PROVINCE  = "PROVINCE",
  DISTRICT= "DISTRICT",
  WARD= "WARD",
}

export type { Location , LocationTypeCode }