import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
        featured: false
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
    //     <form onSubmit={handleSubmit}>
    //         <label htmlFor="name">Name: </label>
    //         <input type="text" id="name" value={clock.name} onChange={handleTextChange} />
    //         <br />
    //         <br />
    //         <label htmlFor="price">Price: </label>
    //         <input type="number" id="price" value={clock.price} onChange={handleTextChange} />
    //         <br />
    //         <br />
    //         <label htmlFor="material">Material: </label>
    //         <input type="text" id="material" value={clock.material} onChange={handleTextChange} />
    //         <br />
    //         <br />
    //         <label htmlFor="color">Color:</label>
    //         <input type="text" id="color" value={clock.color} onChange={handleTextChange} />
    //         <br />
    //         <br />
    //         <label htmlFor="dimensions">Dimensions: </label>
    //         <input type="text" id="dimensions" value={clock.dimensions} onChange={handleTextChange} placeholder="Please enter dimensions"/>
    //         <br />
    //         <br />
    //         <label htmlFor="image">Image: </label>
    //         <input type="text" id="image" value={clock.image} onChange={handleTextChange} placeholder="Please enter URL"/>
    //         <br />
    //         <br />
    //         <label htmlFor="description">Description: </label>
    //         <input type="text" id="description" value={clock.description} onChange={handleTextChange} />
    //         <br />
    //         <br />
    //         <label htmlFor="rating">Rating: </label>
    //         <input type="number" id="rating" value={clock.rating} onChange={handleTextChange} />
    //         <br />
    //         <br />
    //         <label htmlFor="featured">Featured: </label>
    //         <input type="checkbox" id="featured" value={clock.featured} onChange={handleCheckBox} checked={clock.featured}/>
    //         <br />
    //         <br />
    //         <input type="submit" />

    //     </form>
    // )
    <form onSubmit={handleSubmit} className="new-form">
    <div className="new-form-one">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" value={clock.name} onChange={handleTextChange} placeholder="Name required"required/>
        
        <label htmlFor="price">Price: </label>
        <input type="number" id="price" value={clock.price} onChange={handleTextChange} />
    
        <label htmlFor="material">Material: </label>
        <input type="text" id="material" value={clock.material} onChange={handleTextChange} placeholder="Please enter material"/>
        
        <label htmlFor="rating">Rating: </label>
        <input type="number" id="rating" value={clock.rating} onChange={handleTextChange} />
    </div>
    <div className="new-form-two">
        <label htmlFor="dimensions">Dimensions: </label>
        <input type="text" id="dimensions" value={clock.dimensions} onChange={handleTextChange} placeholder="Please enter dimensions"/>
    
        <label htmlFor="image">Image: </label>
        <input type="text" id="image" value={clock.image} onChange={handleTextChange} />
    
        <label htmlFor="description">Description: </label>
        <input type="text" id="description" value={clock.description} onChange={handleTextChange} placeholder="Please enter description"/>
    
        <label htmlFor="color">Color:</label>
        <input type="text" id="color" value={clock.color} onChange={handleTextChange} placeholder="Please enter color"/>
    </div>
    <div className="new-form-three">
        <label htmlFor="featured">Featured: </label>
        <input type="checkbox" id="featured" value={clock.featured} onChange={handleCheckBox} checked={clock.featured}/>
    
        <div><input className="new-form-submit" type="submit" /></div>
    </div>
    
  
    
    

</form>
)
}

export default NewClock;