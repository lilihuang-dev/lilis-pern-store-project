const CartDetails =({clock},handleTotal)=> {
    

    // const removeClockInCart = (removedClock) => {
    //     if(removedClock.id ===  clock.id){
    //       setClocksInCart([...clocksInCart, clock])
    //     }
    //   }

    const handleNumChange =(e)=>{
        clock.quantity = e.target.value;
    }

    return (
        <tr>
            <th>{clock.name}</th>
            <td>{clock.price}</td>
            <td>
                <label htmlFor="quantity">Quantity: </label>
                <input type="number" id="quantity" value={clock.quantity} onChange={()=>handleTotal(clock.quantity)}/>
            </td>
            {/* <th><button onClick="handleRomove">Remove Button</button></th> */}
            <td><button>Remove</button></td>
        </tr>
    )
}

export default CartDetails;