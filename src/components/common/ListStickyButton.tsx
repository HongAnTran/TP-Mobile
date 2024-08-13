"use client"
import React from 'react'
import ButtonUpToTop from '../feature/buttons/ButtonUpToTop'
import { Button } from '../ui/button'
import { MessengerIcon, PhoneIcon, ZaloIcon, InstagramIcon, InstagramLogoIcon, PhoneFilledIcon } from '../icons'
import Link from "@/components/common/Link";
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { PlusCircledIcon } from '@radix-ui/react-icons'
import CallIcon from '@mui/icons-material/Call';

export default function ListStickyButton() {
  return (
    <div className=' fixed   bottom-44  lg:bottom-20 right-4 z-50'>
      <div className=' flex-col gap-4 hidden lg:flex '>
        <Link href={"https://www.instagram.com/tpmobile.store/"} target="_blank">
          <Button size="icon" variant="link" className=' relative'>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full  bg-pink-200 opacity-75"></span>
            <InstagramLogoIcon className=' w-16 h-16' />

          </Button>
        </Link>
        <Link href={"tel:0347907042"} target="_blank">
          <Button size="icon" variant="link" className=' relative'>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full  bg-red-400 opacity-75"></span>
            <PhoneIcon />

          </Button>
        </Link>
        <Link href={"https://m.me/100369039524995"} target="_blank">
          <Button size="icon" variant="link" className=' relative'>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full  bg-pink-200 opacity-75"></span>
            <MessengerIcon />

          </Button>
        </Link>

        {/* <Link href={"https://zalo.me/0347907042"} target="_blank">
          <Button size="icon" variant="link" className=' relative'>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <ZaloIcon />
          </Button>
        </Link> */}
        <ButtonUpToTop />
      </div>

      <div className=' lg:hidden'>
        <Popover>
          <PopoverTrigger asChild>
            <div className=' bg-red-500 p-1 rounded-full   relative'>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full  bg-red-400 opacity-75"></span>

              <CallIcon className=' w-8 h-8 text-white  rounded-full' />
            </div>
          </PopoverTrigger>
          <PopoverContent className=" w-10">
            <div className=' flex-col gap-4 flex '>
              <Link href={"https://www.instagram.com/tpmobile.store/"} target="_blank">
                <Button size="icon" variant="link" className=' relative'>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full  bg-pink-200 opacity-75"></span>
                  <InstagramLogoIcon className=' w-16 h-16' />

                </Button>
              </Link>
              <Link href={"tel:0347907042"} target="_blank">
                <Button size="icon" variant="link" className=' relative'>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full  bg-red-400 opacity-75"></span>
                  <PhoneIcon />

                </Button>
              </Link>
              <Link href={"https://www.facebook.com/messages/t/100369039524995"} target="_blank">
                <Button size="icon" variant="link" className=' relative'>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full  bg-pink-200 opacity-75"></span>
                  <MessengerIcon />

                </Button>
              </Link>

              {/* <Link href={"https://zalo.me/0347907042"} target="_blank">
          <Button size="icon" variant="link" className=' relative'>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <ZaloIcon />
          </Button>
        </Link> */}
              <ButtonUpToTop />
            </div>
          </PopoverContent>
        </Popover>
      </div>

    </div>
  )
}
