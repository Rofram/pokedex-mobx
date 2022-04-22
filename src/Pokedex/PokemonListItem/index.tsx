import { useQuery } from "react-query"
import { detailsFetcher } from "../../services/Api"
import { PokemonListItem } from "./PokemonListItem"
import { SkeletonListItem } from "./SkeletonListItem"

type PokemonListItemProps = {
  name: string
  url: string
}

const PokemonListItemWrapper = ({name, url}: PokemonListItemProps) => {
  const {data, isLoading} = useQuery(["pokemon-details", name], detailsFetcher(name),
    {
      staleTime: Infinity,
    }
  );

  return (
    <>
      {!isLoading ? <PokemonListItem data={data} /> : <SkeletonListItem />}
    </>
  )
}

export default PokemonListItemWrapper;