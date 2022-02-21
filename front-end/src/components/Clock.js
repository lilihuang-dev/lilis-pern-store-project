import { Link } from "react-router-dom";
import noImage from "../assets/image_not_found.png";

const Clock = ({clock}) => {
    return (
        <div className="clock-card">
            <img className="clock-card-img" src={clock.image ? clock.image : noImage} alt={clock.name} />

            <Link to={`/clocks/${clock.id}`}><h2 className="clock-card-name">{clock.name}</h2></Link>

            <h3 className="clock-card-price">${clock.price}.00</h3>

            <h5>🍀 Rating: {clock.rating}  {("🤩").repeat(clock.rating)}</h5>
        </div>
    )
}

export default Clock;