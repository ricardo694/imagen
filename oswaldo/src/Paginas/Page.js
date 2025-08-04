import React from "react";
import ListaTarjetas from "../Componentes/Lista";
import Saludo from "../Componentes/Saludo";
import Botn from '../Componentes/Button'

export default class Principal extends React.Component{
    state={
            data:[]
        }
    async componentDidMount(){
        await this.fetchPersonajes()
    }
    fetchPersonajes=async()=>{
        let res=await fetch('http://localhost:8000/api/info')
        let data=await res.json()
        console.log(data)
        this.setState({
            data
        })
    }
    render(){
        return(
                <div>
                    <Saludo
                    name="Oswaldo"
                    />
                 <ListaTarjetas
                 personajes={this.state.data}
                 />
                  <Botn/>
                </div>
        )
    }
}