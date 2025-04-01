import fetchApiClient from "@/api/instances/clientInstance";
import { ConfigAPi } from "@/types/Api.type";
import { Address, AddressCreate, AddressUpdate} from "@/types/Address.type";

class AddressServiceClient {
  private url: string = "/address";

  constructor() {}
  async getDetail(id: number, init?: ConfigAPi) {
    const data = await fetchApiClient.get<Address>(`${this.url}/${id}`, {
      ...init,
    });
    return data;
  }

  async getList( init?: ConfigAPi) {
    const data = await fetchApiClient.get<Address[]>(`${this.url}`, {
      ...init,
    });
    return data;
  }
  
  async create(data: AddressCreate, init?: ConfigAPi) {
    const res = await fetchApiClient.post<Address>(`${this.url}/create`, data, {
      ...init,
    });
    return res;
  }

  async update(data: AddressUpdate, init?: ConfigAPi) {
    const res = await fetchApiClient.post<Address>(`${this.url}/edit`, data, {
      ...init,
    });
    return res;
  }
  async delete(id: number, init?: ConfigAPi) {
    const res = await fetchApiClient.post<Address>(`${this.url}/delete/${id}`, {
      ...init,
    });
    return res;
  }
}
const AddressServiceClientApi = new AddressServiceClient();
export default AddressServiceClientApi;
