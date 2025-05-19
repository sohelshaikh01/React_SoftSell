import { forwardRef, useState } from "react";
import { useId } from "react";

const Dropdown = forwardRef( function Dropdown({
  label,
  options = [],
  placeholder = "Select...",
  className = "",
  value,
  onChange,
  ...props
}, ref)  {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onChange?.(option);  // notify parent
    setIsOpen(false);
  };

  return (
    <div className="w-full flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-1 pl-1 text-base">
          {label}
        </label>
      )}

      <div className="relative w-full">
        <button
          type="button"
          id={id}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-[#F9FAFB] dark:bg-[#2A2A2A] text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-md md:rounded-lg shadow-sm dark:shadow px-3 py-2 text-left w-full ${className}`}
          ref={ref}
          {...props}
        >
          {value || placeholder}
        </button>

        {isOpen && (
          <ul
            role="listbox"
            aria-labelledby={id}
            className="absolute mt-2 w-48 bg-white dark:bg-[#2A2A2A] text-black dark:text-white border border-gray-400 dark:border-gray-600 rounded-md shadow-sm dark:shadow max-h-60 overflow-auto z-10"
          >
            {options.map((option) => (
              <li
                key={option}
                role="option"
                aria-selected={value === option}
                onClick={() => handleOptionClick(option)}
                className="px-3 py-2 cursor-pointer bg-white dark:bg-[#2c2c2c] hover:bg-[#fff8f9] dark:hover:bg-black"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
});

export default Dropdown;
