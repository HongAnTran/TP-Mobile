import { CheckboxItem } from "@/components/common/MutipleCheckbox";

type FilterColor = {
  label: string;
  value: string;
};

export const itemFilterColor: FilterColor[] = [
  {
    label: 'Vàng',
    value: 'yellow'
  },
  {
    label: 'Đỏ',
    value: 'red'
  },
  {
    label: 'Xanh',
    value: 'blue'
  }
];

export const itemFilterDisk: CheckboxItem[] = [
  {
    label: '32 GB',
    value: '32gb'
  },
  {
    label: '64 GB',
    value: '64gb'
  }, {
    label: '128 GB',
    value: '128gb'
  },
  {
    label: '256 GB',
    value: '256gb'
  },
  {
    label: '512 GB',
    value: '512gb'
  },
  {
    label: '1T',
    value: '1t'
  },
  {
    label: '2T',
    value: '2t'
  }

];
export const itemFilterRam: CheckboxItem[] = [
  {
    label: '2 GB',
    value: '2gb'
  },
  {
    label: '3 GB',
    value: '3gb'
  }, {
    label: '4 GB',
    value: '4gb'
  },
  {
    label: '6 GB',
    value: '6gb'
  },
  {
    label: '8 GB',
    value: '8gb'
  }


];

export const itemSort: CheckboxItem[] = [
  {
    label: 'Giá tăng dần',
    value: 'price_asc'
  },
  {
    label: 'Giá giảm dần',
    value: 'price_desc'
  },
  {
    label: 'Hàng mới',
    value: 'product_new'
  },
  {
    label: 'Khuyến mãi',
    value: 'product_sale'
  },


];
