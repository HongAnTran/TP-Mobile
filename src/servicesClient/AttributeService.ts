import { useQuery } from "@tanstack/react-query";
import { Attribute, AttributeValue } from "@/types/Attributes.type";
import { OptionsUseQuery } from "@/types/Common.type";
import AttributeServiceApi from "@/services/AttributeService";
type DataQuery = Attribute;

const AttributeServiceClient = {
  useList: (options?: OptionsUseQuery) => {
    return useQuery<DataQuery[], Error>({
      queryKey: ["attributes"],
      queryFn: () => AttributeServiceApi.getList(),
      staleTime: Infinity,
      ...options,
    });
  },
  useListValue: (
    params?: { attribute_id: number },
    options?: OptionsUseQuery
  ) => {
    return useQuery<AttributeValue[], Error>({
      queryKey: ["attributes", params?.attribute_id],
      queryFn: () => AttributeServiceApi.getListValue(params),
      staleTime: Infinity,
      ...options,
    });
  },
};

export default AttributeServiceClient;
