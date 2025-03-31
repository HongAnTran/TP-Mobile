
import Logo from '@/components/common/Logo'
import SearchInput from '../SearchInput'
import Link from "@/components/common/Link";
import routes from '@/routes'
import { cn } from '@/lib/utils'
import HeaderItems from './HeaderItems';
import CartHeader from './CartHeader';
import NavigationCategoryMobile from '../NavigationCategoryMobile';
import SearchHeaderMobile from '../SearchHeaderMobile';
import HeaderTop from './HeaderTop';


export default function Header() {
  return (
    <header className={cn(' sticky  top-0 md:static  z-header   bg-primary  text-secondary    shadow-lg  transition-transform duration-300')}>
      <div className=' container'>
        <HeaderTop />
        <div className=' flex-col md:flex-row flex gap-1 lg:gap-10 items-center pb-[2px] md:pb-0 '>
          <div className=' flex-shrink-0  md:mr-4 lg:mr-0 md:w-fit w-full md:block  grid  grid-cols-12 items-center'>
            <NavigationCategoryMobile className=' col-span-3' />
            <div className='  col-span-6 flex justify-center'>
              <Logo />

            </div>
            <div className='col-span-3 md:hidden flex gap-3'>
              <SearchHeaderMobile />
              <Link href={routes.cart}>
                <CartHeader />
              </Link>
            </div>
          </div>
          <div className='  w-full sm:max-w-[300px]    xl:max-w-[400px]  hidden md:block'>
            <SearchInput />
          </div>
          <div className='  flex-1   flex-shrink-0    hidden md:block '>
            <HeaderItems />
          </div>
        </div>
      </div>
    </header>
  )
}



