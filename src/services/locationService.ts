
import districtsJson from "@/data/districts.json"
import wardsJson from "@/data/wards.json"
import provincesJson from "@/data/provinces.json"
import { Location } from "@/types/location";


class LocationService {
  private url: string = "/location";
  private provinces: Location[] = JSON.parse(JSON.stringify(provincesJson)) as Location[]
  private districts: Location[] = JSON.parse(JSON.stringify(districtsJson)) as Location[]
  private wards: Location[] = JSON.parse(JSON.stringify(wardsJson)) as Location[]

  constructor() { }

  async getListProvinces() {
   return this.provinces
  }

  async getListDistrictsByProvice(code: string) {
    return this.districts.filter(item => item.parent_code === code)
  }
  async getListWardsByDistricts(code: string) {
    return this.wards.filter(item => item.parent_code === code)
  }
}

const LocationServiceApi = new LocationService();
export default LocationServiceApi;
