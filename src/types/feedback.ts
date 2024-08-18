import { StaticImageData } from "next/image"

interface Feedback {
  content?: string,
  customerName?: string,
  image: {
    src : string,
    widht:number,
    height:number
    alt?:string
  },
  rate: number
  
}
export type {Feedback}