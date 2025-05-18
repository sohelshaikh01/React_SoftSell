import React from 'react';
import { testimonials } from "../json-data/testimonials.js";
import { ReviewCard } from "../components";

const Reviews = () => {

  return (
    <section id="reviews" className="w-full flex bg-[#FAFAFA] dark:bg-[#121212] py-12 px-6">
        <div className='mx-auto  '> 
            
            <h1 className='text-2xl font-bold text-center mb-4 sm:mb-6 text-black dark:text-white'> Customer Testomonials</h1>
            <div className='mx-auto flex flex-col md:flex-row gap-4 justify-center '>
            {testimonials?.map((review, i) => (
            <div key={i} className="w-full md:w-1/2 lg:w-1/3"> 
                <ReviewCard {...review} />
            </div>
            ))}
            </div>
            
        </div>
    </section>
  )
}

export default Reviews;
