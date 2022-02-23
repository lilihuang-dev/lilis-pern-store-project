import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from "react";

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

function App () {
    const [clocksInCart, setClocksInCart] = useState([]);

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
    }

  

  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/clocks" element={<Clocks />}/>
          <Route path="/clocks/new" element={<NewClock />}/>
          <Route path="/clocks/cart" element={<Cart clocksInCart={clocksInCart}/>}/>
          <Route path="/clocks/checkout" element={<Checkout />}/>
          <Route path="/clocks/:id" element={<ClockDetails handleAddToCart={handleAddToCart}/>}/>
          <Route path="/clocks/:id/edit" element={<EditClock />}/>
          {/* <Route path="/clocks/contact" element={<Contact />}/> */}
          {/* <Route path="/clocks/about" element={<About />}/> */}
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
