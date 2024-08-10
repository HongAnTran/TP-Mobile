import { useQuery } from "@tanstack/react-query";
import { OptionsUseQuery } from "@/types/common";
import ProductSpecificationsServiceApi from "@/services/productSpecifications";
import { ProductSpecifications } from "@/types/Product.types";

const SpesServiceClient = {
  useList: (id: number, options?: OptionsUseQuery) => {
    return useQuery<ProductSpecifications[], Error>(
      {
        queryKey: ["ProductSpecificationsServiceApi",id],

        queryFn: () => ProductSpecificationsServiceApi.getList({ product_id: id }),
        staleTime: Infinity,
        ...options
      }
    );
  },
  useListMutiple: (ids: number[], options?: OptionsUseQuery) => {
    return useQuery<ProductSpecifications[][], Error>(
      {
        queryKey: ["ProductSpecificationsUseListMutiple" , ids],

        queryFn: async () => {
          let datas: ProductSpecifications[][] = []
          for await (const id of ids) {
            const res = await ProductSpecificationsServiceApi.getList({ product_id: id })
            datas.push(res)
          }
          return datas
        },
        staleTime: Infinity,
        ...options
      }
    );
  },
};


export default SpesServiceClient