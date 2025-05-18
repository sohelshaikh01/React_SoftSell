
import { Header, Footer } from "../components";
import  {
    Hero,
    Benefits,
    Reviews,
    ContactForm
} from "../Layouts/index.js";

const HomePage = () => {
  
  return (
     <div className="w-full bg-[#F7F9FB] dark:bg-[#0D1117]">
      <div  className='max-w-7xl mx-auto scroll-smooth'>

        <Header />
        <Hero />
        <Benefits />
        <Reviews />
        <ContactForm />
        <Footer />
          
      </div>  
    </div>  

  )
}

export default HomePage;
