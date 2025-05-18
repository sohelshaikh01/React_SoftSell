import { useState } from "react";

const Hero = () => {

  const[showValuationForm, setShowValuationForm] = useState(false);

  return (
    <main id="#home" className="bg-[#F7F9FB] dark:bg-[#0D1117] text-[#1A1A1A] dark:text-white py-12 px-6 scroll-smooth">
        <div className='max-w-5xl mx-auto flex flex-col items-center sm:items-start justify-between gap-4 text-center sm:text-left py-20 sm:py-36' >
          
          <h1 className="text-2xl md:text-4xl font-bold">Monetize Your Software. Effortlessly.</h1>

          <p className="text-base md:text-lg mb-6 md:mb-10">SoftSell helps you unlock value from unused licenses — quick, compliant, and cash-ready.</p>

          <button onClick={() => setShowValuationForm(true)} className="w-fit text-white bg-[#000000] hover:bg-[#46464a] dark:bg-[#4a5261] dark:hover:bg-[#3a414d] rounded-md py-2 px-4 font-semibold">
            Get a Free Valuation
          </button>
        </div>  

        {showValuationForm && (
        <div className="w-full mt-6 max-w-2xl mx-auto bg-white dark:bg-[#1F1F2B] p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-black dark:text-white">License Valuation Form</h3>
          <form className="grid gap-4">
            <input type="text" placeholder="Software Name" className="input-style" />
            <input type="text" placeholder="License Key (Optional)" className="input-style" />
            <select className="input-style">
              <option value="">Select License Type</option>
              <option value="lifetime">Lifetime</option>
              <option value="subscription">Subscription</option>
            </select>
            <input type="number" placeholder="Original Purchase Price" className="input-style" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
              Get My Valuation
            </button>
          </form>
        </div>
      )}



    </main>
  )
}

export default Hero;
