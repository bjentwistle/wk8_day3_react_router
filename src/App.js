import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import NavBar from "./components/NavBar";
import Contacts from "./components/Contacts";
import ErrorPage from "./components/ErrorPage";
import Product from "./components/Products";


const App = ()=> {

  let initialPriceList = [
    { level: "Hobby", cost: 0 },
    { level: "Startup", cost: 10 },
    { level: "Enterprise", cost: 100 }
  ]
  
  return (
    <Router>
      <NavBar />
      <Routes> 
        <Route path = "/" element= {<Home/>} />
        <Route path = "/About" element= {<About/>} />
        <Route path = "/Pricing" element= {<Pricing prices={initialPriceList} />}/>
        <Route path = "/Contacts" element= {<Contacts/>} />
        <Route path = "/Products/:product" element= {<Product/>} />
        <Route path = "*" element= {<ErrorPage/>} />
      </Routes>
    </Router>
  )

}

export default App;
