import React from 'react'
import { Redirect , Link, useParams } from 'react-router-dom';
function About() {
    let { id } = useParams();
    return (
        <div>
            Hey You Are Reading about Developer <div style={{color:"red"}}>"{id!=null ? id : "Kishlay"}"</div> , you can go to home form <Link to="/" >Here!</Link>
        </div>
    )
}

export default About;
