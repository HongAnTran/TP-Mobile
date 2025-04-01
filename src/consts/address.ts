import { AddressType } from "@/types/Address.type";

const AddressTypeOptions = [
  { label: 'Nhà riêng', value: AddressType.HOME },
  { label: 'Văn phòng', value: AddressType.WORK },
    { label: 'Khác', value: AddressType.OTHER }
];

const getAddressTypeLabel = (type: AddressType) => {
  const option = AddressTypeOptions.find(option => option.value === type);
  return option ? option.label : 'Không xác định';
}

export { AddressTypeOptions, getAddressTypeLabel };