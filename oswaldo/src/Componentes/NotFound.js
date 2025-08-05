import React from "react";
import Not from '../Img/tristeza.jpg'
import '../Css/NotFound.css'

const NotFound=()=>(
        <div className="contenedorsecundario">
            <img src={Not} alt="" className="error"/>
            <div>
            <h1 className="Titulo1">Error en la pagina</h1>
            <h2 className="Titulo2">¡Ups! Algo salió mal.</h2>
            <p className="Texto1">Lo sentimos, la página que buscas no existe.</p>
            </div>
        </div>
    )
export default NotFound