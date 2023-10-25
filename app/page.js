import React from 'react';
import Image from 'next/image';

const HomPage = () => {
  const bk = require('../public/images/banner/首頁形象圖.png')

  return (
    <section>
      <Image className='w-full h-auto' src={bk}/>
      <div>
        <p className='text-transform: uppercase'>About</p>
      </div>
    </section>
  )
}

export default HomPage