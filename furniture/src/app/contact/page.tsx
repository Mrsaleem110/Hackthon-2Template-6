// import React from 'react';
// import Image from "next/image";
// import ContactForm from '@/components/contactform';
// import Contactleft from '@/components/contactleft';

// const page = () => {
//   return (
//     <div>
//       {/* Image with relative positioning */}
//       <div className='relative'>
//         <Image
//           src='/Rectangle 1.png'
//           width={1700}
//           height={316}
//           alt="Picture of the author"
//           className='w-full h-auto'
//         />
//         {/* Centered text over the image */}
//         <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black'>
//           <p className='text-3xl sm:text-4xl md:text-5xl font-bold'>Contact</p>
//           <div className='flex justify-center items-center text-lg sm:text-xl md:text-2xl'>
//             <h5 className='font-bold'>Home {'>'} </h5>
//             <h5>Contact</h5>
//           </div>
//         </div>
//       </div>
//       <div className='flex justify-between'>
//       <Contactleft/>
//        <ContactForm/>
//        </div>

      
     
//       {/* Pink Background Section */}
//       <div className='bg-pink-100'>
//         <Image
//           src='/45.png'
//           width={1400}
//           height={90}
//           alt="Pink section image"
//           className='flex items-center pl-10 place-content-center w-full'
//         />
//      </div>
     
//     </div>
//   )
// }

// export default page;

import React from 'react';
import Image from "next/image";
import ContactForm from '@/components/contactform';
import Contactleft from '@/components/contactleft';

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Image with relative positioning */}
      <div className='relative w-full'>
        <Image
          src='/Rectangle 1.png'
          width={1700}
          height={316}
          alt="Picture of the author"
          className='w-full h-auto'
        />
        {/* Centered text over the image */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black'>
          <p className='text-3xl sm:text-4xl md:text-5xl font-bold'>Contact</p>
          <div className='flex justify-center items-center text-lg sm:text-xl md:text-2xl'>
            <h5 className='font-bold'>Home {'>'} </h5>
            <h5>Contact</h5>
          </div>
        </div>
      </div>
      
      {/* Flex Container for Contact Components */}
      <div className='flex flex-col md:flex-row justify-between w-full max-w-6xl mb-10'>
        <div className='w-full md:w-1/2 p-4'>
          <Contactleft />
        </div>
        <div className='w-full md:w-1/2 p-4'>
          <ContactForm />
        </div>
      </div>
      
      {/* Pink Background Section */}
      <div className='bg-pink-100 w-full'>
        <Image
          src='/45.png'
          width={1400}
          height={90}
          alt="Pink section image"
          className='flex items-center justify-center w-full'
        />
      </div>
    </div>
  )
}

export default Page;