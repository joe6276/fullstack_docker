import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import AddMovies from "./components/AddMovies/AddMovies";
import Movies from "./components/Movies/movies";

const queryclient = new QueryClient();
function App() {

  
  return (
    <QueryClientProvider client={queryclient}>
      <>
        <AddMovies />
        
          <Movies />
          
      </>
    </QueryClientProvider>
  );
}

export default App;
