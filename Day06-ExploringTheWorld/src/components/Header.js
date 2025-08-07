import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    return (
        <div className='header'>
            <div className='logo'>
                <img src={LOGO_URL} width={80} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
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