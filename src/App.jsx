import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { PokeCard } from "./Components/PokeCard.jsx";
import { PokeList } from "./Components/PokeList.jsx";
function App() {
   const [data,setData] = useState([]);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(null);

   useEffect(() => {
      
      async function getPokemons(){
         try{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
            
            if(!response.ok){
               throw new Error('error ' + response.status);
            }

            let newData = await response.json();

            newData.results.map(async (element,index) => {
                  element.id = index + 1;
                  const url = element.url;
                  const response = await fetch(url);
                  const content = await response.json();
                  element.url = content.sprites.front_default;
               }
            )
            setData(newData.results);
         }catch(error){
            console.log(error);
         }
      }
      getPokemons()
   }, [])
   if (error) return <p>Data fetching error</p>
   if (loading) return <p>Datafetch loading</p>
  return (
     <>
        <h1>Pokemon Cards from 1st to 100th pokemon </h1>
         <PokeList fetchDataResult={data} />
     </>
  );
}

export default App;
