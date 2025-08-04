import React from "react";
import Tarjeta from "./Tarjetas";
const ListaTarjetas=({personajes})=>(
        <div>
            {personajes.map((personaje)=>{
                                    return(
                                        <Tarjeta
                                        key={personaje.id}
                                        title={personaje.title}
                                        descrip={personaje.descrip}
                                        img={personaje.img}
                                        color={personaje.color}
                                        />
                                    )
                                })
                                }
        </div>
    )
export default ListaTarjetas