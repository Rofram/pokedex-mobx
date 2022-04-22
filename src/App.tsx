import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'

const PokemonDetails = lazy(() => import('./Pokedex/PokemonDetails'));
const Pokedex = lazy(() => import('./Pokedex'));


const queryClient = new QueryClient();

const App = () => {
  return (
    <Suspense fallback={<>Suspense...</>}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Pokedex />} />
              <Route path="/details/:name" element={<PokemonDetails />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Suspense>
  )
}

export default App;
