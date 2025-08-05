import React from "react";
import CrearTarjetas from "./CrearTarjetas";
import Tarjeta from "./Tarjetas";

const Crear =({form,onChange,onSubmit})=>{
    return(
    <div>
        <Tarjeta
            {...form}
        />
        <CrearTarjetas
            onChange={onChange}
            onSubmit={onSubmit}
            form={form}
        />
    </div>
    )
}
export default Crear