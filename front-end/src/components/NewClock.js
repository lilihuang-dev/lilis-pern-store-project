import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Error from "./Error";

const API = process.env.REACT_APP_API_URL;

const NewClock =()=>{
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
    const navigate = useNavigate();

    const handleTextChange =(e)=>{
        setClock({...clock,[e.target.id]: e.target.value})
    }

    const handleCheckBox =()=> {
        setClock({...clock,featured: !clock.featured})
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post(`${API}/clocks`,clock)
            .then(()=> navigate("/clocks"))
            .catch(err => console.log(err))
       
    }


    return (
        <div>
        {clock.name.length > 50 ? <Error /> : ""}
    <form onSubmit={handleSubmit} className="new-form">
    <div className="new-form-one">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" value={clock.name} onChange={handleTextChange} placeholder="Name required"required/>
        
        <label htmlFor="material">Material: </label>
        <input type="text" id="material" value={clock.material} onChange={handleTextChange} placeholder="Please enter material"/>

        <label htmlFor="price">Price: </label>
        <input type="number" id="price" value={clock.price} onChange={handleTextChange} />
        
        <label htmlFor="rating">Rating: </label>
        <input type="number" id="rating" value={clock.rating} onChange={handleTextChange} />
    </div>
    <div className="new-form-two">
        <label htmlFor="dimensions">Dimensions: </label>
        <input type="text" id="dimensions" value={clock.dimensions} onChange={handleTextChange} placeholder="Please enter dimensions"/>
    
        <label htmlFor="image">Image: </label>
        <input type="text" id="image" value={clock.image} onChange={handleTextChange} placeholder="Please enter URL"/>
    
        <label htmlFor="description">Description: </label>
        <input type="text" id="description" value={clock.description} onChange={handleTextChange} placeholder="Please enter description"/>
    
        <label htmlFor="color">Color:</label>
        <input type="text" id="color" value={clock.color} onChange={handleTextChange} placeholder="Please enter color"/>
    </div>
    <div className="new-form-three">
        <label htmlFor="featured">Featured: </label>
        <input type="checkbox" id="featured" value={clock.featured} onChange={handleCheckBox} checked={clock.featured}/>
        
        <label htmlFor="stock">Stock: </label>
        <input className="new-3-stock"type="number" id="stock" value={clock.stock} onChange={handleCheckBox} />
        <div><input className="new-form-submit" type="submit" /></div>
    </div>
    
  
    
    

</form>
</div>
)
}

export default NewClock;