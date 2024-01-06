import { Route, Routes } from "react-router-dom";
import Product from "./Product";
import Topbar from "./Topbar";
import Carts from "./Carts"

export default function App()
{
  return <>
 <Topbar/>
 <hr/>
 <Routes>
 <Route path="/" element={<Product/>}/>
 <Route path="/mycart" element={<Carts/>}/>
 </Routes>
 

  
  </>
}