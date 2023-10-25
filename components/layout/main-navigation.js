import React from 'react';
import Link from 'next/link';
import { routerItem } from '@/constants/router';
import Image from 'next/image';

const MainNavigation = () => {
   const logo = require('../../public/images/client/logo.png');

   return (
      <div className='w-full h-20 bg-white border-b-[1px]'>
         <div className='h-full w-auto flex justify-between items-center mr-6 ml-6'>
               <Link href={'/'}>
                  <div className='flex items-center'>
                        <Image className='w-12' src={logo} layout='respos'/>
                        <p className='text-2xl font-bold text-gray-700'>錫儀企業有限公司</p>
                  </div>
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