import { Layout } from '../../components/layouts'
import { NextPage } from 'next'
import { Pokemon } from '../../interfaces/pokemon-full'
import NoFavorite from './../../components/noFavorite/NoFavorite'
import { listFavorite } from '../../utils'
import { useState } from 'react'
import { Card, Grid } from '@nextui-org/react'

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
          : (
          <Grid.Container
            gap={2}
            direction='row'
            justify='flex-start'
          >
            {
              favoritePokemon.map((id, index) => (
                <Grid key={index} xs={6} sm={3} md={2} xl={1}>
                  <Card
                    isHoverable isPressable
                    css={{
                      padding: '10px'
                    }}
                  >
                    <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    alt={'Pokemon Image'}
                    />
                  </Card>
                </Grid>
              ))
            }
          </Grid.Container>
            )
      }
    </Layout>
  )
}

export default index
