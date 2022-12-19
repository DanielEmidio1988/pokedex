import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home/Home"
import Pokedex from "../pages/Pokedex/Pokedex"

function Router() {

return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/pokedex" element={<Pokedex/>}/>
            </Routes>
        </BrowserRouter>   
    );
  }
  
  export default Router