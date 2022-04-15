import { QueryClient, QueryClientProvider } from 'react-query'
import PokemonList from './Pokedex/PokemonList';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonList />
    </QueryClientProvider>
  )
}

export default App;
