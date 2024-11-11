import { Request , Response } from 'express';
import mssql from 'mssql'
import sqlConfig from '../config';
import {v4 as uid} from "uuid"

export const addMovies =async(req:Request, res:Response,)=>{
try {

    const {title,description,image} = req.body
    const pool = await mssql.connect(sqlConfig)// create a Pool

    // Make a request and run proceducre
    await pool.request()
    .input("id", uid())
    .input("title", title)
    .input("description", description)
    .input("image", image)
    .execute("addMovie")

    return res.status(201).json({message:"Movie Added"})

} catch (error) {
    return res.status(400).json(error)
}
}

export const getMovies= async(req:Request, res:Response)=>{
    try {
        const pool = await mssql.connect(sqlConfig)// create a Pool
        // Make a request and run proceducre
       let movies=await( await pool.request().execute("getMovies")).recordsets
        return res.status(200).json(movies)
    
    } catch (error) {
        res.status(400).json(error)
    }
    }