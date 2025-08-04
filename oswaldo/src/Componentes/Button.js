import React from "react";
import Boton from '../Img/Boton.png'
import './Css/Boton.css'
import { Link } from "react-router-dom";

const Botn=(props)=>(
        <div className="center">
            <Link to="/crear/new">
                <img src={Boton} alt="" className="Boton"/>
            </Link>
        </div>
)
export default Botn
