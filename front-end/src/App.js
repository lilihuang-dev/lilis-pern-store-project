import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Clocks from "./components/Clocks";
import ClockDetails from "./components/ClockDetails";
import NewClock from "./components/NewClock";
import EditClock from "./components/EditClock";
import FourOFour from "./components/FourOFour";

function App () {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/clocks" element={<Clocks />}/>
          <Route path="/clocks/new" element={<NewClock />}/>
          <Route path="/clocks/:id" element={<ClockDetails />}/>
          <Route path="/clocks/:id/edit" element={<EditClock />}/>
          <Route path="*" element={<FourOFour />}/>
        </Routes>
      </main>
      
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
