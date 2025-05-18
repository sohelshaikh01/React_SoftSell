 
import './App.css';
import HomePage from './Pages/HomePage.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const themeMode = useSelector(state => state.theme.mode);

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.toggle(themeMode);
  }, [themeMode]);

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
