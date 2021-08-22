import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const navStyle = {
        display:"flex",
        flexDirection:"row",
        
        wordSpacing:"10px",
        width:"100%",
        height:"50px",
        alignItems:"center",
        justifyContent:"center"
    }
    
    return (
           <div className="opts" style={navStyle}>
                <NavLink exact activeClassName="active" style={{color:"blue",backgroundColor:"none",padding:"10px 20px"}} to="/">HOME</NavLink>&nbsp;
                <NavLink activeClassName="active" style={{color:"blue",backgroundColor:"none",padding:"10px 20px"}} to="/about">ABOUT</NavLink>
            </div>   
    );
}

export default Navbar;
