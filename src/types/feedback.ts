import { StaticImageData } from "next/image"

interface Feedback {
  id: number
  content: string,
  customerName: string,
  image: StaticImageData,
  rate: number
}
export type {Feedback}