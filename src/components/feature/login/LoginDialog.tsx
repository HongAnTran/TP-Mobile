"use client"
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import React from 'react'
import LoginForm from './LoginForm'
import { useShopStore } from '@/providers/shop-store-provider'

export default function LoginDialog() {
    const { openLogin, setOpenLogin } = useShopStore(state => state)

    return (
        <Dialog open={true} onOpenChange={setOpenLogin}>
            <DialogContent className=' max-w-fit'>
                <DialogTitle>Đăng nhập</DialogTitle>
                <LoginForm />
            </DialogContent>
        </Dialog>
    )
}
