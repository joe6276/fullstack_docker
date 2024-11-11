import { useQuery } from "@tanstack/react-query"


export default function Movies(){

    const {data, isLoading, error } = useQuery({
        queryKey:["movies"],
        queryFn:()=> fetch("http://localhost:4000/movies").then((res)=> res.json()),
        staleTime:4000
      })

    return(
        <>
             <div id="app">
                {data && data.map((movie:any)=>(
                       <article id="item">
                       <img src={movie.image} alt={movie.title} />
                       <div>
                         <div>
                           <h3>{movie.title}</h3>
                           <p>$300</p>
                           <p>
                           {movie.description}
                           </p>
                         </div>
                       </div>
                     </article>
                ))}
             </div>

        { isLoading && <p> <i> Loading Movies...</i></p>}
        { error && <p> <i>{error.message}</i></p>}
        </>
     )

}

