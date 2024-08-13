"use client"
import React, { useEffect, useState } from 'react'
import IconBorder from '../common/IconBorder'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import SearchInput from './SearchInput'
import { usePathname } from 'next/navigation'
import SearchIcon from '@mui/icons-material/Search';
export default function SearchHeaderMobile() {
  const [open, setOpen] = useState(false)

  const path = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [path])
  return (
    <>
      <IconBorder onClick={() => setOpen(true)}>

        <SearchIcon className=' w-7 h-7 text-secondary' />
      </IconBorder>
      <Drawer open={open} onClose={() => setOpen(false)} modal>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Tìm kiếm sản phẩm</DrawerTitle>
          </DrawerHeader>
          <div className=' min-h-[480px] md:min-h-[600px] p-4'>
            <SearchInput className=' text-white bg-primary' />
          </div>
        </DrawerContent>
      </Drawer>

    </>
  )
}
