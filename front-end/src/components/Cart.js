import { Link } from "react-router-dom";
import CartDetails from "./CartDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import "./cart.css"
import Swal from 'sweetalert2';

const Cart =({clocksInCart, setClocksInCart})=> {
    const [subTotal, setSubTotal] = useState(0)


    useEffect(() => {
        let sub = 0;
        for(let clock of clocksInCart) {
            sub += Number(clock.price) * clock.quantity;
        }
        setSubTotal(sub);
    }, [clocksInCart])

    // const handleInputChange = (clock) => {
    //     setClock
    // }

    
    const handleRemove =(clock)=> {
        // Swal.fire({
        //     title: 'Delete this item!',
        //     text: 'Removed from shopping cart successfully.',
        //     icon: 'info',
        //     timer: 2000,
        //     confirmButtonText: 'Confirmed'
        // })
        let filteredClocks = clocksInCart.filter(storedInCart => storedInCart.cid !== clock.cid);
        // setTimeout(() => {
            setClocksInCart(filteredClocks)
        // }, 2500);
      }



    return (
        <div className="shopping-cart">
            <h1>Shopping Cart</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                    </tr>
                </ thead>
            { subTotal ? <tbody> 
                    {clocksInCart.map(clock =>  {
                        return <CartDetails key={clock.cid} clock={clock} handleRemove={handleRemove} clocksInCart={clocksInCart} />
                    })}
                <tr>Subtotal: ${subTotal.toFixed(2)}</tr> 
                <tr>Tax: ${(subTotal * 0.18).toFixed(2)}</tr>
                <tr>Total: {(subTotal * 1.18).toFixed(2)}</tr> 
                
                <tr></tr>
             
            </tbody>  : 
            <div className="cart-empty">
                <h3>Your cart is empty now.</h3>
                <Link to="/clocks"><h2><button className="checkout-contiuedShopping">Continue Shopping</button></h2></Link>
            </div>
            }  
            </Table>
            <Link to="/clocks/checkout"><button className="checkoutBtn">Check Out</button></Link>
        </div>
    )
}

export default Cart;