"use client"
import { getDeviceType } from '@/utils/device'
import  { useEffect, useState } from 'react'

export default function useGetTypeDevice() {
  const [type, setType] = useState<"tablet" | "mobile" | "desktop">("mobile")
  useEffect(() => {
    const type = getDeviceType()
    setType(type)
  }, [])

  return type
}
