const CartDetails =(clock)=> {
    let subTotal = 0;

    // const handleTotal =(clock)=> {
    //     return subTotal += clock.price * clock.quantity;
    //     // return Math.float(subTotal * 100)/100;
    // }

    // const handleRomove =()=>{

    // }

    return (
        <tbody>
            <tr>
                <th>clock.name1</th>
                <td>clock.price</td>
                <td>
                    <label htmlFor="quantity">Quantity: </label>
                    <input type="number" id="quantity" />
                </td>
                {/* <th><button onClick="handleRomove">Remove Button</button></th> */}
                <td><button>Remove</button></td>
            </tr>
            <tr>
                <th>clock.name2</th>
                <td>clock.price</td>
                <td>
                    <label htmlFor="quantity">Quantity: </label>
                    <input type="number" id="quantity" />
                </td>
                <td><button>Remove</button></td>
                {/* <th><button onClick="handleRomove">Remove Button</button></th> */}
            </tr>
            <tr>
                <th>clock.name3</th>
                <td>clock.price</td>
                <td>
                    <label htmlFor="quantity">Quantity: </label>
                    <input type="number" id="quantity" />
                </td>
                <td><button>Remove</button></td>
                {/* <th><button onClick="handleRomove">Remove Button</button></th> */}
            </tr>
           
            <tr><h5>Subtotal: $100.00</h5></tr> 
            <tr><h5>Tax: $18.00</h5></tr>
            <tr><h3>Total: 118.00  (a function to handle remove?)</h3></tr> 
            
            {/* <tr>Subtotal: ${handleTotal}.00</tr> */}
            {/* <tr>Tax: ${subTotal * 0.18}.00</tr>
            <tr>Total: {subTotal*1.18}.00  clock.price * clock.quantity(a function to handle total and remove?)</tr> */}
            <tr></tr>
            <tr><button>Please click to check out   (function handleSubmit link get the total data? and navigate to the checkout page?)</button></tr>
            <tr> Can I add the added clock in an empty array to store it and show here? </tr>
            <tr> Need to work with quantity (the database quantity and user chose quantity? )</tr>
            <tr>It is the correct way to show this info here? Or any other better ways to do it?</tr>
        </tbody>
    )
}

export default CartDetails;