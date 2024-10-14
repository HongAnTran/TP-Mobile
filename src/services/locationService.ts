import { Location, LocationFilter } from "@/types/location";
import fetchApi from "@/api/instances/baseInstance";

class LocationService {
  private url: string = "/location";

  constructor() {}

  async getList(params: LocationFilter) {
    return fetchApi.get<Location[]>(`${this.url}`, {
      params,
      isLogger : true
    });
  }
}

const LocationServiceApi = new LocationService();
export default LocationServiceApi;
