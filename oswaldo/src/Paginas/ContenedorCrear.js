import React, { useState } from 'react';
import Crear from '../Componentes/Crear';
import { useNavigate } from 'react-router-dom';


const Contenedor=()=>{
    const navigate =useNavigate
    const [form,setForm]=useState({
                img:'',
                title:'',
                descrip:'',
                color:''
    })
                                           holaDanelComoEsta
                                           holadanelcomoesta
    const handleChange=e=>{
            setForm({
                
                ...form,
                [e.target.name]:e.target.value})
            }
    const handleSubmit=async e=>{
            e.preventDefault()
            try{
                let config={
                    method:'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify(form)
                }
                await fetch('http://localhost:8000/api/info',config)
                navigate('/')
            }catch(error){
                console.error("El error es :",error)
            }
        }

    return(
            <Crear 
                form={form}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
    )
}

export default Contenedor


// export default class Contenedor extends React.Component{
//     state={
//             form:{
//                 img:'',
//                 title:'',
//                 descrip:'',
//                 color:''
//             }
//         }
//         handleChange=e=>{
//             this.setState({
//                 form:
//                 {...this.state.form,
//                 [e.target.name]:e.target.value}})
//             }
//         handleSubmit=async e=>{
//             e.preventDefault()
//             try{
//                 let config={
//                     method:'POST',
//                     headers:{
//                         'Accept':'application/json',
//                         'Content-type':'application/json'
//                     },
//                     body:JSON.stringify(this.state.form)
//                 }
//                 let res=await fetch('http://localhost:8000/api/info',config)
//                 let data=await res.json()
//                 console.log(data)
//                 this.props.navigate('/')
//             }catch(error){
//                 console.error("El error es :",error)
//             }
//         }
    
//         render(){
//             return(
//             <Crear 
//                 form={this.state.form}
//                 onChange={this.handleChange}
//                 onSubmit={this.handleSubmit}
//             />
//             )
//         }
// }
