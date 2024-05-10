import React from 'react'
import ButtonUpToTop from '../feature/ButtonUpToTop'
import { Button } from '../ui/button'
import { MessageIcon, MessengerIcon, ZaloIcon } from '../icons'
import Link from 'next/link'
import Chatbox from '../feature/Chatbox'

export default function ListStickyButton() {
  return (
    <div className=' fixed bottom-20 right-4'>
      <div className=' flex flex-col gap-4'>
        <Link href={"https://www.facebook.com/messages/t/100369039524995"} target="_blank">
          <Button size="icon" variant="link" className=' relative'>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full  bg-pink-200 opacity-75"></span>
          <MessengerIcon/>

          </Button>
        </Link>
        <Link href={"https://zalo.me/0347907042"} target="_blank">
          <Button size="icon" variant="link" className=' relative'>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <ZaloIcon />
          </Button>
        </Link>
        <ButtonUpToTop />
        {/* <Chatbox /> */}
      </div>
    </div>
  )
}
