import { Link } from "react-router-dom";
import CartDetails from "./CartDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";

const Cart =({clocksInCart}, {subTotal})=> {

    // let subTotal = 0;

    // const handleTotal =(clocksInCart)=> {
    //     for(let clock of clocksInCart) {
    //         return subTotal += Number(clock.price) * clock.quantity;
    //         // subTotal += clock.price * clock.quantity;
    //     // return Math.float(subTotal * 100)/100;
    //     }
    // }
    // const handleInputChange = (clock) => {
    //     setClock
    // }
    let allClocksInCart = clocksInCart;
    const handleRemove =(clock)=> {
        allClocksInCart = clocksInCart.filter(storedInCart => storedInCart.id !== clock.id);
      }

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
                    {allClocksInCart.map(clock =>  {
                        return <CartDetails key={clock.id} clock={clock} handleRemove={handleRemove}/>
                    })}
                <tr>Subtotal: ${subTotal}.00</tr> 
                <tr>Tax: ${subTotal * 0.18}.00</tr>
                <tr>Total: {subTotal*1.18}.00</tr> 
                <tr></tr>
                <tr>Notice:</tr>
                <tr>1. Quantity</tr>
                <tr> 2. Remove</tr>
                <tr>3. Subtotal, tax and total</tr>
                <tr>All above features are not working yet </tr>
            </tbody>   
            </Table>
            <Link to="/clocks/checkout"><h2><button>Check Out</button></h2></Link>
        </div>
    )
}

export default Cart;