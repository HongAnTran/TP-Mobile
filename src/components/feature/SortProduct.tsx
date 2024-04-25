"use client"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { itemSort } from "@/data/filter"

export function SortProduct() {
  return (
    <ToggleGroup type="single" className=" justify-start">
      {itemSort.map((item) => {
        return (
          <ToggleGroupItem key={item.value} value={item.value}  className="data-[state=on]:font-bold  data-[state=on]:text-blue-600">
            {item.label}
          </ToggleGroupItem>
        )
      })}

    </ToggleGroup>
  )
}
