import React, { useEffect, useState } from "react";
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
        featured: false,
        stock: 30,
        quantity: 1
    });
    const {cid} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${API}/clocks/${cid}`)
            .then(res => setClock(res.data.payload))
            .catch(err => console.log(err));
    },[cid])


    const handleTextChange =(e)=>{
        setClock({...clock, [e.target.id]: e.target.value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
    
        axios.put(`${API}/clocks/${cid}`,clock)
            .then(()=> {

                navigate(`/clocks/${cid}`)
            })
            .catch(err => console.log(err))
    }

    const handleCheckBox =()=> {
        setClock({...clock,featured: !clock.featured})
    }

    return (
        <form onSubmit={handleSubmit} className="edit-form">
            <div className="edit-form-one">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={clock.name} onChange={handleTextChange} required/>
                
                <label htmlFor="material">Material: </label>
                <input type="text" id="material" value={clock.material} onChange={handleTextChange} />
                
                <label htmlFor="price">Price: </label>
                <input type="number" id="price" value={clock.price} onChange={handleTextChange} />

                <label htmlFor="rating">Rating: </label>
                <input type="number" id="rating" value={clock.rating} onChange={handleTextChange} />
            </div>
            <div className="edit-form-two">
                <label htmlFor="dimensions">Dimensions: </label>
                <input type="text" id="dimensions" value={clock.dimensions} onChange={handleTextChange} />
            
                <label htmlFor="image">Image: </label>
                <input type="text" id="image" value={clock.image} onChange={handleTextChange} />
            
                <label htmlFor="description">Description: </label>
                <input type="text" id="description" value={clock.description} onChange={handleTextChange} />
            
                <label htmlFor="color">Color:</label>
                <input type="text" id="color" value={clock.color} onChange={handleTextChange} />
            </div>
            <div className="edit-form-three">
                <label htmlFor="featured">Featured: </label>
                <input type="checkbox" id="featured" value={clock.featured} onChange={handleCheckBox} checked={clock.featured}/>

                <label htmlFor="stock">Stock: </label>
                <input className="edit-3-stock" type="number" id="stock" value={clock.stock} onChange={handleCheckBox} />

                <div><input className="edit-form-submit" type="submit" /></div>
            </div>
        </form>
    )
}

export default EditClock;