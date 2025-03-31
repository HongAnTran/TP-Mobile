"use client"
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import React from 'react'
import { useAuthStore } from '@/providers/auth-store-provider'
import RegisterForm from './RegisterForm'

export default function RegisterDialog() {
    const { openRegister, setOpenRegister } = useAuthStore(state => state)
    return (
        <Dialog open={openRegister} onOpenChange={setOpenRegister}>
            <DialogContent closeButton={null} className=' sm:w-full lg:max-w-fit p-0'>
                <DialogTitle ></DialogTitle>
                <RegisterForm />
            </DialogContent>
        </Dialog>
    )
}
