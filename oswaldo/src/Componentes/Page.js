import React from "react";
import ListaTarjetas from "./Lista";
import Saludo from "./Saludo";
import Botn from './Button'

const Page =({data})=>{
    return(
        <React.Fragment>
            <Saludo
                name="Richard"
            />
            <ListaTarjetas
                personajes={data}
            />
            <Botn/>
        </React.Fragment>
    )
}

export default Page