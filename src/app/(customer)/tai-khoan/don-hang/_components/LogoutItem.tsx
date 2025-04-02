"use client"
import { useToast } from '@/components/ui/use-toast'
import routes from '@/routes'
import AuthServiceClientApi from '@/services/client/authService'
import { ExitIcon } from '@radix-ui/react-icons'
import React from 'react'

export default function LogoutItem() {

  const {toast} = useToast()
 async function handleLogout() {
    try {
        await AuthServiceClientApi.logout()
        location.href = routes.home
    } catch (error) {
        toast({
          title: "Đăng xuất không thành công",
          description: "Vui lòng thử lại sau",
          variant: "destructive",
        })
    }
  }
  return (
    <li className=' px-3 flex gap-2 items-center p-1 hover:bg-slate-200   cursor-pointer'
    onClick={handleLogout}
    >
        <ExitIcon />
      Đăng xuất
      </li>
  )
}
