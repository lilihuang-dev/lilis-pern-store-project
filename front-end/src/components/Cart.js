import { Link } from "react-router-dom";
import CartDetails from "./CartDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import {Table} from "react-bootstrap";

const Cart =({clocksInCart, setClocksInCart,subTotal})=> {


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
    
    const handleRemove =(clock)=> {
        let filteredClocks = clocksInCart.filter(storedInCart => storedInCart.id !== clock.id);
        setClocksInCart(filteredClocks)
        // removeQuantity(clock.id);
      }

    // const handleSubTotal =(price, quantity)=> {
    //     setTotal(total + Number(price) * quantity);

    // // return Math.float(subTotal * 100)/100;
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
                        return <CartDetails key={clock.id} clock={clock} handleRemove={handleRemove} clocksInCart={clocksInCart} />
                    })}
                <tr>Subtotal: ${subTotal.toFixed(2)}</tr> 
                <tr>Tax: ${(subTotal * 0.18).toFixed(2)}</tr>
                <tr>Total: {(subTotal * 1.18).toFixed(2)}</tr> 
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