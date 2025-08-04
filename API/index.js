import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './config/routes.js'

//Middleware

const app=express()
const corsOptions={
    origin:'*'
}
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
//Rutas
app.use('/api',cors(corsOptions),routes)
app.get('/',(req,res)=>res.send('Welcome to Bob Sponja´s world'))

//Escucha del puerto
const server=app.listen(process.env.PORT || 8000,()=>{
    console.log(`http://localhost:${server.address().port}`)
})
export default app