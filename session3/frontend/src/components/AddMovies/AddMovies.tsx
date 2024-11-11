import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { AddMovie } from "../../Interfaces";

export default function AddMovies() {
    const [movie, setMovie] = useState<any>({
      title:"",
      description:"",
      image:""
    })
    const queryClient = useQueryClient()

    const onInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setMovie((prev:AddMovie)=>({...prev, [e.target.name]:e.target.value}))
    }
    
    const { mutate } = useMutation({
        mutationFn: (movie:AddMovie) =>
          fetch("http://localhost:4000/movies", {
            method: "POST",
            body: JSON.stringify(movie),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }).then((res) => res.json()),
          onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['movies']})
          }
      });
  return (
    <>
      <div className="container">

        <div className="image">
            <img src="https://cdn.pixabay.com/photo/2019/05/23/13/11/headphones-4223911_1280.jpg" alt="" />
        </div>
        <div className="inputs">
            <h1>Add a Movie</h1>
          <div>
            <label htmlFor="title">Movie Title</label>
            <input type="text"    name="title" value={movie.title} onChange={onInputChange}/>
          </div>
          <div>
            <label htmlFor="title">Movie Image</label>
            <input type="text"   name="image" value={movie.price} onChange={onInputChange}/>
          </div>

          <div>
            <label htmlFor="title">Movie Description</label>
            <input name="description" value={movie.description} onChange={onInputChange}/>
          </div>
         <div>
         <button onClick={()=> mutate(movie)}>Add Movies</button>
         </div>
        </div>
      </div>
    </>
  );
}
