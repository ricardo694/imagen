import React from "react"
import './Css/Tarjeta.css'
export default class Tarjeta extends React.Component{
    render(){
        const {img,title,descrip,color}=this.props
        return(
            <div className="todo">
                <div className="contenedor" style={{background:`${color}`}}>
                    <div >
                        {/* <img  src={img} alt="" className="imagen"/> */}
                        {img ? (
                            <img src={img} alt="" className="imagen" />
                        ) : null}
                    </div>
                    <div >
                        <h1 className="Titulo">{title}</h1>
                        <p className="Texto">{descrip}</p>
                    </div>
                </div>
            </div>
        )
    }
}
