import { Request } from "express";

export interface Movie{
    id:string;
    title:string;
    description:string;
    image:string;
}



export interface Body{
    title:string;
    description:string;
    image:string;
}

export interface ExtendedBody extends Request{
    body:Body
}