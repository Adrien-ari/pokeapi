import { PokeCard } from "./PokeCard";

export function PokeList({ pokemons }) {
  return (
    <section className="pokemon-grid">
      {pokemons.map((pokemon) => (
        <PokeCard
          key={pokemon.id}
          id={pokemon.id}
          imageUrl={pokemon.imageUrl}
          name={pokemon.name}
        />
      ))}
    </section>
  );
}