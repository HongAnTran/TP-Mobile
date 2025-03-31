import { useQuery } from "@tanstack/react-query";
import { OptionsUseQuery, ResList } from "@/types/Common.type";
import CategoryServiceApi from "@/services/client/categoryService";
import { CategoryProduct } from "@/types/categoryProduct";

const CategoryServiceClient = {
  useList: (options?: OptionsUseQuery) => {
    return useQuery<ResList<CategoryProduct>, Error>({
      queryKey: ["category"],
      queryFn: () => CategoryServiceApi.getList(),
      staleTime: Infinity,
      ...options,
    });
  },
};

export default CategoryServiceClient;
