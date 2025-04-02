import { OrderStatus, ShippingType } from "@/types/Order.type"

const ShippingTypeOptions = [
  { label: 'Giao hàng tận nơi', value: ShippingType.SHIP },
  { label: 'Lấy tại cửa hàng', value: ShippingType.PICKUP },
];

const getShippingTypeLabel = (type: ShippingType) => {
  const option = ShippingTypeOptions.find(option => option.value === type);
  return option ? option.label : 'Không xác định';
}

const OrderStatusOptions = [
  {
    label : 'Đơn nháp',
    value : OrderStatus.DRAFT,
  },
  {
    label : 'Chờ xác nhận',
    value : OrderStatus.PENDING,
  },
  {
    label : 'Đang xử lý',
    value : OrderStatus.PROCESSING,
  },
  {
    label : 'Hoàn thành',
    value : OrderStatus.SUCCESS,
  },
  {
    label : 'Đã hủy',
    value : OrderStatus.CANCELLED,
  },
];

function getOrderStatusLabel(status: OrderStatus) {
  const option = OrderStatusOptions.find(option => option.value === status);
  return option ? option.label : 'Không xác định';
}

export { ShippingTypeOptions, getShippingTypeLabel,getOrderStatusLabel ,OrderStatusOptions };