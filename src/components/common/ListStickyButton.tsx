"use client"
import React from 'react'
import ButtonUpToTop from '../feature/buttons/ButtonUpToTop'
import { Button } from '../ui/button'
import { MessengerIcon, PhoneIcon, InstagramLogoIcon, ZaloIcon, } from '../icons'
import Link from "@/components/common/Link";
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import CallIcon from '@mui/icons-material/Call';
import CONFIG from '@/consts/config'
import { convertHotlineToTel } from '@/utils'

export default function ListStickyButton() {
  return (
    <div className=' fixed    bottom-32  lg:bottom-20 right-2 z-50'>
      <div className=' flex-col gap-3 lg:gap-4 flex '>
        <Link aria-label="link" href={`tel:${convertHotlineToTel(CONFIG.HOTLINE)}`} target="_blank">
          <Button aria-label="PhoneIcon" size="icon" variant="link" className=' relative'>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full  bg-red-400 opacity-75"></span>
            <PhoneIcon className='w-8 h-8  lg:w-12 lg:h-12' />
          </Button>
        </Link>
        <Link aria-label="link" href={CONFIG.MESSENGER} target="_blank">
          <Button aria-label="MessengerIcon" size="icon" variant="link" className=' relative'>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full  bg-pink-200 opacity-75"></span>
            <MessengerIcon className='w-8 h-8  lg:w-12 lg:h-12' />
          </Button>
        </Link>
        <Link aria-label="link" href={CONFIG.ZALO} target="_blank">
          <Button size="icon" variant="link" className=' relative'>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <ZaloIcon className='w-8 h-8  lg:w-12 lg:h-12' />
          </Button>
        </Link>
        <ButtonUpToTop />
      </div>

      {/* <div className=' lg:hidden'>
        <Popover>
          <PopoverTrigger asChild aria-label="call-icon" >
            <div className=' bg-red-500 p-1 rounded-full   relative'>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full  bg-red-400 opacity-75"></span>

              <CallIcon className=' w-8 h-8 text-white  rounded-full' />
            </div>
          </PopoverTrigger>
          <PopoverContent className=" w-10">
            <div className=' flex-col gap-4 flex '>
              <Link aria-label="link"  href={"https://www.instagram.com/tpmobile.store/"} target="_blank">
                <Button aria-label="InstagramLogoIcon" size="icon" variant="link" className=' relative '  >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full  bg-pink-200 opacity-75"></span>
                  <InstagramLogoIcon className=' w-16 h-16' />

                </Button>
              </Link>
              <Link aria-label="link"  href={`tel:${convertHotlineToTel(CONFIG.HOTLINE)}`} target="_blank">
                <Button aria-label="PhoneIcon" size="icon" variant="link" className=' relative' >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full  bg-red-400 opacity-75"></span>
                  <PhoneIcon />
                </Button>
              </Link>
              <Link aria-label="link"  href={"https://www.facebook.com/messages/t/100369039524995"} target="_blank">
                <Button  aria-label="MessengerIcon" size="icon" variant="link" className=' relative' >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full  bg-pink-200 opacity-75"></span>
                  <MessengerIcon  />
                </Button>
              </Link>

              <ButtonUpToTop />
            </div>
          </PopoverContent>
        </Popover>
      </div> */}

    </div>
  )
}



