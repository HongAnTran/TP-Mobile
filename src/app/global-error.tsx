'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"


export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className=' flex  flex-col justify-center items-center min-h-[400px]'>
          <h2>Hê thống tạm thời gián đoạn<br /> vui lòng thử lại trong giây lát</h2>
          <Image src={"/500.jpg"} alt="error" width={500} height={500} />
          <Button onClick={() => reset()}>Thử lại</Button>
        </div>
      </body>
    </html>
  )
}