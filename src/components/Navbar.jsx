import React from "react";
import "./Navbar.css"
import { useNavigate } from "react-router-dom"
import { BsFillHousesFill,BsCart4 } from "react-icons/bs";
import Images from "./images/Shoppinglogo.jpg"

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap',margin:'auto'}}>
    <nav className="nav">
      <div className="main-div">
<img src={Images} alt='shopping-logo' height="120px" />
        <div className="name"><h2>Click & Collect </h2></div>

        <button className="nav-Button" onClick={() => navigate("/")}><h2>HOME <i><BsFillHousesFill/></i> </h2></button>

        <button className="nav-Button" onClick={() =>
          navigate("/cart")}><h2> Cart <i><BsCart4/></i> </h2></button>


      </div>
    </nav>
  </div>
  )
}
export default Navbar;