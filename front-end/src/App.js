import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Clocks from "./components/Clocks";
import ClockDetails from "./components/ClockDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NewClock from "./components/NewClock";
import EditClock from "./components/EditClock";
import Footer from "./components/Footer";
import FourOFour from "./components/FourOFour";

import UserLogIn from "./components/UserLogIn";

function App () {

  const [logText, setLogText] = useState(
    localStorage.getItem("id") ? "Log Out" : "Log In"
  )

    const [clocksInCart, setClocksInCart] = useState([]);
    // const [orderQuantity, setOrderQuantity] = useState({});
    // const [quantity,setQuantity] = useState(1);


    let subTotal = 0;
    const handleAddToCart =(clock)=> {
      
        Swal.fire({
          title: 'Added to Cart!',
          text: 'Added to shopping cart successfully.',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
   
      
      let newData = clocksInCart;
        let foundClock =newData.find(clockToFind => clockToFind.id === clock.id)
          if(!foundClock) {
            setClocksInCart([...clocksInCart, clock])
          } else {
            let copy = {...foundClock, quantity: foundClock.quantity +1};
            Object.assign(foundClock, copy);
            setClocksInCart([...newData])
          } 
        
    }

  return (
    <Router>
      <NavBar logText={logText} setLogText={setLogText}/>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/clocks" element={<Clocks />}/>
          <Route path="/clocks/new" element={<NewClock />}/>
          <Route path="/clocks/cart" element={<Cart clocksInCart={clocksInCart} setClocksInCart={setClocksInCart} subTotal={subTotal}/>}/>
          <Route path="/clocks/checkout" element={<Checkout />}/>
          <Route path="/clocks/:id" element={<ClockDetails handleAddToCart={handleAddToCart}/>}/>
          <Route path="/clocks/:id/edit" element={<EditClock />}/>
          {/* <Route path="/clocks/contact" element={<Contact />}/> */}
          {/* <Route path="/clocks/about" element={<About />}/> */}

          <Route path="/users/login" element={<UserLogIn />}/>
          <Route path="*" element={<FourOFour />}/>
        </Routes>
      </main>
      {/* <Footer />   */}
    </ Router>
  )
}




export default App;
