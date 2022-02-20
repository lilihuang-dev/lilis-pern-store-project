import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const EditClock =()=>{
    const [clock, setClock] = useState({
        name:"",
        description:"",
        image:"",
        dimensions: "",
        color: "",
        material:"",
        price: 0,
        rating: 0,
        featured: false
    });
    const {id} = useParams();
    const navigate = useNavigate();
    console.log(id)

    useEffect(()=>{
        axios.get(`${API}/clocks/${id}`)
            .then(res => setClock(res.data.payload))
            .catch(err => console.log(err));
    },[])

    const handleTextChange =(e)=>{
        setClock({...clock,[e.target.id]: e.target.value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.put(`${API}/clocks/${id}`,clock)
            .then(()=> navigate(`/clocks/${id}`))
            .catch(err => console.log(err))
    }

    const handleCheckBox =()=> {
        setClock({...clock,featured: !clock.featured})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" value={clock.name} onChange={handleTextChange} required/>
            <br />
            <br />
            <label htmlFor="price">Price: </label>
            <input type="number" id="price" value={clock.price} onChange={handleTextChange} />
            <br />
            <br />
            <label htmlFor="material">Material: </label>
            <input type="text" id="rating" value={clock.material} onChange={handleTextChange} />
            <br />
            <br />
            <label htmlFor="color">Image:</label>
            <input type="text" id="color" value={clock.color} onChange={handleTextChange} />
            <br />
            <br />
            <label htmlFor="dimensions">Dimensions: </label>
            <input type="text" id="dimensions" value={clock.dimensions} onChange={handleTextChange} />
            <br />
            <br />
            <label htmlFor="img">Image: </label>
            <input type="text" id="img" value={clock.image} onChange={handleTextChange} />
            <br />
            <br />
            <label htmlFor="description">Description: </label>
            <input type="text" id="description" value={clock.description} onChange={handleTextChange} />
            <br />
            <br />
            <label htmlFor="rating">Rating: </label>
            <input type="number" id="rating" value={clock.rating} onChange={handleTextChange} />
            <br />
            <br />
            <label htmlFor="featured">Featured: </label>
            <input type="checkbox" id="featured" value={clock.featured} onChange={handleCheckBox} checked={clock.featured}/>
            <br />
            <br />
            <input type="submit" />

        </form>
    )
}

export default EditClock;