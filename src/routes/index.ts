import { access } from "fs";

const routes = {
  home: "/",
  api: "/api",
  artice: "/tin-tuc",
  search: "/tim-kiem",
  articeCategory: "/danh-muc-tin-tuc",
  products: "/san-pham",
  category: "/danh-muc",
  about: "/ve-chung-toi",
  stores: "/cua-hang",
  cart: "/gio-hang",
  checkout: "/thanh-toan",
  checkoutSuccess: "/thanh-toan/thanh-cong",
  checkoutFail: "/thanh-toan/that-bai",
  login: "/dang-nhap",
  register: "/dang-ky",
  feedback: "/feedback",
  compareProduct: "/so-sanh-san-pham",
  wishlist: "/yeu-thich",
  guaranteePolicy: "/chinh-sach-bao-hanh",
  endow: "/chinh-sach-uu-dai",
  changePolicy: "/chinh-sach-doi-tra",
  deliveryPolicy: "/chinh-sach-giao-hang",
  installmentPolicy: "/chinh-sach-tra-gop",
  introduce: "/gioi-thieu-tpmobile",
  registerConsultation: "/dang-ky-nhan-tu-van",
};

const privateRoutes = {
  account: "/tai-khoan",
  accountProfile: "/tai-khoan/thong-tin",
  accountAddress: "/tai-khoan/dia-chi",
  accountOrders: "/tai-khoan/don-hang",
  accountChangePassword: "/tai-khoan/doi-mat-khau",
};
export { privateRoutes };
export default routes;
