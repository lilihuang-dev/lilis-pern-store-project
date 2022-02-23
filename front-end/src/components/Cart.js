import { Link } from "react-router-dom";
import CartDetails from "./CartDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";

const Cart =({clocksInCart})=> {

    let subTotal = 0;

    const handleTotal =(clocksInCart)=> {
        for(let clock of clocksInCart) {
            return subTotal += Number(clock.price) * clock.quantity;
            // subTotal += clock.price * clock.quantity;
        // return Math.float(subTotal * 100)/100;
        }
    }
    // const handleInputChange = (clock) => {
    //     setClock
    // }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <h1>Shopping Cart</h1>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </ thead>
            <tbody> 
                    {clocksInCart.map(clock =>  {
                        return <CartDetails key={clock.id} clock={clock} handleTotal={handleTotal}/>
                    })}
                <tr><h5>Subtotal: ${subTotal}.00</h5></tr> 
                <tr><h5>Tax: ${subTotal * 0.18}.00</h5></tr>
                <tr><h3>Total: {subTotal*1.18}.00</h3></tr> 
                
                {/* <tr>Subtotal: ${handleTotal}.00</tr> */}
                {/* <tr>Tax: ${subTotal * 0.18}.00</tr>
                <tr>Total: {subTotal*1.18}.00  clock.price * clock.quantity(a function to handle total and remove?)</tr> */}
                <tr></tr>
                <tr><button>Please click to check out   (function handleSubmit link get the total data? and navigate to the checkout page?)</button></tr>
                <tr> Can I add the added clock in an empty array to store it and show here? </tr>
                <tr> Need to work with quantity (the database quantity and user chose quantity? )</tr>
                <tr>It is the correct way to show this info here? Or any other better ways to do it?</tr>
            </tbody>   
            </Table>
            <Link to="/clocks/checkout"><h2><button>Check Out</button></h2></Link>
        </div>
    )
}

export default Cart;