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
    render(){
        return(
            <div>
                <Tarjeta
                    {...this.state.form}
                />
                <CrearTarjetas
                    onChange={this.handleChange}
                    form={this.state.form}
                />
            </div>
        )
    }
}