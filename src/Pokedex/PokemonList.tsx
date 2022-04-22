import { useInfiniteQuery } from "react-query";
import { Link } from "react-router-dom";
import { listFetcher } from "../services/Api";
import PokemonListItem from "./PokemonListItem";
import styles from './PokemonList.module.scss'
import { observer } from "mobx-react-lite";
import { useStore } from "../stores";
import { useEffect } from "react";

type PokemonListProps = {
  filter: (e: any) => boolean;
}

const PokemonList = ({ filter }: PokemonListProps) => {
  const { app } = useStore()
  const {
    data, 
    isLoading, 
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery('pokemon-list', 
    listFetcher(0,50), 
    {
      staleTime: Infinity,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.next != null) {
          return lastPage.page + 1;
        }
      },
  });

  useEffect(() => {
    window.scrollTo(0, app.scrollPositionY);
  }, [app])

  const handlePokemonClick = () => {
    app.handleScrollPositionYChange(window.scrollY)
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data?.pages.map((page) => page.results.filter(filter).map((pokemon: any) => (
            <Link 
              key={pokemon.name}
              to={`/details/${pokemon.name}`}
              className={styles['pokemon-link']}
              onClick={handlePokemonClick}
            >
              <PokemonListItem {...pokemon} />
            </Link>
          )))}
          {hasNextPage && (
            <button
              onClick={() =>fetchNextPage()}
              className={styles['load-more-btn']}
            >
              Load more
            </button>
          )}
        </>
      )}
    </>
  )
}

export default observer(PokemonList);
