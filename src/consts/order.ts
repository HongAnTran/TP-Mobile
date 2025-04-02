import { ShippingType } from "@/types/Order.type"

const ShippingTypeOptions = [
  { label: 'Giao hàng tận nơi', value: ShippingType.SHIP },
  { label: 'Lấy tại cửa hàng', value: ShippingType.PICKUP },
];

const getShippingTypeLabel = (type: ShippingType) => {
  const option = ShippingTypeOptions.find(option => option.value === type);
  return option ? option.label : 'Không xác định';
}

export { ShippingTypeOptions, getShippingTypeLabel };