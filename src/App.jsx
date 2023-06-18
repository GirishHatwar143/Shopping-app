import './App.css'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import {BrowserRouter,Routes,Route} from "react-router-dom"

export default function App() {
  return (
   <>
     <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path='/cart' element={<Cart/>}/>
       
       </Routes>
     
     </BrowserRouter>
   </>
  )
}
