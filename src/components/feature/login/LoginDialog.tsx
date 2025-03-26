import { Dialog } from '@/components/ui/dialog'
import { DialogContent } from '@radix-ui/react-dialog'
import React from 'react'
import LoginForm from './LoginForm'
import { useShopStore } from '@/providers/shop-store-provider'

export default function LoginDialog() {
    const { openLogin, setOpenLogin } = useShopStore(state => state)

    return (
        <Dialog open={openLogin} onOpenChange={setOpenLogin}>
            <DialogContent>
                <LoginForm />
            </DialogContent>
        </Dialog>
    )
}
