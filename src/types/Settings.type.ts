import { SETTINGKEYS } from "@/consts/settingsKey";

interface Setting<T> {
  id: number;
  key: string;
  value: T;
  description: string | null;
  access_control: number[];
  createdAt: Date;
  updatedAt: Date | null;
}
type SettingKeyType = (typeof SETTINGKEYS)[keyof typeof SETTINGKEYS];

type MenuSettings = {
  slug: string;
  children: MenuSettings[];
};

export type { Setting, SettingKeyType, MenuSettings };
