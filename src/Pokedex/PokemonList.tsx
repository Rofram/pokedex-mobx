import { useQuery } from "react-query";

const PokemonList = () => {
  const {data, isLoading} = useQuery('pokemon-list', 
    async () => await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0').then(res => res.json()), 
    {
      staleTime: Infinity,
  });

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.results.map((pokemon: any) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default PokemonList;