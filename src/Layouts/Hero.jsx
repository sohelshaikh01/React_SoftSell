import { useState } from "react";
import { Input, Dropdown } from "../components";
import lisences from "../json-data/lisences.js";
import { BiWindowClose } from "react-icons/bi";

const Hero = () => {
  const [showValuationForm, setShowValuationForm] = useState(false);
  const [lisenceType, setLisenceType] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [years, setYears] = useState(1);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    const q = parseInt(quantity);
    const y = parseInt(years);

    if (!lisenceType) {
      setError("Please select a license type.");
      return;
    }

    if (!q || !y || q <= 0 || y <= 0) {
      setError("Quantity and Validity must be greater than zero.");
      return;
    }

    // Submit logic here
    console.log("Submitting valuation:", {
      lisenceType,
      quantity: q,
      years: y,
    });

    // Optionally reset form or show success
    setError(null);
    alert("Valuation request submitted!");
    setShowValuationForm(false);
  };

  return (
    <main
      id="#home"
      className="bg-[#F7F9FB] dark:bg-[#12171f] text-[#1A1A1A] dark:text-white py-12 px-6 relative"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center sm:items-start justify-between gap-4 text-center sm:text-left py-20 sm:py-36">
        <h1 className="text-2xl md:text-4xl font-bold">
          Monetize Your Software. Effortlessly.
        </h1>

        <p className="text-base md:text-lg mb-6 md:mb-10">
          SoftSell helps you unlock value from unused licenses — quick,
          compliant, and cash-ready.
        </p>

        <button
          onClick={() => setShowValuationForm(true)}
          className="w-fit text-white bg-[#000000] hover:bg-[#46464a] dark:bg-[#292e38] dark:hover:bg-[#383e4a] rounded-md py-2 px-4 font-semibold"
        >
          Get a Free Valuation
        </button>
      </div>

      {showValuationForm && (
        <div className="w-full mt-6 md:max-w-2xl mx-auto bg-white dark:bg-[#1e2229] p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mx-auto md:max-w-xl">
            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
              License Valuation Form
            </h3>
            <BiWindowClose
              className="w-8 h-8 mb-4 inline-block cursor-pointer"
              onClick={() => setShowValuationForm(false)}
            />
          </div>

          <form onSubmit={handleSubmit} action="#">
            <div className="w-full md:max-w-xl mx-auto flex flex-col gap-4 justify-center items-center">
              {error && (
                <p className="text-red-600 text-center mb-4 font-semibold">
                  {error}
                </p>
              )}

              <Dropdown
                value={lisenceType}
                onChange={(val) => setLisenceType(val)}
                label="Select License"
                placeholder="Choose Your License"
                options={lisences}
              />

              <Input
                type="number"
                label="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />

              <Input
                type="number"
                label="Validity (Years)"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
              />

              <button
                type="submit"
                className="w-full mt-2 text-white bg-[#000000] hover:bg-[#46464a] dark:bg-[#292e38] dark:hover:bg-[#383e4a] rounded-md py-2 px-4 font-semibold"
              >
                Get Valuation
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
};

export default Hero;
