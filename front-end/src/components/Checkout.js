
const Checkout =()=> {
    return (
        <div className="checkout_page">
            <br/>
            <h1>We're down for scheduled maintenance 🧰 right now.</h1>
            <h1>Sorry for any inconvienence.</h1>
            <h1>Thank you for your patience.</h1>
            <br/>
            <br/>
            <form>
                <div>
                <h4>Full Name</h4>
                <br/>
                <label htmlFor="first_name">First Name: </label>
                <input type="text" id="first_name" value=""/>
                <br />
                <br/>
                <label htmlFor="last_name">Last Name: </label>
                <input type="text" id="last_name" value=""/>
                </div>
                <br/>
                <br/>
                <h4>Billing Address</h4>
                <br/>
                <label htmlFor="street_address">Street Address: </label>
                <input type="text" id="street_address" value=""/>
                <br/>
                <br/>
                <label htmlFor="street_address_line2">Street Address Line 2: </label>
                <input type="text" id="street_address_line2" value=""/>
                <br/>
                <br/>
                <label htmlFor="city">City: </label>
                <input type="text" id="city" value="" placeholder="Please enter city"/>
                <br/>
                <br/>
                <label htmlFor="city">State: </label>
                <select id="state">
                    <option>Please Select</option>
                    <option value="">NY</option>
                </select>
                <br/>
                <br/>
                <label htmlFor="phone_number">Phone Number: </label>
                <input type="tel" id="phone_number" name="phone_number" value="" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                <br />
                <br/>
                <br/>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" value=""/>
                <br />
                <br/>
                <input type="submit" />
            </form>
        </div>
        
    )
}

export default Checkout;