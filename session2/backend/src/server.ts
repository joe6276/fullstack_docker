import express, { json } from 'express'
import router from './routes/movieRoutes'

const app= express()

app.use(json())

app.use("/movies", router)


app.listen(4000, ()=>{
    console.log("Server is Listening...");
    
})