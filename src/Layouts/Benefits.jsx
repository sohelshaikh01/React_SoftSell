import React from 'react';
import { benefits } from "../json-data/benefits.js";
import { BenefitCard }from '../components';

const Benefits = () => {

  return (
    
    <section id="benefits" className="w-full flex bg-[#F1F5F9] dark:bg-[#111827] py-12 px-6" >
        <div className='mx-auto max-w-3xl '>  
          
            <h1 className='text-2xl font-bold text-center mb-4 sm:mb-6 text-black dark:text-white  '> Why Choose Us</h1>
            
            <div className='grid md:grid-cols-2 gap-4 sm:gap-8 grid-cols-1'>
                {benefits?.map((benefit, i) => (
                    <div key={i} className="w-full ">
                    <BenefitCard {...benefit} />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Benefits;
