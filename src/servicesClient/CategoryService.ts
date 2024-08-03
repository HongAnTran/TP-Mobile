import { useQuery } from "@tanstack/react-query";
import { OptionsUseQuery } from "@/types/common";
import CategoryServiceApi from "@/services/categoryService";
import { CategoryProduct } from "@/types/categoryProduct";

type DataQuery = CategoryProduct;
const CategoryServiceClient = {
  useList: (options?: OptionsUseQuery) => {
    return useQuery<DataQuery[], Error>(
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