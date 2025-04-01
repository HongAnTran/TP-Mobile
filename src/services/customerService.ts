import fetchApiAuth from "@/api/instances/authInstance";
import { Address, AddressCreate } from "@/types/Address.type";

import { Customer } from "@/types/Customer.type";

class CustomerService {
  private url: string = "/customers";

  constructor() {}

  async profile() {
    return fetchApiAuth.get<Customer>(`${this.url}/profile`);
  }

    async getListAddress() {
        return fetchApiAuth.get<Customer[]>(`${this.url}/address`);
    }

    async getDetailAddress(id: number) {
        return fetchApiAuth.get<Customer>(`${this.url}/address/${id}`);
    }

    async createAddress(data: AddressCreate) {
        return fetchApiAuth.post<Address>(`${this.url}/address`, data);
    }

    async updateAddress(data: Address) {
        return fetchApiAuth.patch<Address>(`${this.url}/address`, data);
    }

    async deleteAddress(id: number) {
        return fetchApiAuth.delete<Address>(`${this.url}/address/${id}`);
    }
}

const CustomerServiceApi = new CustomerService();
export default CustomerServiceApi;
