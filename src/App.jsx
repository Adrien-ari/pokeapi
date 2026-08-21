import { useEffect, useState } from "react";
import { PokeList } from "./Components/PokeList";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPokemons() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon, index) => {
            const response = await fetch(pokemon.url);

            if (!response.ok) {
              throw new Error(`Failed to fetch ${pokemon.name}`);
            }

            const details = await response.json();

            return {
              id: index + 1,
              name: details.name,
              imageUrl: details.sprites.front_default,
            };
          })
        );

        setPokemons(pokemonDetails);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getPokemons();
  }, []);

  if (loading) {
    return <p className="status">Loading Pokémon...</p>;
  }

  if (error) {
    return <p className="status error">Error: {error}</p>;
  }

  return (
    <main>
      <header className="hero">
        <p className="subtitle">PokéAPI · Generation I</p>
        <h1>Pokémon Collection</h1>
        <p className="description">
          Explore the first 100 Pokémon and discover their names and artwork.
        </p>
      </header>

      <PokeList pokemons={pokemons} />
    </main>
  );
}

export default App;