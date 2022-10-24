import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

export default function NavBar ({clocks,setClocks,setSearchedClocks}) {

    const [isAdmin, setIsAdmin] = useState(false)
    const [searchInput, setSearchInput] = useState("");
    const [burgerBarOpen, setBurgerBarOpen] = useState(false)
    const navigate = useNavigate();

    function toggleHamburger() {
        setBurgerBarOpen(!burgerBarOpen)
    }

        function handleChange(e) {
          
            e.preventDefault();
            setSearchInput(e.target.value);

            navigate("/clocks")
            
        }

    let input = searchInput.toLowerCase();
    useEffect(() => {
        
            let filterdClocks = clocks.filter(clock => (clock.name).toLowerCase().includes(input) || (clock.description).toLowerCase().includes(input));
            setSearchedClocks(filterdClocks)
        
    },[searchInput])

     
    return (
        <nav className="navbar">
            <div className="navbar-homepage-log">
                <Link to="/"><img className="navbar-logo" src="https://thumbs.dreamstime.com/b/wall-clock-icon-color-outline-vector-flat-isolated-234051316.jpg" alt=""/></Link>
            </div>
            <div>
                <Link to="/clocks" className="navbar-all-clocks"><h1>Happy Shopping</h1></Link>
            </div>
            <div className="search">
                <input type="text" name="search" value={searchInput} onChange={handleChange} placeholder="Search"/>
            </div>

            <a href="#" className="toggle-button" onClick={toggleHamburger}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>

            <div className={`navbar-links ${burgerBarOpen ? "active" : ""}`}>
                <ul >
                    
                    {isAdmin && <li>
                        <Link to="/clocks/new"><button className="navbar-new-clock">Add New Clock</button></Link>
                    </li>}
                    <li>
                        <Link to="/clocks/cart"><button>Cart  🛒</button></Link>
                    </li>

                    <li>
                        <Link to="/users/login"><button>Login</button></Link>
                    </li>

                </ul>
            </div>


        </nav>

    )

};


