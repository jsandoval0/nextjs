import type { NextPage, GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react'
import { Layout } from '../components/layouts/'
import { pokeApi } from '../api/'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { PokemonCard } from '../components/pokemon'

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  const Pokes = pokemons.map((pokemon) => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
  })
  return (
    <Layout title = {'Listado de Pokemon'} >
      <Grid.Container gap={2} justify={'flex-start'}>
        {Pokes}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=251', {
    headers: {
      'accept-encoding': '*'
    }
  })
  const pokeFriends = data.results.map((pokemon, i) => {
    return {
      ...pokemon,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`
    }
  })

  return {
    props: {
      pokemons: pokeFriends
    }
  }
}

export default HomePage
