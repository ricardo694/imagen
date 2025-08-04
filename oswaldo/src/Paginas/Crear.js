import React from "react";
import CrearTarjetas from "../Componentes/CrearTarjetas";
import Tarjeta from "../Componentes/Tarjetas";

export default class Crear extends React.Component{
    state={
        form:{
            img:'',
            title:'',
            descrip:'',
            color:''
        }
    }
    handleChange=e=>{
        this.setState({
            form:
            {...this.state.form,
            [e.target.name]:e.target.value}})
        }
    handleSubmit=async e=>{
        e.preventDefault()
        try{
            let config={
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json'
                },
                body:JSON.stringify(this.state.form)
            }
            let res=await fetch('http://localhost:8000/api/info',config)
            let data=await res.json()
            console.log(data)
            this.props.navigate('/')
        }catch(error){
            console.error("El error es :",error)
        }
    }

    render(){
        return(
            <div>
                <Tarjeta
                    {...this.state.form}
                />
                <CrearTarjetas
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    form={this.state.form}
                />
            </div>
        )
    }
}