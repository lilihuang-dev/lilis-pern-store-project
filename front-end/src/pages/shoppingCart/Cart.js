import { Link, useNavigate } from "react-router-dom"
import {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import CartDetails from "../../components/shoppingCartDetail/CartDetails";
import "./cart.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

const Cart =({clocksInCart, setClocksInCart, logText})=> {
    const [subTotal, setSubTotal] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        let sub = 0;
        for(let clock of clocksInCart) {
            sub += Number(clock.price) * clock.quantity;
        }
        setSubTotal(sub);
    }, [clocksInCart])

    
    const handleRemove =(clock)=> {
        let filteredClocks = clocksInCart.filter(storedInCart => storedInCart.cid !== clock.cid);
        setClocksInCart(filteredClocks)
      }

      const handleLinkToCheckout =()=> {
        if(logText === "Log Out") {
            navigate("/clocks/checkout")
        } else {
            Swal.fire({
                title: 'Failed to check out',
                text: 'Please log in or sign up first, thank you.',
                icon: 'info',
                timer: 2000,
                confirmButtonText: 'Thank you'
              })
              setTimeout(() => {
                navigate("/users/login")
              }, 2000)
              
        }
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
                        return <CartDetails key={clock.cid} clock={clock} handleRemove={handleRemove} />
                    })}
                <tr>Subtotal: ${subTotal.toFixed(2)}</tr> 
                <tr>Tax: ${(subTotal * 0.18).toFixed(2)}</tr>
                <tr>Total: {(subTotal * 1.18).toFixed(2)}</tr> 
                
                <tr></tr>
             
            </tbody>  : 
            <div className="cart-empty">
                <h3>Your shopping cart is empty.</h3>
                <h3>Please add at least one item to your cart before checking out.</h3>
                <Link to="/clocks"><h2><button className="checkout-contiuedShopping">➡️  Continue Shopping</button></h2></Link>
            </div>
            }  
            </Table>
            <button className="checkoutBtn" onClick={handleLinkToCheckout}>Check Out</button>
        </div>
    )
}

export default Cart;