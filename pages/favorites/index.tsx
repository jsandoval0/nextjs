import { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import NoFavorite from './../../components/noFavorite/NoFavorite'
import FavoriteContainer from '../../components/favoriteContainer/FavoriteContainer'
import { listFavorite } from '../../utils'

const Index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [favoritePokemon, setfavoritePokemon] = useState<number[]>([1])

  useEffect(() => {
    setfavoritePokemon(listFavorite())
  }, [])

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

export default Index
