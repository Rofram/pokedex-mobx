import styles from './PokemonListItem.module.scss'

export const PokemonListItem = ({ data }: any) => (
  <div className={styles['item-container']}>
    <div>
      <img src={data.sprites.front_default} alt={`imagem do pokemon ${data.name}`} />
    </div>
    <div className={styles['item-content']}>
      <div>
        #{data.id} <strong>{data.names.find((item: any) => item.language.name == 'en').name}</strong>
      </div>
      <div>
        Types: {data.types.map((pokemon: any) => pokemon.type.name).join(", ")}
      </div>
    </div>
  </div>
)