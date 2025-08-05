import React,{useEffect, useState} from "react";
import Page from "../Componentes/Page";


const ContenedorPage=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
        const fetchPersonajes=async()=>{
            try{
                let res=await fetch('http://localhost:8000/api/info')
                let datos=await res.json()
                console.log(data)
                setData(datos)
            }catch(error){
                console.error("El error es : ", error)
            }
        }
        fetchPersonajes()
    },[])

    return(
        <Page
            data={data}
        />
        )
}
export default ContenedorPage



// export default class ContenedorPage extends React.Component{
//         state={
//             data:[]
//         }
//     async componentDidMount(){
//         await this.fetchPersonajes()
//     }
//     fetchPersonajes=async()=>{
//         try{
//             let res=await fetch('http://localhost:8000/api/info')
//             let data=await res.json()
//             console.log(data)
//             this.setState({
//             data
//             })
//         }catch(error){
//             console.error("El error es : ", error)
//         }
       
//     }
//     render(){
//         return(
//                 <div>
//                     <Page
//                         data={this.state.data}
//                     />
//                 </div>
//         )
//     }
// }