import React from "react";
import Logo from "../img/Group1.png";

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="" />
            <span>
                Made with <span className="heart">♥️</span> and <b>React.js</b>. 
            </span>
        </footer>
    )
}

export default Footer