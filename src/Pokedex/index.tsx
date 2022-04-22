import { useStore } from "../stores"
import PokemonList from "./PokemonList"
import styles from './Pokedex.module.scss'
import { observer } from "mobx-react-lite"

const Pokedex = () => {
  const { app } = useStore()

  const filterPokemon = (e: any) => {
    if (!app.searchQuery.trim()) {
      return true
    }

    return new RegExp(app.searchQuery, "i").test(e.name)
  }

  return (
    <>
      <input type="text" placeholder="Enter name of a Pokemon" className={styles.input} onChange={e => app.handleSearchQueryChange(e.target.value)} />
      <PokemonList filter={filterPokemon} />
    </>
  )
}

export default observer(Pokedex);