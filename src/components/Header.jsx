
import { useSelector, useDispatch } from "react-redux";
import { lightTheme, darkTheme } from "../redux/themeSlice.js"; 
import { FaSun, FaMoon } from "react-icons/fa";
import { Logo } from "../components";


const Header = () => {

    const dispatch = useDispatch();
    const themeMode = useSelector((state) => state.theme.mode);

    const changeTheme = () => {
        if(themeMode === "dark") {
        dispatch(lightTheme());
        }
        else {
        dispatch(darkTheme());
        }
    }


  return (
    
    <header className="bg-[#a9adbf] dark:bg-[#2C2F45] text-black dark:text-white border-b border-gray-300 dark:border-gray-700 w-full">
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      
      {/* Logo + App Name */}
      <div>
        <a href="#home" className="flex items-center space-x-2">
          <Logo className="w-7 h-7" />
          <span className="text-xl font-bold hidden sm:inline">SoftSell</span>
        </a>
        
      </div>
  
      {/* Navigation Links */}
      <nav className="flex items-center space-x-1 sm:space-x-3 text-sm sm:text-base">
        <a href="#home" className="px-3 py-[6px] rounded-full font-medium text-black dark:text-white hover:bg-[#979aa9] hover:text-white dark:hover:bg-[#7077A1] transition">
          Home
        </a>
        <a href="#sell" className="px-3 py-[6px] rounded-full font-medium text-black dark:text-white hover:bg-[#9599a9] hover:text-white dark:hover:bg-[#7077A1] transition">
          Sell
        </a>
        <a href="#benefits" className="px-3 py-[6px] rounded-full font-medium text-black dark:text-white hover:bg-[#979aa9] hover:text-white dark:hover:bg-[#7077A1] transition">
          Benefits
        </a>
        <a href="#reviews" className="px-3 py-[6px] rounded-full font-medium text-black dark:text-white hover:bg-[#979aa9] hover:text-white dark:hover:bg-[#7077A1] transition">
          Reviews
        </a>
  
        {/* Theme Toggle Button */}
        <button onClick={changeTheme}
          className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-[#7077A1] transition"
          aria-label="Toggle Theme" >
          {themeMode === "dark" ? 
          ( <FaSun className="text-xl text-yellow-400" /> ) : 
          ( <FaMoon className="text-xl text-violet-700" /> )
          }
        </button>

      </nav>
    </div>
  </header>
  
  )
}

export default Header;
