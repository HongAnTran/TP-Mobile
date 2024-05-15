

type AddressType = "home" | "office"

interface AddressInffo {
  email: string | null; // Địa chỉ email của người nhận hàng (có thể là null)
  street: string; // 
  phone: string; // Số điện thoại liên hệ
  province: {
    code: number; // Mã code của thành phố
    name: string; // Tên của thành phố
  };
  district: {
    code: number; // Mã code của thành phố
    name: string; // Tên của thành phố
  }
  ward: {
    code: number; // Mã code của thành phố
    name: string; // Tên của thành phố
  }
}
interface Address extends AddressInffo {
  full_name: string
  type: AddressType
  isDefault: boolean
  // Các thuộc tính khác liên quan đến vận chuyển có thể được thêm vào đây
}
export type { Address, AddressInffo, AddressType }