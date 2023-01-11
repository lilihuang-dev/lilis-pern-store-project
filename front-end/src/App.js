import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import axios from "axios";

import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import Clocks from "./pages/clocks/Clocks";
import ClockDetails from "./components/clockDetail/ClockDetails";
import Cart from "./pages/shoppingCart/Cart";
import Checkout from "./pages/checkOut/Checkout";
import NewClock from "./pages/newClock/NewClock";
import EditClock from "./pages/updateClock/EditClock";
import Footer from "./components/footer/Footer";
import UserLogIn from "./pages/logIn/UserLogIn";
import CreateUser from "./pages/signUp/CreateUser";
import UserProfile from "./pages/user/UserProfile";
import FourOFour from "./pages/pageNotFound/FourOFour";


const API = process.env.REACT_APP_API_URL;

function App () {
  const [logInUser, setLogInUser] = useState({});
  const [currtentUser, setCurrentUser] = useState(null);
  const [clocks, setClocks] = useState([]);
  const [originalClocks, setOriginalClocks] = useState([]);
  const [clocksInCart, setClocksInCart] = useState([]);
  
  const [logText, setLogText] = useState(
    currtentUser ? "Log Out" : "Log In"
  )

  useEffect(()=> {
    axios.get(`${API}/clocks`)
        .then(res => {
          let allClocks = res.data.payload
          setClocks(allClocks);
          setOriginalClocks(allClocks);
        })
        .catch(err => console.log(err));
  },[]);

  const handleAddToCart =(addedClock)=> {

    var toastMixin = Swal.mixin({
      toast: true,
      icon: 'success',
      title: 'Add clock to cart',
      animation: false,
      position: 'relative',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });

    toastMixin.fire({
      animation: true,
      title: 'Added Successfully'
    });

    let foundClock = clocksInCart.find(clockToFind => clockToFind.cid === addedClock.cid)
    if(!foundClock) {
      setClocksInCart([...clocksInCart, addedClock])
    } else {
      let updatedFoundClocks = {...foundClock, quantity: foundClock.quantity +1};
      Object.assign(foundClock, updatedFoundClocks)
    } 
  }

  return (
    <Router>
      <NavBar clocks={clocks} setClocks={setClocks} originalClocks={originalClocks} logText={logText} setLogText={setLogText} />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/clocks" element={<Clocks clocks={clocks} setClocks={setClocks} originalClocks={originalClocks} handleAddToCart={handleAddToCart}/>}/>
          <Route path="/clocks/new" element={<NewClock />}/>
          <Route path="/clocks/cart" element={<Cart clocksInCart={clocksInCart} setClocksInCart={setClocksInCart} logText={logText} />} />
          <Route path="/clocks/checkout" element={<Checkout clocksInCart={clocksInCart} setClocksInCart={setClocksInCart}/>}/>
          <Route path="/clocks/:cid" element={<ClockDetails handleAddToCart={handleAddToCart} setClocks={setClocks} logText={logText} />}/>
          <Route path="/clocks/:cid/edit" element={<EditClock setClocks={setClocks}/>}/>
          <Route path="/users/login" element={<UserLogIn logText={logText} setLogText={setLogText} logInUser={logInUser} setLogInUser={setLogInUser}/>}/>
          <Route path="/users/sign_up" element={<CreateUser />}/>
          <Route path="/users/:uid" element={<UserProfile />}/>
          <Route path="*" element={<FourOFour />}/>
        </Routes>
      </main>
      <Footer />  
    </ Router>
  )
}




export default App;
