"use client"

import useWishlist from '@/hooks/useWishlist'
import React from 'react'

export default function Wishlist() 
{

  const  {wishlist}= useWishlist()
  return (
    <div>Wishlist</div>
  )
}
