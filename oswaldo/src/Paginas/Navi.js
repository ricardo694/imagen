import React from 'react';
import { useNavigate } from 'react-router-dom';
import Contenedor from './ContenedorCrear';

const Navi=()=>{
    const navigate =useNavigate()
    return <Contenedor navigate={navigate}/>
}
export default Navi