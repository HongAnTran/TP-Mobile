import React from 'react'
import Link from './common/Link'
import { Button } from './ui/button'
import Image from 'next/image'

export default function NotFoundPage() {
    return (
        <div className="flex flex-col justify-center items-center py-10 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Ôi không! Trang không tồn tại</h2>
            <h4 className="text-gray-600 mt-2">
                Có vẻ như nội dung bạn đang tìm kiếm đã bị xóa hoặc không tồn tại. Hãy thử lại hoặc quay về trang chủ!
            </h4>
            <Image src="/notfound.jpg" alt="404 - Not Found" width={350} height={350} className="mt-5" />
            <div className="mt-5">
                <Link href="/">
                    <Button >
                        Quay về trang chủ
                    </Button>
                </Link>
            </div>
        </div>

    )
}
