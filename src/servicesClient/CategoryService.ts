import { useQuery } from "@tanstack/react-query";
import { OptionsUseQuery, ResList } from "@/types/Common.type";
import CategoryServiceApi from "@/services/client/categoryService";
import {
  CategoryProduct,
  CategoryProductFilter,
} from "@/types/categoryProduct";

const CategoryServiceClient = {
  useList: (params?: CategoryProductFilter, options?: OptionsUseQuery) => {
    return useQuery<ResList<CategoryProduct>, Error>({
      queryKey: ["category", params],
      queryFn: () => CategoryServiceApi.getList(params),
      staleTime: Infinity,
      ...options,
    });
  },
};

export default CategoryServiceClient;
