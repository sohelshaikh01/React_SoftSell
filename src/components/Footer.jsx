import { Logo } from "../components"

const Footer = () => {

  return (
    <footer className="w-full bg-[#d1d4e3] dark:bg-[#2C2F45] text-black dark:text-white border-t border-gray-300 dark:border-gray-700 py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        
        {/* Logo + Brand Name */}
        <div className="inline-flex items-center space-x-2">
          <Logo className="w-6 h-6" />
          <span className="text-lg font-semibold hidden sm:inline">SoftSell</span>
        </div>
    
        {/* Copyright */}
        <p className="text-sm sm:text-base text-black dark:text-white">
          &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
        </p>
      </div>
    </footer>
  
  )
}

export default Footer;
