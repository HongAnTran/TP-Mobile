'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"


export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  const route = useRouter()

  return (
    <div className={'h-svh w-full'} >
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
        <h1 className='text-[7rem] font-bold leading-tight'>500</h1>

        <span className='font-medium'>Rất tiếc đã có lỗi xảy ra {`:')`}</span>
        <p className='text-center text-muted-foreground'>
          Xin lỗi vì sự bất tiện này. <br /> Vui lòng thử lại sau.
        </p>

        <div className='mt-6 flex gap-4'>
          <Button variant='outline' onClick={() => reset()}>
            Thử lại
          </Button>
          <Button onClick={() => route.push('/')}>Trở về trang chủ</Button>
        </div>

      </div>
    </div>
  )
}


