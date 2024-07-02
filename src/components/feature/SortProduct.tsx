"use client"


import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { itemSort } from "@/data/filter"
import { objectToSearchParams, objectToSearchParamsValue } from "@/utils";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
interface ValueFiter {
  sortBy?: string
  sortType?: "asc" | "desc"
}
export function SortProduct({ searchParams }: { searchParams?: any }) {

  const defaultSort = convertparamSearchToValue(searchParams)

  const [valueFiter, setValueFilter] = useState<string>(defaultSort)
  const router = useRouter()
  const pathname = usePathname();

  function convertparamSearchToValue(params: ValueFiter) {
    if (!params.sortBy || !params.sortType) {
      return ""
    }

    if (params.sortType === "asc") {
      return "price_asc"
    }

    if (params.sortType === "desc") {
      return "price_desc"
    }

    return ""
  }

  function onChageValueFilter(value: string) {
    let query = { sortBy: "", sortType: "" }
    switch (value) {
      case "price_asc":
        query = {
          sortBy: "price",
          sortType: "asc"
        }
        break;
      case "price_desc":
        query = {
          sortBy: "price",
          sortType: "desc"
        }
        break;
    }
    setValueFilter(value)
    const valueSearch = objectToSearchParams(objectToSearchParamsValue({ ...searchParams, ...query  , page : 1}))
    const querySearch = valueSearch ? `?${valueSearch}` : "";
    window.history.pushState(null, '', querySearch)
    router.push(pathname + querySearch)
  }

  return (
    <ToggleGroup type="single" className=" justify-start"
      onValueChange={(value) => {
        onChageValueFilter(value)
      }}
      value={valueFiter}
    >
      {itemSort.map((item) => {
        return (
          <ToggleGroupItem key={item.value} value={item.value} className="data-[state=on]:font-bold  data-[state=on]:text-blue-600">
            {item.label}
          </ToggleGroupItem>
        )
      })}
    </ToggleGroup>
  )
}
