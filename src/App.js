import "./App.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer"
import AnimatedRouter from "./components/AnimatedRouter";

function App() {
  return (
    <div className='app relative'>

      <Navbar />
     
       <AnimatedRouter />
   
 
      <Footer />
    </div>
  );
}

export default App;
