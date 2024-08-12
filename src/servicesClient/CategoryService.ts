import { useQuery } from "@tanstack/react-query";
import { OptionsUseQuery, ResList } from "@/types/common";
import CategoryServiceApi from "@/services/categoryService";
import { CategoryProduct } from "@/types/categoryProduct";

const CategoryServiceClient = {
  useList: (options?: OptionsUseQuery) => {
    return useQuery<ResList<CategoryProduct>, Error>(
      {
        queryKey: ["category"],
        queryFn: () => CategoryServiceApi.getList(),
        staleTime: Infinity,
        ...options
      }
    );
  },
};


export default CategoryServiceClient