import Link from '@/components/common/Link'
import { Button } from '@/components/ui/button'
import routes from '@/routes'
import AuthServiceApi from '@/services/authService'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'


async function activeAccount(token: string) {
    try {
        await AuthServiceApi.active(token)
        return true
    } catch (error) {
        return false
    }
}

export default async function page({ params }: {
    params: { token: string }
}) {
    const { token } = params
    const isActiveSucssess = await activeAccount(token)
    if (!isActiveSucssess) {
        notFound()
    }

    return (
        <div className=' container min-h-screen'>
            <div className=' flex justify-center   flex-col items-center py-8'>
            <h2>Chào mừng bạn đến với TP Mobile Store</h2>
                <h4>Chúc mừng bạn đã xác minh tài khoản thành công đăng nhập ngay</h4>
                <Image alt="login" src="/register.svg" width={400} height={400} />

                <Link href={routes.login}>
                    <Button>
                        Đăng nhập ngay
                    </Button>
                </Link>
            </div>
        </div>
    )

}
