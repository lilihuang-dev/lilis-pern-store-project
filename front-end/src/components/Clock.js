import { Link } from "react-router-dom";
import noImage from "../assets/image_not_found.png";
import "./clock.css"

const Clock = ({clock}) => {
    return (
        <div className="clock-card">
            <Link to={`/clocks/${clock.cid}`}>
                <img className="clock-card-img" src={clock.image ? clock.image : noImage} alt={clock.name} />

                <h2 className="clock-card-name">{clock.name}</h2>

                <h3>${clock.price}.00</h3>

                <h5>🍀 Rating: {("❤️").repeat(clock.rating)}</h5>
            </Link>
        </div>
    )
}

export default Clock;