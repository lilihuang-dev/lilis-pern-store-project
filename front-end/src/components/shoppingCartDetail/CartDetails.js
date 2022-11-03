// import {useState, useEffect} from "react";

import axios from "axios";
import { useEffect } from "react";

const CartDetails =({clock, handleRemove})=> {
   
    
    const handleQuantity = (e) => {
       
            // if (e.target.id === "plus") {
            
            //   setQuantity(quantity + 1);
            //   }
             
            // else {
             
            //     if (quantity > 1) {
            //       setQuantity(quantity - 1);
            //     }
    
                
            //   }

            
      };

      // useEffect(() => {
      //   axios.put(`${API}/clocks/${cid}`,clock)
      //       .then(()=> {
      //           axios.get(`${API}/clocks`)
      //           .then(res => setClocks(res.data.payload))
                
      //           navigate(`/clocks/${cid}`)
      //       })
      //       .catch(err => console.log(err))
      // }, [clock.quantity])


    return (
        <tr>
            <th>{clock.name}</th>
            <td>{clock.price}</td>
            <td>
                <label htmlFor="quantity">Quantity: </label>
                {/* <input type="number" min = "1" max = {clock.stock} id="quantity" value={clock.quantity} onChange={(e) => handleNumChange(e)}/> */}
                <br />
                <div>
                  <button
                    className="plus"
                    id="plus"
                    onClick={handleQuantity}
                  >
                    +
                  </button>
                  <div className="quantity">
                    <p>{clock.quantity}</p>
                  </div>
                  <button
                    className="minus"
                    id="minus"
                    onClick={handleQuantity}
                  >
                    -
                  </button>
                </div>
            </td>
           
            <td><button onClick={()=>handleRemove(clock)}>Remove</button></td>
        </tr>
    )
}

export default CartDetails;