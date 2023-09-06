import { About } from "./components/About"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Latest } from "./components/Latest"

function App() {
 
  return (
    <div className="font-poppins">

      <Hero/>

      <About/>

      <Latest/>

      <Footer/>
      
    </div>
  )
}

export default App
