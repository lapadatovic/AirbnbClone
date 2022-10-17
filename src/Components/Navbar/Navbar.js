import React from "react";
import './Navbar.css'
// import airBnBLogo from '/logo.svg'

function Navbar(){
    return(
        <div>
            <nav>
                <img className="logo-img" src={'Images/logo.svg'}></img>
            </nav>
        </div>
    )
}

export default Navbar;