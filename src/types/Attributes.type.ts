interface Attribute {
  id: number
  name: string
  key :string
  style: AttributeStyle
}
export enum AttributeStyle {
  IMAGE = "IMAGE",
  COLOR = "COLOR",
  CIRCLE = "CIRCLE",
  RECTANGLE = "RECTANGLE",
  RADIO = "RADIO"
}
interface AttributeValue {
  id: number
  value: string
  slug: string
  hex_color: string | null
  attribute_id: number
}

export type { Attribute, AttributeValue }