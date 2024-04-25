"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { ReactNode, useState } from "react"
import { Label } from "../ui/label"
import { cn } from "@/lib/utils"

export interface CheckboxItem {
  value: string,
  label?: ReactNode

}

export interface MutipleCheckboxProps {
  items: CheckboxItem[]
  defaultValue?: CheckboxItem["value"][]
  onChange?: (values: CheckboxItem["value"][]) => void
  className?: string
}

export default function MutipleCheckbox({ items, defaultValue = [], onChange, className }: MutipleCheckboxProps) {

  const [values, setValues] = useState(defaultValue)

  function onCheck(value: CheckboxItem["value"]) {
    let newValues = []
    if (values.includes(value)) {
      newValues = values.filter(item => item !== value)
    } else {
      newValues = [...values, value]
    }
    setValues(newValues)
    onChange?.(newValues)
  }

  return (
    <div className={cn(" flex flex-col gap-2", className)}>
      {items.map(item => {
        return (
          <div className="flex items-center space-x-2" key={item.value}>
            <Checkbox id={item.value} value={item.value} checked={values.includes(item.value)}
              onClick={() => onCheck(item.value)}
            />
            <Label
              htmlFor={item.value}

            >
              {item.label}
            </Label>
          </div>

        )
      })}
    </div>
  )
}
