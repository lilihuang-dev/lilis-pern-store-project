const CartDetails =({clock}, {handleRemove})=> {
    
    const handleNumChange =(e)=>{
        e.target.id = e.target.value;
        console.log(clock.quantity)
    }

    return (
        <tr>
            <th>{clock.name}</th>
            <td>{clock.price}</td>
            <td>
                <label htmlFor="quantity">Quantity: </label>
                <input type="number" id="quantity" value={clock.quantity} onChange={handleNumChange}/>
            </td>
           
            <td><button onClick={()=>handleRemove(clock)}>Remove</button></td>
        </tr>
    )
}

export default CartDetails;