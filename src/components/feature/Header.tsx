
import Logo from '@/components/common/Logo'
import SearchInput from './SearchInput'
import Link from "@/components/common/Link";
import { HeartIcon,  } from '../icons'
import { TypographyH4 } from '../ui/typography'
import routes from '@/routes'
import Notification from './Notification'
import { cn } from '@/lib/utils'
import HeaderItems from './HeaderItems';


export default function Header() {


  return (
    <header className={cn('   bg-primary  text-[#f8f8d9]     shadow-lg  transition-transform duration-300')}>
      <div className=' container'>
        <HeaderTop />
        <div className=' flex gap-10 items-center  pt-0 py-3 '>
          <div className=' flex-shrink-0  md:w-fit w-full md:block  flex justify-center'>
            <Logo />
          </div>
          <div className=' flex-1 max-w-[360px] hidden md:block '>
            <SearchInput />
          </div>
          <div className='  flex-1   flex-shrink-0   '>
            <HeaderItems />
          </div>

        </div>

      </div>
    </header>
  )
}



function HeaderTop() {
  return (
    <div className=' flex   justify-between  items-center  py-2    bg-secondary '>
      <TypographyH4 className=' md:text-xs text-[10px]  font-semibold text-[#f8f8d9]  ' >TP Mobile - Bán iPad có tâm &quot;Nhứt&quot; Sài Gòn 😎</TypographyH4>
      <div className=' flex gap-4'>
        <Link href={routes.wishlist} title='Yêu thích của bạn'>
          <HeartIcon className=' text-[#f8f8d9]  ' />
          
        </Link>
        <Notification />
      </div>
    </div>
  )
}