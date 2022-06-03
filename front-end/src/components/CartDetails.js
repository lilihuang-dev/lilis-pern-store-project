// import {useState, useEffect} from "react";

const CartDetails =({clock, handleRemove})=> {
    // const [quantity,setQuantity] = useState(1);
    

    const handleNumChange =(e)=>{
        console.log(e.target.value)
    //    setQuantity(e.target.value);
    }
    
    // useEffect(()=> {
    //     updatedQuantity(clock.id,quantity);
    // },[clock, quantity])

    // useEffect(()=> {
    //     if(orderQuantity) setQuantity(orderQuantity[clock.id]);
    // },[clock.id])

    return (
        <tr>
            <th>{clock.name}</th>
            <td>{clock.price}</td>
            <td>
                <label htmlFor="quantity">Quantity: </label>
                <input type="number" min = "1" max = {clock.stock} id="quantity" value={clock.quantity} onChange={handleNumChange}/>
            </td>
           
            <td><button onClick={()=>handleRemove(clock)}>Remove</button></td>
        </tr>
    )
}

export default CartDetails;