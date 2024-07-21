interface Setting {
  id: number
  key: string
  value: object
  description: string | null
  access_control: number[]
  createdAt: Date
  updatedAt: Date | null
}

export type {Setting}