import { AddressInffo } from "./Address.type";

interface Store extends AddressInffo {
  url_map: string;
}

interface StoreImage {
  url: string;
  width: number;
  height: number;
}

interface StoreParams {
  latitude?: string;
  longitude?: string;
}

export type { Store, StoreParams, StoreImage };
