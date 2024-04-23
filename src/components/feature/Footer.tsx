import React from 'react'
import { TypographyH3 } from '../ui/typography'
import Logo from '../common/Logo'

export default function Footer() {
  return (
    <footer className=' bg-primary h-[100px]'  >
      <div className=' container flex  h-full items-center'>

        <Logo />

      </div>
    </footer>
  )
}
