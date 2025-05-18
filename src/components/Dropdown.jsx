import { useState } from "react";

const Dropdown = ({
    className = "",
    label,
    options = [],
    onSelect = () => {},
    placeholder = "Select License",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="flex flex-col ">
      {label && <label className="mb-1 pl-1 text-base"> {label} </label>}


      <div className="relative inline-block">


        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
          {placeholder}
        </button>
        
        {isOpen && (
          <div className="absolute mt-2 w-48 bg-white shadow-md rounded-md">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Microsoft Office</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Adobe Creative Suite </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">AutoCAD</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Antivirus Software</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Other</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
