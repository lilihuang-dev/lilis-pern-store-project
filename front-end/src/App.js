import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";

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
    // const [total, setTotal] = useState(0);

    let subTotal = 0;
    const handleAddToCart =(clock)=> {
      let newData = clocksInCart;
        let foundClock =newData.find(clockToFind => clockToFind.id === clock.id)
          if(!foundClock) {
            setClocksInCart([...clocksInCart, clock])
          } else {
            let copy = {...foundClock, quantity: foundClock.quantity +1};
            Object.assign(foundClock, copy);
            setClocksInCart([...newData])
          } 
        // const foundClock = clocksInCart.find(clockToFind => clockToFind.id === clock.id)
        // if(!foundClock) {
        //   setClocksInCart([...clocksInCart, clock]);
        // } 
        // // else {
        //   const foundClockQuantity = orderQuantity[clock.id];
        //   console.log("Hello world!")
        //   console.log(foundClockQuantity)
        //   if(foundClockQuantity) {
        //     setOrderQuantity({...orderQuantity,[clock.id]:Number(foundClockQuantity)+1});
        //     console.log({...orderQuantity,[clock.id]:Number(foundClockQuantity)+1})
        //   } else {
        //     setOrderQuantity(1);
        // // }
        // } 
    }

    // const handleQuantity =(value) => {
    //   setQuantity(value)
    // }

    // const updatedQuantity = (id,quantity) => {
    //   setOrderQuantity({...orderQuantity,[id]:quantity})
    // }

    // const removeQuantity = (id) => {
    //   let copyOrderQuantity = {...orderQuantity};
    //   delete copyOrderQuantity[id];
    //   setOrderQuantity(copyOrderQuantity);
    // }

    // useEffect(()=> {
    //   let newArr = [];
      
    //   for(let oneClock of clocksInCart) {
    //     // let subTotal = Math.float(Number(oneClock.price) * Number(orderQuantity[oneClock.id]))
    //     newArr.push(Number(oneClock.price) * Number(orderQuantity[oneClock.id]) )
    //   }
    //   setTotal(newArr.reduce((a,b) => a+b ,0));
    // },[orderQuantity, clocksInCart.length])
  
  return (
    <Router>
      <NavBar logText={logText} setLogText={setLogText}/>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/clocks" element={<Clocks />}/>
          <Route path="/clocks/new" element={<NewClock />}/>
          <Route path="/clocks/cart" element={<Cart clocksInCart={clocksInCart} setClocksInCart={setClocksInCart} subTotal={subTotal}/>}/>
          {/* <Route path="/clocks/cart" element={<Cart clocksInCart={clocksInCart} setClocksInCart={setClocksInCart} orderQuantity = {orderQuantity} updatedQuantity={updatedQuantity} total={total}/>}/> */}
          <Route path="/clocks/checkout" element={<Checkout />}/>
          <Route path="/clocks/:id" element={<ClockDetails handleAddToCart={handleAddToCart}/>}/>
          <Route path="/clocks/:id/edit" element={<EditClock />}/>
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



// import { useState, useEffect } from "react";
// const API = process.env.REACT_APP_API_URL;

// console.log(API);
// function App() {
//   const [days, setDays] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`${API}/test`)
//       .then(
//         (response) => {
//           setDays(response.data);
//         },
//         (error) => console.log("get", error)
//       )
//       .catch((c) => console.warn("catch", c));
//   }, []);
//   return (
//     <div>
//       <ul>
//         {days.map((day) => (
//           <li key={day.name}>{day.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default App;
