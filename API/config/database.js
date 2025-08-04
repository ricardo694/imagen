import sqlite from 'sqlite3'

const DBSOURCE=`db_${process.env.NODE_ENV}.sqlite`
let db=new sqlite.Database(DBSOURCE,(err)=>{
    if(err){
        console.log(err.message)
        throw err
    }
    else{
        console.log('Estamos en sqlite')
        db.run(
            `
            CREATE TABLE Personajes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            descrip TEXT,
            img TEXT,
            color TEXT
            )`,
            (err)=>{
                if(err){
                    console.log('Ya esta creada la tabla')
                }
                else{
                    var insert='INSERT INTO Personajes (title,descrip,img,color) VALUES(?,?,?,?)'
                    db.run(insert,["Bob esponja","una esponja marina amarilla enérgica y optimista que vive en una piña sumergida en una ciudad ficticia llamada Fondo de Bikini. Bob Esponja tiene un entusiasmo infantil por la vida, que se traslada a su trabajo como cocinero en un restaurante de comida rápida llamado Krusty Krab.","https://i.pinimg.com/originals/44/48/2b/44482b0788436b607f176b6ac2c128f3.png","red"])
                    db.run(insert,["Calamardo Tentáculos","un pulpo turquesa amargo y gruñón. Vive en la ciudad submarina de Fondo de Bikini en un moái situado entre la casa de piñas de Bob Esponja y la roca de Patricio Estrella.","https://i.pinimg.com/736x/6a/cd/d6/6acdd6f712c559716b8999a0c6ce439e.jpg","green"])
                }
            }
        )
    }
})
export default db