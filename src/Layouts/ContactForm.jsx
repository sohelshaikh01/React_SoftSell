import { useState } from 'react';
import { Dropdown, Input } from '../components';
import lisences from '../json-data/lisences';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [lisence, setLisence] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateName = () => {
    if (name.length === 0) {
      setError("Name is required");
      return false;
    }
  
    if (name.endsWith(" ")) {
      setError("Name should not have trailing spaces");
      return false;
    }
  
    if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
      setError("Write full name (first and last)");
      return false;
    }
  
    return true;
  };
  

  const validateEmail = () => {
    if (email.length === 0) {
      setError("Email is required");
      return false;
    }

    if (!email.match(/^[A-Za-z0-9._-]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
      setError("Email is invalid");
      return false;
    }

    return true;
  };

  const validateMessage = () => {
    const required = 30;
    const left = required - message.length;

    if (left > 0) {
      setError(`${left} more characters required in message`);
      return false;
    }

    return true;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateName() || !validateEmail() || !company || !lisence || !validateMessage()) {
      if (!company) setError("Company is required");
      else if (!lisence) setError("License selection is required");
      // other error messages already set by validators
      return;
    }

    // console.log(name, email, company, lisence, message);
    setSuccess("Form submitted successfully!");
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="w-full flex items-center justify-center bg-[#eff6fc] dark:bg-[#161c26] py-12 px-6 text-black dark:text-white scroll-smooth"
    >
      <section className="mx-auto sm:max-w-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4 sm:mb-6 text-black dark:text-[#EEEDE7]">
          Get In Touch
        </h1>

        <form onSubmit={submitForm}>
          <div className="w-full flex flex-col space-y-4 bg-white dark:bg-[#1A1A1A] text-black dark:text-white rounded-xl md:rounded-2xl shadow-lg dark:shadow-xl p-4 sm:p-8 border border-gray-400 dark:border-gray-600">
            {error && (
              <p className="font-semibold text-lg text-red-600 text-center">
                {error}
              </p>
            )}

            {success && (
              <p className="font-semibold text-lg text-sky-600 text-center">
                {success}
              </p>
            )}

            <Input
              type="text"
              label="Name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
            />

            <Input
              type="email"
              label="Email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            />

            <Input
              type="text"
              label="Company"
              autoComplete="organization"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter your Company"
            />

            <Dropdown
              value={lisence}
              onChange={(selectedOption) => setLisence(selectedOption)}
              placeholder="License Types"
              options={lisences}
              label="Select your License"
            />

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 pl-1 inline-block">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your Message (min 30 characters)"
                rows="4"
                className="outline-none bg-[#F9FAFB] dark:bg-[#2A2A2A] text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-md md:rounded-lg shadow-sm dark:shadow px-3 py-[6px] w-full"
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-[#000000] hover:bg-[#46464a] dark:bg-[#292e38] dark:hover:bg-[#383e4a] rounded-md py-2 px-4 font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default ContactForm;
