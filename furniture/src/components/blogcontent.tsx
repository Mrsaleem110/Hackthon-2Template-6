
import Image from 'next/image'
import React from 'react'

const BlogContent = () => {
  return (
    <div className='flex justify-between flex-wrap'>
      {/* Main Content */}
      <div className="w-full lg:w-2/3 xl:w-2/3 p-4">
        <div className="mb-8">
          <Image
            src='/b1.png'
            width={820}
            height={539}
            alt="Picture of the author"           
             className="w-full h-auto"
          />
          <h3 className='text-2xl sm:text-3xl font-bold mt-4'>
            Going all-in with millennial design
          </h3>
          <p className="text-sm sm:text-base mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel asperiores sint dolor qui esse ipsam, ullam error laudantium tenetur quaerat ab eius eum nobis iure quia reiciendis facere, est dolorum.
          </p>
          <h1 className='underline font-bold text-lg mt-4'>
            Read more
          </h1>
        </div>

        <div className="mb-8">
          <Image
            src='/b2.png'
            width={820}
            height={539}
            alt="Picture of the author"
            className="w-full h-auto"
          />
          <h3 className='text-2xl sm:text-3xl font-bold mt-4'>
            Exploring new ways of decorating
          </h3>
          <p className="text-sm sm:text-base mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel asperiores sint dolor qui esse ipsam, ullam error laudantium tenetur quaerat ab eius eum nobis iure quia reiciendis facere, est dolorum.
          </p>
          <h1 className='underline font-bold text-lg mt-4'>
            Read more
          </h1>
        </div>

        <div className="mb-8">
          <Image
            src='/b3.png'
            width={820}
            height={539}
            alt="Picture of the author"
            className="w-full h-auto"
          />
          <h3 className='text-2xl sm:text-3xl font-bold mt-4'>
            Handmade pieces that took time to make
          </h3>
          <p className="text-sm sm:text-base mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel asperiores sint dolor qui esse ipsam, ullam error laudantium tenetur quaerat ab eius eum nobis iure quia reiciendis facere, est dolorum.
          </p>
          <h1 className='underline font-bold text-lg mt-4'>
            Read more
          </h1>
        </div>
      </div>

      {/* Side Images */}
      <div className="w-full lg:w-1/3 xl:w-1/3 p-4">
        <div className="mb-8">
          <Image
            src='/c2.png'
            width={353}
            height={251}
            alt="Picture of the author"
            className="w-full h-auto"
          />
        </div>

        <div>
          <Image
            src='/c1.png'
            width={650}
            height={393}
            alt="Picture of the author"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default BlogContent
