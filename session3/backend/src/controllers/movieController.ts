import { Request , Response } from 'express';
import {v4 as uid} from "uuid"
import pool from '../config';
export const addMovies =async(req:Request, res:Response,)=>{
try {

    const {title,description,image} = req.body
    
    // Make a request and run proceducre

    await pool.query(`
        
          INSERT INTO movie(id, title, description, image)
                VALUES('${uid()}', '${title}', '${description}', '${image}')
        `)
   

    return res.status(201).json({message:"Movie Added Successfully!"})

} catch (error) {
    return res.status(400).json(error)
}
}

export const getMovies= async(req:Request, res:Response)=>{
    try {

        // Make a request and run proceducre
       let movies=await( await pool.query('SELECT * FROM movie')).rows
        return res.status(200).json(movies)
    
    } catch (error) {
        res.status(400).json(error)
    }
    }