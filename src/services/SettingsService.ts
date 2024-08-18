import fetchApi from "@/api/instances/baseInstance";
import { ConfigAPi } from "@/types/api";
import { Setting, SettingKeyType } from "@/types/Settings.type";

class SettingsService {
  private url: string = "/settings";

  constructor() { }
  async getDetail<T>(key: SettingKeyType , init?:ConfigAPi) {
    const product = await fetchApi.get<Setting<T>>(`${this.url}/key/${key}`, {
      next: { revalidate: 60 },
      ...init
    });
    return product
  }
}

const SettingsServiceApi = new SettingsService();
export default SettingsServiceApi;
