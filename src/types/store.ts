import { AddressInffo } from "./address";

interface Store extends AddressInffo {
  id: number
  title: string
  map_url: string
}

export type {Store}