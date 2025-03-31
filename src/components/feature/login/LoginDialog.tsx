"use client"
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import React from 'react'
import LoginForm from './LoginForm'
import { useAuthStore } from '@/providers/auth-store-provider'

export default function LoginDialog() {
    const { openLogin, setOpenLogin } = useAuthStore(state => state)
    return (
        <Dialog open={openLogin} onOpenChange={setOpenLogin}>
            <DialogContent closeButton={null} className=' sm:w-full lg:max-w-fit p-0'>
                <DialogTitle ></DialogTitle>
                <LoginForm />
            </DialogContent>
        </Dialog>
    )
}
