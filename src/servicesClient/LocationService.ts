import { useQuery } from "@tanstack/react-query";
import { OptionsUseQuery, ResList } from "@/types/common";
import LocationServiceApi from "@/services/locationService";
import { Location, LocationFilter } from "@/types/location";


const LocationServiceClient = {
  useList: (params : LocationFilter,options?: OptionsUseQuery) => {
    return useQuery<Location[] , Error>(
      {
        queryKey: ["Location" , JSON.stringify(params)],
        queryFn: () => LocationServiceApi.getList(params),
        staleTime: Infinity,
        ...options
      }
    );
  },
};


export default LocationServiceClient