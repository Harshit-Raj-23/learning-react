import { useState, useEffect, use } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        console.log("useEffect invoked.");        
    }, [btnNameReact])

    return (
        <div className="sticky top-0 z-50 flex flex-wrap items-center justify-between px-6 py-4 shadow-lg bg-white">
            {/* Logo */}
            <Link to="/" className="flex items-center">
                <img
                src={LOGO_URL}
                alt="Company Logo"
                width={80}
                height={80}
                className="rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                />
            </Link>

            {/* Navigation */}
            <nav>
                <ul className="flex items-center gap-6">
                {/* Online Status */}
                <li className="flex items-center text-sm font-medium">
                    Online: <span className="ml-2">{onlineStatus ? "🟢" : "🔴"}</span>
                </li>

                {/* Links */}
                <li>
                    <Link
                    to="/"
                    className="hover:text-blue-500 transition-colors duration-200"
                    >
                    Home
                    </Link>
                </li>
                <li>
                    <Link
                    to="/about"
                    className="hover:text-blue-500 transition-colors duration-200"
                    >
                    About Us
                    </Link>
                </li>
                <li>
                    <Link
                    to="/contact"
                    className="hover:text-blue-500 transition-colors duration-200"
                    >
                    Contact
                    </Link>
                </li>
                <li>
                    <Link
                    to="/grocery"
                    className="hover:text-blue-500 transition-colors duration-200"
                    >
                    Grocery
                    </Link>
                </li>

                {/* Cart */}
                <li className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                    Cart
                </li>

                {/* Login / Logout Button */}
                <li>
                    <button
                    className="bg-blue-500 text-white px-5 py-1 rounded-md hover:bg-blue-600 transition-colors duration-300"
                    onClick={() =>
                        setBtnNameReact((prev) => (prev === "Login" ? "Logout" : "Login"))
                    }
                    >
                    {btnNameReact}
                    </button>
                </li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;