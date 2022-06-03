import { Link } from "react-router-dom";


export default function NavBar ({logText, setLogText}) {
    return (
        <nav>
            <Link to="/"><img className="navbar-logo" src="https://thumbs.dreamstime.com/b/wall-clock-icon-color-outline-vector-flat-isolated-234051316.jpg" alt=""/></Link>
            <Link to="/clocks"><h1 className="navbar-all-clocks">Wall Clocks</h1></Link>
            <Link to="/clocks/new"><button className="navbar-new-clock">Add New Clock</button></Link>
            <Link to="/clocks/cart"><button>Cart  🛒</button></Link>
            <Link to="/users/login">
                <button>
                    {logText}
                </button>
            </Link>
        </nav>
    )
};


