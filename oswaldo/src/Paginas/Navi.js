import React from 'react';
import { useNavigate } from 'react-router-dom';
import Crear from './Crear';

const Navi=()=>{
    const navigate =useNavigate()
    return <Crear navigate={navigate}/>
}
export default Navi