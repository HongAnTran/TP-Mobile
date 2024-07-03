import { CheckboxItem } from "@/components/common/MutipleCheckbox";

type FilterColor = {
  label: string;
  value: string;
};
export const itemFilterColor: FilterColor[] = [
  {
    label: 'Đen',
    value: 'Đen'
  },
  {
    label: 'Trắng',
    value: 'Trắng'
  },
  {
    label: 'Vàng',
    value: 'Vàng'
  },
  {
    label: 'Xanh dương',
    value: 'Xanh dương'
  },
  {
    label: 'Xanh lá',
    value: 'Xanh lá'
  },
  {
    label: 'Đỏ',
    value: 'Đỏ'
  },
  {
    label: 'Xám',
    value: 'Xám'
  },
  {
    label: 'Bạc',
    value: 'Bạc'
  },
  {
    label: 'Hồng',
    value: 'Hồng'
  },
  {
    label: 'Trắng vàng',
    value: 'Trắng vàng'
  },
  {
    label: "Tím",
    value: "Tím"
  }
];

export const itemFilterDisk: CheckboxItem[] = [
  {
    label: '32 GB',
    value: '32GB'
  },
  {
    label: '64 GB',
    value: '64GB'
  }, {
    label: '128 GB',
    value: '128GB'
  },
  {
    label: '256 GB',
    value: '256GB'
  },
  {
    label: '512 GB',
    value: '512GB'
  },
  {
    label: '1T',
    value: '1T'
  },
  {
    label: '2T',
    value: '2T'
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
  // {
  //   label: 'Hàng mới',
  //   value: 'product_new'
  // },
  // {
  //   label: 'Khuyến mãi',
  //   value: 'product_sale'
  // },
];
