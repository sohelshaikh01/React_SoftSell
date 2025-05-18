import { useState } from 'react';
import { Dropdown, Input } from '../components';
import { useForm } from "react-hook-form";

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [lisence, setLisence] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const submitForm = async (e) => {
        e.preventDefault();
        setError("");

        if (!name || !email || !company || !lisence || !message) {
            setError("Please fill all the fields");
            setTimeout(() => {  
              setError("");
            }, 3000);
            return;
        }

        // Simulate a successful form submission
        setSuccess("Form submitted successfully!");
    }

  return (

        <div id="contact" className="w-full flex items-center justify-center bg-[#eff6fc] dark:bg-[#161c26] py-12 px-6 text-black dark:text-white scroll-smooth">
            <section className='mx-auto sm:max-w-md max-w-lg w-full'>

              <h1 className='text-2xl font-bold text-center mb-4 sm:mb-6 text-black dark:text-[#EEEDE7]'> Get In Touch </h1>

              <form onSubmit={submitForm}>
                <div className='w-full flex flex-col space-y-4 bg-white dark:bg-[#1A1A1A] text-black dark:text-white rounded-xl md:rounded-2xl shadow-lg dark:shadow-xl p-6 border border-gray-300 dark:border-gray-600'>

                  {error && <p className='font-semibold text-lg text-red-600 text-center'> {error}  </p>}

                  {success && <p className='font-semibold text-lg text-sky-600 text-center'> {error}  </p>}

                  <Input type="text" label="Name " autoComplete="user-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name" />

                  <Input type="email" label="Email" autoComplete="user-email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' />

                  <Input type="text" label="Company" autoComplete="company-name" value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Enter your Company' />

                  <Dropdown className="" label='Select your Lisence' placeholder='Select your Lisence'/>

                  <div className='flex flex-col '>
                    <label htmlFor="label" className='mb-1 pl-1 inline-block'> Message</label>
                    <textarea type="text" autoComplete="form-message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter your Message' className="outline-none  bg-[#F9FAFB] dark:bg-[#2A2A2A] text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-md md:rounded-lg shadow-sm dark:shadow px-3 py-[6px] w-full"></textarea> 
                  </div>

                  <button type="submit" className="text-white bg-[#7077A1] hover:bg-[#697096] dark:bg-[#525776] dark:hover:bg-[#43465f] rounded-md py-2 px-4 font-semibold" > Submit </button>

                </div> 
              </form>

            </section>
        </div>
  )
}

export default ContactForm;
