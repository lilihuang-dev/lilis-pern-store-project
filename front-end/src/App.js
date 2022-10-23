import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import axios from "axios";

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

const API = process.env.REACT_APP_API_URL;

function App () {

  const [clocks, setClocks] = useState([]);
  const [originalClocks, setOriginalClocks] = useState([]);
  const [searchedClocks, setSearchedClocks] = useState([]);

  // const [logText, setLogText] = useState(
  //   localStorage.getItem("id") ? "Log Out" : "Log In"
  // )

    const [clocksInCart, setClocksInCart] = useState([]);
    // const [orderQuantity, setOrderQuantity] = useState({});
    // const [quantity,setQuantity] = useState(1);

    useEffect(()=> {
      axios.get(`${API}/clocks`)
          .then(res => {
            setClocks(res.data.payload);
            setOriginalClocks(res.data.payload);
          })
          .catch(err => console.log(err));
  },[]);

    let subTotal = 0;
    const handleAddToCart =(clock)=> {
      
        Swal.fire({
          title: 'Added to Cart!',
          text: 'Added to shopping cart successfully.',
          icon: 'success',
          timer: 2000,
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
      <NavBar clocks={clocks} setClocks={setClocks} searchedClocks={searchedClocks} setSearchedClocks={setSearchedClocks}/>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/clocks" element={<Clocks clocks={clocks} setClocks={setClocks} originalClocks={originalClocks} searchedClocks={searchedClocks}/>}/>
          <Route path="/clocks/new" element={<NewClock />}/>
          <Route path="/clocks/cart" element={<Cart clocksInCart={clocksInCart} setClocksInCart={setClocksInCart} subTotal={subTotal}/>}/>
          <Route path="/clocks/checkout" element={<Checkout />}/>
          <Route path="/clocks/:cid" element={<ClockDetails handleAddToCart={handleAddToCart}/>}/>
          <Route path="/clocks/:cid/edit" element={<EditClock />}/>
          {/* <Route path="/clocks/contact" element={<Contact />}/> */}
          {/* <Route path="/clocks/about" element={<About />}/> */}

          <Route path="/users/login" element={<UserLogIn />}/>
          <Route path="*" element={<FourOFour />}/>
        </Routes>
      </main>
      <Footer />  
    </ Router>
  )
}




export default App;
