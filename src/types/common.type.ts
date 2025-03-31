import { QueryKey, UseQueryOptions } from "@tanstack/react-query";
import { CategoryProduct } from "./categoryProduct";

interface PaginationParams<t = unknown> {
  page?: number;
  limit?: number;
  sort_by?: keyof t;
  sort_type?: "desc" | "asc";
}

interface ResList<T> {
  datas: T[];
  total: number;
}

type OptionsUseQuery = Omit<
  UseQueryOptions<any, any, any, QueryKey>,
  "queryKey" | "queryFn"
>;
type ValueFiter = {
  price: number[];
  categories?: CategoryProduct["slug"][];
  keyword?: string;
  page: number;
  [x: string]: number[] | string[] | string | undefined | number;
};

type SearchParams = { [key: string]: string | string[] | undefined };

export type {
  PaginationParams,
  ResList,
  OptionsUseQuery,
  ValueFiter,
  SearchParams,
};
