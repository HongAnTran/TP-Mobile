
import Logo from '@/components/common/Logo'
import SearchInput from './SearchInput'
import Link from "@/components/common/Link";
import { HeartIcon } from '../icons'
import { TypographyH4 } from '../ui/typography'
import routes from '@/routes'
import Notification from './Notification'
import { cn } from '@/lib/utils'
import HeaderItems from './HeaderItems';
import CartHeader from './CartHeader';
import NavigationCategoryMobile from './NavigationCategoryMobile';
import SearchHeaderMobile from './SearchHeaderMobile';


export default function Header() {
  return (
    <header className={cn('   bg-primary  text-secondary    shadow-lg  transition-transform duration-300')}>
      <div className=' container'>
        <HeaderTop />
        <div className=' flex-col md:flex-row flex gap-1 lg:gap-10 items-center '>
          <div className=' flex-shrink-0  md:mr-4 lg:mr-0 md:w-fit w-full md:block  flex justify-between items-center'>
            <NavigationCategoryMobile />
            <Logo />
            <div className=' md:hidden flex gap-3'>
              <SearchHeaderMobile />
              <Link href={routes.cart}>
                <CartHeader />
              </Link>

            </div>
          </div>
          <div className='  w-full sm:max-w-[300px]    xl:max-w-[400px]  hidden md:block'>
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
    <div className=' flex   justify-between  items-center  py-2    bg-primary '>
      <TypographyH4 className=' md:text-xs text-[10px]  font-semibold  text-secondary ' >TP Mobile - Bán iPad có tâm &quot;Nhứt&quot; Sài Gòn 😎</TypographyH4>
      <div className=' flex gap-4'>
        <Link href={routes.wishlist} title='Yêu thích của bạn'>
          <HeartIcon className=' text-secondary  ' />

        </Link>
        <Notification />
      </div>
    </div>
  )
}