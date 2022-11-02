import "./checkout.css"
import { Link } from "react-router-dom";
// import { PayPalButton } from "react-paypal-button-v2";


const Checkout =()=> {



  return (
    <>
        <div className="check-out-container">
            <div className="row order-detail">
                <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                    <div className="row">
                        <div className="col-md-4 center">
                            <div className="">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <div className="col-md-8 center">
                            <h5>
                                <strong>Customer</strong>
                            </h5>
                            <p>Lili Huang</p>
                            <p>
                                <a href="#">lilihuang@example.com</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                    <div className="row">
                        <div className="col-md-4 center">
                            <div className="alert-success order-box">
                                <i className="fas fa-truck-moving"></i>
                            </div>
                        </div>
                        <div className="col-md-8 center">
                            <h5>
                                <strong>Order info</strong>
                            </h5>
                            <p>Shipping: New York, NY</p>
                            <p>Pay method: Paypal</p>

                            <div className="bg-info p-2 col-12">
                                <p className="text-white text-center text-sm-start">
                                    Paid on Oct 22 2022
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="col-lg-4 col-sm-4 mb-1g-4 mb-5 mb-sm-0">
                    <div className="row">
                        <div className="col-md-4 center">
                            <div className="alert-success order-box">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                        </div>
                        <div className="col-md-8 center">
                            <h5>Deliver to</h5>
                            <p>
                                Address: 123 WEST 123rd Street, New York NY 10027
                            </p>
                            <div className="bg-danger p-1 col-12">
                                <p className="text-white text-center text-sm-start">
                                    Not Delivered
                                </p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>  

            <div className="order-products">
                <div>
                    {/* <Message variant="alert-info mt-5"> Your order is empty </ Message> */}
                    <div className="order-product">
                        <div className="col-md-3 col-6">
                        <img src="https://via.placeholder.com/150" alt="product-placeholder"/>    
                            {/* <img src="/images/4.png" alt="product"/> */}
                        </div>
                        <div className="col-md-5 col-6 d-flex align-items-center">
                            <Link to={`/clocks/1`}>
                                <h6>Ardale Wall Clock</h6>
                            </Link>
                        </div>
                        <div >
                            <div>QUANTITY: 1</div>
                        </div>
                        <div>
                            <div>SUBTOTAL: $60</div>
                        </div>
                    </div>
                </div>
                {/* total */}
                <div className="price-details">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Products</strong>
                                </td>
                                <td>$60</td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Shipping</strong>
                                </td>
                                <td>Free</td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Tax</strong>
                                </td>
                                <td>$10.8</td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Total</strong>
                                </td>
                                <td>$70.8</td>
                            </tr>

                        </tbody>
                    </table>

                    <div className="col-12">
                        {/* <PayPalButton amount={345} /> */}
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}


export default Checkout;