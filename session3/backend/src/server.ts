import express, { json } from 'express'
import router from './routes/movieRoutes'
import cors from 'cors'

const app= express()

app.use(json())
app.use(cors())

app.use("/movies", router)


app.listen(4000, ()=>{
    console.log("Server is Listening Here...");
    
})