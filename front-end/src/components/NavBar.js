import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

export default function NavBar ({logText, setLogText}) {

    const [isAdmin, setIsAdmin] = useState(false)
    const [burgerBarOpen, setBurgerBarOpen] = useState(false)

    function toggleHamburger() {
        // alert("Sidebar Navigation")
        setBurgerBarOpen(!burgerBarOpen)
      }
      console.log(burgerBarOpen)
    return (
        // <nav>
        //     <Link to="/"><img className="navbar-logo" src="https://thumbs.dreamstime.com/b/wall-clock-icon-color-outline-vector-flat-isolated-234051316.jpg" alt=""/></Link>
        //     <Link to="/clocks"><h1 className="navbar-all-clocks">Wall Clocks</h1></Link>
        //     <Link to="/clocks/new"><button className="navbar-new-clock">Add New Clock</button></Link>
        //     <Link to="/clocks/cart"><button>Cart  🛒</button></Link>
        //     <Link to="/users/login">
        //         <button>
        //             {logText}
        //         </button>
        //     </Link>
        // </nav>
        

        <nav className="navbar">
            <div class="navbar-homepage-log">
                <Link to="/"><img className="navbar-logo" src="https://thumbs.dreamstime.com/b/wall-clock-icon-color-outline-vector-flat-isolated-234051316.jpg" alt=""/></Link>
            </div>
            <div>
                <Link to="/clocks" className="navbar-all-clocks"><h1>Wall Clocks</h1></Link>
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
                        <Link to="/clocks/login"><button>Login</button></Link>
                    </li>

                </ul>
            </div>


        </nav>

    )

};


