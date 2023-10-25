import React, { Fragment } from 'react';
import Image from 'next/image';
import { aboutText } from '@/document/about';
import Button from '@/components/button';

const HomPage = () => {
  const bk = require('../public/images/banner/首頁形象圖.png')

  return (
    <section>
      <Image className='w-full h-auto' src={bk}/>
      <div className='text-center mt-16'>
        {aboutText.map((about) => (
          <Fragment>
            <p className='text-transform: uppercase text-3xl mb-8'>{about.tittle}</p>  
            <p className='text-start text-xl leading-10 px-96'>{about.des}</p>
            <Button>123</Button>
          </Fragment>
        ))}
      </div>
    </section>
  )
}

export default HomPage