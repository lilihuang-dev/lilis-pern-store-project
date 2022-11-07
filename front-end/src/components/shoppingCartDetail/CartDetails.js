import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cartDetails.css"

const CartDetails =({clock, handleRemove, clocksInCart, setClocksInCart})=> {
    
  const [quantity, setQuantity] = useState(clock.quantity);

  const handleQuantity = (e) => {
    if (e.target.id === "plus") {
      setQuantity(quantity+1) ;
    } else if (e.target.id === "minus" && clock.quantity > 1){
      setQuantity(quantity-1) ;
      } 
  }

  useEffect(() => {
    clocksInCart = clocksInCart.map(clockWithNewQuantity => {
      if(clockWithNewQuantity.cid === clock.cid){
          clockWithNewQuantity.quantity = quantity
      }
      return clockWithNewQuantity;
    })
    setClocksInCart(clocksInCart);
  }, [quantity])

  return (
    <tr>
      <th> <Link to={`/clocks/${clock.cid}`} className="clockInCart-name">{clock.name}</Link></th>
      <td>{clock.price}</td>
      <td  className="quantity-container">
        <br />
        <div className="quantity-controllers">
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
    
    <td><button className="removeBtn" onClick={()=>handleRemove(clock)}>Remove</button></td>
    </tr>
  )
}

export default CartDetails;