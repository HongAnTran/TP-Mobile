import { Gender } from "@/types/Customer.type";

const GENDER_OPTIONS = [
  {
    value: Gender.FEMALE,
    label: "Nữ",
  },
  {
    value: Gender.MALE,
    label: "Nam",
  },
  {
    value: Gender.OTHER,
    label: "Khác",
  },
];

export function getGenderLabel(value:Gender){
  return GENDER_OPTIONS.find((option) => option.value === value)?.label || "Khác";
}

export { GENDER_OPTIONS };
