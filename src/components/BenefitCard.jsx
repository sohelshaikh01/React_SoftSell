import React from 'react';

const BenefitCard = ({
    icon: Icon,
    title = "Benefit Title",
    description = "Benefit Description"
}) => {

  return (
    <div className='   w-full flex flex-col items-center   bg-white dark:bg-[#1F2937] text-black dark:text-white rounded-xl md:rounded-2xl shadow-md dark:shadow-lg p-6'>
      <div className='w-full flex justify-center items-center gap-4 mb-2'>
        <Icon className='text-xl sm:text-2xl text-[#4C6FFF] dark:text-[#A2B2D8] ' />
        <h2 className='text-xl sm:text-2xl font-bold'>{title} </h2>
      </div>
      <p className='text-base text-center '> {description}</p>
    </div>
  )
}

export default BenefitCard;


/*

✅ 📐 Border Radius Suggestions
Element	Tailwind Class	Result
Cards	rounded-xl	Premium, soft edges
Input Fields	rounded-lg	Clean, professional
Buttons	rounded-md or rounded-full	Sharp or pill-style
Sections	Use container + spacing	Responsive alignment
*/