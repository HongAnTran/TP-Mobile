import React from 'react'
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from '../ui/select'

export default function MutipleSelect() {
  return (
    <Select>
      <SelectTrigger></SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Label</SelectLabel>
          {/* <SelectItem>…</SelectItem>
          <SelectItem>…</SelectItem>
          <SelectItem>…</SelectItem> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
