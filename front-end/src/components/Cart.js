import { Link } from "react-router-dom";
import CartDetails from "./CartDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";

const Cart =({clocks})=> {

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
                
                {/* {clocks.map(clock =>  {
                    <CartDetails key={clock.id} clock={clock} />
                })} */}
                <CartDetails />
            </Table>
        </div>
    )
}

export default Cart;