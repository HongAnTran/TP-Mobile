"use client"
import fetchApiPublic from '@/api/instances/routerhandlersInstance'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function FeedbackList() {

  const [images , setImages] = useState<string[]>([])

  useEffect(()=>{
  (async()=>{

    const images = await fetchApiPublic.get<string[]>("/images")
    setImages(images)

  })()

  },[])

  return (
    <div className='  grid grid-cols-3 gap-2'>
    {images.map((src, index) => (
      <Card key={index}>
        <CardContent className=' pt-4'>
          <Image src={src} alt={`Image ${index}`} width={280} height={280}  className=' w-full h-auto' />
        </CardContent>
      </Card>
    ))}
  </div>
  )
}