import { Grid } from '@nextui-org/react'
import { FC } from 'react'
import { FavoritePokemon } from '../favoritePokemon'

interface Props {
  pokemons: number[]
}

const FavoriteContainer: FC<Props> = ({ pokemons }) => {
  const pokeList = pokemons.map((id, index) => {
    return <FavoritePokemon key={index} id={id} />
  })

  return (
    <Grid.Container
                gap={2}
                direction='row'
                justify='flex-start'
    >
      {pokeList}
    </Grid.Container>
  )
}

export default FavoriteContainer
