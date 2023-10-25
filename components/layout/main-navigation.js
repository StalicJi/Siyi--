import React from 'react';
import Link from 'next/link';
import { routerItem } from '@/constants/router';

const MainNavigation = () => {
   return (
      <div className='w-full h-20 bg-white border-b-[1px]'>
         <div className='h-full w-auto flex justify-between items-center mr-6 ml-6'>
            <Link href={'/'}>
               <p className='text-2xl font-bold text-gray-700'>錫儀企業有限公司</p>
                  {/* logo */}
                  {/* headerlistitem */}
            </Link>
            <div className=''>
               <ul className='grid grid-cols-4 text-base gap-6'>
                  {routerItem.map((item) => (
                     <Link href={item.link}>
                        <li className='text-gray-500 hover:text-black' key={item.id}>{item.tittle}</li>
                     </Link>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   )
}

export default MainNavigation