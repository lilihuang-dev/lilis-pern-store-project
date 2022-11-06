import axios from "axios";
import { useEffect, useState } from "react";

const CartDetails =({clock, handleRemove, clocksInCart, setClocksInCart})=> {
   
    const [updatedClock, setUpdatedClock] = useState(clock)
    
    const handleQuantity = (e) => {
  
        if (e.target.id === "plus") {
          setUpdatedClock({...updatedClock, quantity: updatedClock.quantity+1})
          }
        else {
          if(updatedClock.quantity > 1) {
            setUpdatedClock({...updatedClock, quantity: updatedClock.quantity-1})
          }
        }
      };

      useEffect(() => {
        const clocks = clocksInCart.filter(singleClock => singleClock.cid !== updatedClock.cid)

        setClocksInCart([...clocks, updatedClock])

      }, [updatedClock.quantity])


    return (
        <tr>
            <th>{updatedClock.name}</th>
            <td>{updatedClock.price}</td>
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
                    <p>{updatedClock.quantity}</p>
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
           
            <td><button onClick={()=>handleRemove(updatedClock)}>Remove</button></td>
        </tr>
    )
}

export default CartDetails;