import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from "axios";
import noImage from "../assets/image_not_found.png";


const ClockDetails = ({handleAddToCart}) =>{
    const [clock, setClock] = useState({});
    const {cid} = useParams();
    const navigate = useNavigate();
    const API = process.env.REACT_APP_API_URL;
    
    useEffect(()=> {
        console.log(cid)
        axios.get(`${API}/clocks/${cid}`)
        .then(res => setClock(res.data.payload))
        .catch(err => console.log(err));
    },[cid, API])

    const handleDelete =()=>{
        axios.delete(`${API}/clocks/${cid}`)
            .then(()=> navigate("/clocks"))
            .catch(err => console.log(err));
    }

    

    return (
        <div className="clock-details">
            <img className="clock-card-img" src={clock.image ? clock.image : noImage} alt={clock.name} />

            <div className="clock-card-title">
                <h2>{clock.name}, Silent Non-Ticking Wall Clock Decorative Wall Clock</h2>
                <h4>Rating: {("🤩").repeat(clock.rating)}</h4>
                <h4>{clock.featured ? "Best Choice" : null}</h4>
                <h3>${clock.price}.00</h3>
                
                <button onClick={()=>handleAddToCart(clock)} className="addedBtn">Add to Cart</button>

                <Link to="/clocks"><button>Continue shopping</button></Link>
            </div>

            <div className="clock-card-details">
                <h2>About this item</h2>
                <h4>{clock.description}</h4>
                <h4>Material: {clock.material}</h4>
                <h4>Color: {clock.color}</h4>
                <h4>Dimensions: {clock.dimensions}</h4>
            </div>
            
          
            <div className="clock-card-navs">
                <Link to="/clocks"><button>Back</button></Link>
                <Link to={`/clocks/${cid}/edit`}><button>Edit</button></Link>
                <div><button onClick={handleDelete}>Delete</button></div>
            </div>
        </div>
    )
}

export default ClockDetails;