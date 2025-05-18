
import { forwardRef, useId } from "react";

const Input = forwardRef(function Input({
    type="text",
    label,
    className="",
    ...props
}, ref) {

    const id = useId();

    return (
        <div className="w-full">
            {label && <label className="inline-block pl-1 mb-1" htmlFor={id}> {label} </label>}

            <input ref={ref} id={id} type={type} className={`outline-none  bg-[#F9FAFB] dark:bg-[#2A2A2A] text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-md md:rounded-lg shadow-sm dark:shadow px-3 py-[6px] w-full ${className}`} 
            {...props} />
            
        </div>
    )

});

export default Input;
