import { AddressInffo } from "./address";

interface Store extends AddressInffo {
  url_map: string
}

interface StoreParams{
  latitude?: string
  longitude?: string
}

export type { Store  , StoreParams}