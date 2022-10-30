import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

export default function NavBar ({clocks,setClocks,originalClocks,logText, setLogText}) {

    const [isAdmin, setIsAdmin] = useState(false)
    const [searchInput, setSearchInput] = useState("");
    const [burgerBarOpen, setBurgerBarOpen] = useState(false)
    const navigate = useNavigate();

    function toggleHamburger() {
        setBurgerBarOpen(!burgerBarOpen)
    }

    function handleChange(e) {
        
        e.preventDefault();
        setSearchInput((e.target.value).toLowerCase());

        navigate("/clocks")
        
    }

  
    useEffect(() => {
        
        let filterdClocks = !searchInput ? [...originalClocks] : [...clocks].filter(clock => clock.name.toLowerCase().includes(searchInput));
        setClocks(filterdClocks)
        
    },[searchInput])

    const handleLogin = () => {
        if(logText === "Log Out") {
            setLogText("Log In")
        } 
    }

     
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
                        <Link to={logText === "Log Out" ? "/" : "/users/login"}>
                            <button onClick={handleLogin}>
                               {logText}
                            </button>
                        </Link>
                    </li>

                </ul>
            </div>


        </nav>

    )

};


