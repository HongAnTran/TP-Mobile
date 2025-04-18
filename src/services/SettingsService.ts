import fetchApi from "@/api/instances/baseInstance";
import { ConfigAPi } from "@/types/Api.type";
import { Setting, SettingKeyType } from "@/types/Settings.type";
class SettingsService {
  private url: string = "/settings";

  constructor() {}
  async getDetail<T>(key: SettingKeyType, init?: ConfigAPi) {
    const setting = await fetchApi.get<Setting<T>>(`${this.url}/key/${key}`, {
      next: { tags: [this.url, key], revalidate: 60 * 60 * 24 * 3 },
      ...init,
    });
    return setting;
  }
}
const SettingsServiceApi = new SettingsService();
export default SettingsServiceApi;
