'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className={'h-svh w-full'} >
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
        <span className='font-medium'>Rất tiếc đã có lỗi xảy ra {`:')`}</span>
        <p className='text-center text-muted-foreground'>
          Xin lỗi vì sự bất tiện này. <br /> Vui lòng thử lại sau.
        </p>
        <Image src="/500.jpg" alt="404 - Not Found" width={400} height={400} className="mt-5" />
        <div className='mt-6 flex gap-4'>
          <Button variant='outline' onClick={() => reset()}>
            Thử lại
          </Button>
        </div>
      </div>
    </div>
  )
}


