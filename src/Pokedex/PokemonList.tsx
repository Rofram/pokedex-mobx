import { useInfiniteQuery } from "react-query";
import { Link } from "react-router-dom";
import { listFetcher } from "../services/Api";
import PokemonListItem from "./PokemonListItem";
import styles from './PokemonList.module.scss'
import { observer } from "mobx-react-lite";

type PokemonListProps = {
  filter: (e: any) => boolean;
}

const PokemonList = ({ filter }: PokemonListProps) => {
  const {
    data, 
    isLoading, 
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage
  } = useInfiniteQuery('pokemon-list', 
    listFetcher(), 
    {
      staleTime: 600_000,
      getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data?.pages.map((page) => page.filter(filter).map((pokemon: any) => (
            <Link 
              key={pokemon.name}
              to={`/details/${pokemon.name}`}
              className={styles['pokemon-link']}
            >
              <PokemonListItem {...pokemon} />
            </Link>
          )))}
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
          <button 
            onClick={() =>fetchNextPage()}
            className={styles['load-more-btn']}
          >
            Load more
          </button>
        </>
      )}
    </>
  )
}

export default observer(PokemonList);
