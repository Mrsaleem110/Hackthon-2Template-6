import React from 'react';
import Image from "next/image";
import Shopproduct from '@/components/shopproduct';

const page = () => {
  return (
    <div>
      {/* Image with relative positioning */}
      <div className='relative'>
        <Image
          src='/Rectangle 1.png'
          width={1700}
          height={316}
          alt="Picture of the author"
          className='w-full h-auto'
        />
        
        {/* Centered text over the image */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black'>
          <p className='text-3xl sm:text-4xl md:text-5xl font-bold'>Shop</p>
          <div className='flex justify-center items-center text-lg sm:text-xl md:text-2xl'>
            <h5 className='font-bold'>Home {'>'} </h5>
            <h5>Shop</h5>
          </div>
        </div>
      </div>
      
      {/* Second Image */}
      <div className='relative'>
        <Image
          src='/Group 63.png'
          width={1700}
          height={316}
          alt="Picture of the author"
          className='w-full h-auto'
        />
     </div>
     
      {/* Shop Product Section */}
      <Shopproduct />
      
      {/* Frame Image Section */}
      <div className='flex place-content-center pb-10'>
        <Image
          src='/Frame 72.png'
          width={482}
          height={90}
          alt="Frame image"
        />
     </div>
     
      {/* Pink Background Section */}
      <div className='bg-pink-100'>
        <Image
          src='/45.png'
          width={1400}
          height={90}
          alt="Pink section image"
          className='flex items-center pl-10 place-content-center w-full'
        />
     </div>
     
    </div>
  )
}

export default page;
