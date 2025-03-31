import { Location, LocationFilter, LocationTypeCode } from "@/types/location";
import provincesJson from "@/data/provinces.json";
import districtsJson from "@/data/districts.json";
import wardsJson from "@/data/wards.json";
class LocationService {
  private url: string = "/location";
  provinces: Location[] = JSON.parse(JSON.stringify(provincesJson));
  districts: Location[] = JSON.parse(JSON.stringify(districtsJson));
  wards: Location[] = JSON.parse(JSON.stringify(wardsJson));
  constructor() {}

  async getList(params: LocationFilter) {
    const { type, parent_code } = params;

    switch (type) {
      case LocationTypeCode.PROVINCE:
        return this.provinces;
      case LocationTypeCode.DISTRICT:
        return this.districts.filter(
          (item) => item.parent_code === parent_code
        );
      case LocationTypeCode.WARD:
        return this.wards.filter((item) => item.parent_code === parent_code);
      default:
        return [];
    }

    // return fetchApi.get<Location[]>(`${this.url}`, {
    //   params,
    // });
  }
}

const LocationServiceApi = new LocationService();
export default LocationServiceApi;
