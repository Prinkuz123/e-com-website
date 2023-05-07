import { useEffect, useState } from "react";
import "./App.css";
import Main from "./assets/Componenets/Main";
import { Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./assets/Componenets/Product";
import Body from "./assets/Componenets/body";
import Footer from "./Footer";
import Diaper from "./assets/Componenets/Diaper";
import Footwear from "./assets/Componenets/Footwear";
import Toys from "./assets/Componenets/Toys";
import { myContext } from "./Context/Context";
import View from "./assets/Componenets/View";
import Basket from "./assets/Componenets/Basket";
import Login from "./assets/Componenets/login";
import Admin from "./assets/Componenets/Admin";
import Adminproducts from "./assets/Componenets/Adminproducts";
import Adminusers from "./assets/Componenets/Adminusers";
import Addproducts from "./assets/Componenets/Addproducts";
import Signup from "./assets/Componenets/Signup";
import Adminedit from "./assets/Componenets/Adminedit";
import { Productdetail2 } from "./assets/Componenets/Productdetails2";
function App() {
  const [statecart, setstatecart] = useState([]);
  const [change, setchange] = useState(false);
  const [login, setlogin] = useState([]);
  const [Productdetail, setproductdetail] = useState(Productdetail2);
  const [editdata, seteditdata] = useState([]);
  const [adddata,setadddata]=useState([])
  // const [cartdata,setcartdata] = useState([])
  const location = useLocation();
  const contextvalue = {
    statecart,
    setstatecart,
    login,
    setlogin,
    Productdetail,
    setproductdetail,
    editdata,
    seteditdata,adddata,setadddata
  };

  useEffect(() => {
    if (location.pathname.includes("Admin")) {
      setchange(true);
    } else {
      setchange(false);
    }
  }, [location]);

  return (
    <div className="App">
      <myContext.Provider value={contextvalue}>
        {change ? null : <Main />}
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Diaper" element={<Diaper />} />
          <Route path="/Footwear" element={<Footwear />} />
          <Route path="/Toys" element={<Toys />} />
          <Route path="/View/:id" element={<View />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Signup" element={<Signup />} />

          <Route element={<Admin />}>
            <Route path="/Admin/Adminproducts" element={<Adminproducts />} />
            <Route path="/Admin/Adminusers" element={<Adminusers />} />
            <Route path="/Admin/Addproducts" element={<Addproducts />} />
            <Route path="/Admin/Adminedit" element={<Adminedit />} />
          </Route>
        </Routes>
        {change ? null : <Footer />}
      </myContext.Provider>
    </div>
  );
}

export default App;
