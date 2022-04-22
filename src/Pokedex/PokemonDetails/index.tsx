import { useQuery } from "react-query";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { detailsFetcher } from "../../services/Api";
import PokemonListItem from "../PokemonListItem";

import styles from './PokemonDetails.module.scss'

type PokemonDetailsProps = {
  name: string
}

const PokemonDetails = () => {
  const { name } = useParams<PokemonDetailsProps>()

  if (!name) {
    return <div>No pokemon selected</div>
  }

  const { data, isLoading } = useQuery(['pokemon-details', name],
    detailsFetcher(name),
    {
      staleTime: Infinity,
  });

  return (
    <>
      <Link to="/" className={styles['nav-bar']}>
        &lt; Back to Pokedex
      </Link>
      {!isLoading && <PokemonListItem name={name} url={data.url} />}
    </>
  );
}

export default PokemonDetails;