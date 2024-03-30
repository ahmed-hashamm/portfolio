
import About from "./Components/About/About"
import Cartoon from "./Components/Cartoon"
import Portfolio from "./Components/Portfolio"
import LandingPage from "./Components/Hero/LandingPage"
import Marque from "./Components/Marque"
import Navbar from "./Components/Navbar"
import LocomotiveScroll from 'locomotive-scroll' 
import Footer from "./Components/Footer"




function App() {
  

 const locomotiveScroll= new LocomotiveScroll()
 
  return (
    <div className=" w-full  min-h-screen bg-zinc-900">
    <Navbar/>
    <LandingPage/>
    <Marque/>
    <About/>
    <Cartoon/>
    <Portfolio/>
    <Footer/>
    
    
    </div>
  )
}

export default App
