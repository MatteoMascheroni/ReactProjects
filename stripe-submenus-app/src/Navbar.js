import React from "react"
import logo from "./images/logo.svg";
import { FaBars } from "react-icons";

const Navbar = () => {
    return (
        <nav className="nav">
            <div>
                <div><img src={logo}/></div> 
            </div>
            <ul className="nav-items">
                <li>Products</li>
                <li>developers</li>
                <li>company</li>
            </ul>
        </nav>
    )
}

export default Navbar;