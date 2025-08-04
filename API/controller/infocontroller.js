import db from "../config/database.js";

export default class Infocontroller{
    static index(req,res){
        var sql="SELECT * FROM Personajes"
        db.all(sql,(err,personaje)=>{
            if(err){
                res.status(500).json({'error':err.message})
            }
            res.json(personaje)
        })
    }
    static store(req,res){
        const{title,descrip,img,color}=req.body
        const sql='INSERT INTO Personajes (title,descrip,img,color) VALUES(?,?,?,?)'
        const params=[title,descrip,img,color]
        db.run(sql,params,function(err){
            if(err){
                res.status(500).json({'error':err.message})
            }
            req.body.id=this.lastID
            res.json({'title':req.body})
        })
    }
    static details(req,res){
        var sql="SELECT * FROM Personajes WHERE id=?"
        db.get(sql,req.params.id,(err,personaje)=>{
            if(err){
                res.status(500).json({'error':err.message})
            }
            res.json(personaje)
        })
    }
}