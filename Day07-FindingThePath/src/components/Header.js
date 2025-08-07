import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    return (
        <div className='header'>
            <div className='logo'>
                <img src={LOGO_URL} width={80} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li>Cart</li> 
                    <li>
                        <button 
                            className="btn-login"
                            onClick={() => {
                                btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                            }}
                        >{btnNameReact}</button>
                    </li> 
                </ul>
            </div>
        </div>
    )
};

export default Header;