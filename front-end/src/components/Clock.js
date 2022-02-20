import { Link } from "react-router-dom";
// import RatingStar from "./RatingStar";
import noImage from "../assets/image_not_found.png"

const Clock = ({clock}) => {
    return (
        <div className="clock-card">
            <img className="clock-card-img" src={clock.image ? clock.image : noImage} alt={clock.name} />

            <Link to="/clocks/:id"><h2 className="clock-card-name">{clock.name}</h2></Link>

            <h3 className="clock-card-price">${clock.price}.00</h3>

            <h5>🍀 Rating: {clock.rating}</h5>
            {/* <h5>Rating: {clock.rating ? RatingStar(clock.rating) : "Not available"}</h5> */}
        </div>
    )
}

export default Clock;