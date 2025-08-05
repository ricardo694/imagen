import React from "react";
import "../Css/crear.css";


export default class CrearTarjetas extends React.Component{
    render(){
        const {onChange,form,onSubmit}=this.props
        return(
            <div className="general">
                <form onSubmit={onSubmit} className="formu">
                    <input 
                    onChange={onChange} 
                    value={form.title} 
                    className="inputForm" 
                    name="title" 
                    type="text" 
                    placeholder="Titulo"
                    />
                    <input onChange={onChange} value={form.descrip}  className="inputForm" name="descrip" type="text" placeholder="Descripcion"/>
                    <input onChange={onChange} value={form.img} className="inputForm" name="img" type="text" placeholder="Imagen"/>
                    <input onChange={onChange} value={form.color} className="inputForm" name="color" type="text" placeholder="Color nombre o hex"/>
                    <button className="botoNN" type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}
