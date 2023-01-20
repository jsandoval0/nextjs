import { useState } from 'react'
import { Layout } from '../../components/layouts'
import { NextPage } from 'next'
import { Pokemon } from '../../interfaces/pokemon-full'
import NoFavorite from './../../components/noFavorite/NoFavorite'
import FavoriteContainer from '../../components/favoriteContainer/FavoriteContainer'
import { listFavorite } from '../../utils'

interface Props {
  pokemon: Pokemon
}

const index: NextPage<Props> = () => {
  const [favoritePokemon, setfavoritePokemon] = useState<number[]>(listFavorite())

  return (
    <Layout title='Favoritos'>
      {
        favoritePokemon.length === 0
          ? <NoFavorite />
          : <FavoriteContainer pokemons={favoritePokemon} />
      }
    </Layout>
  )
}

export default index
