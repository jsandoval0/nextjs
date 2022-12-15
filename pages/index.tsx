import type { NextPage, GetStaticProps } from 'next'
import { Layout } from '../components/layouts/'
import { pokeApi } from '../api/'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import Image from 'next/image'

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons)
  const Pokes = pokemons.map((pokemon) => {
    return <li key={pokemon.name}>{pokemon.name} - <Image src={pokemon.img} alt={pokemon.name} width={30} height={30} /></li>
  })
  return (
    <Layout title = {'Listado de Pokemon'} >
      <ul>
        {Pokes}
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151', {
    headers: {
      'accept-encoding': '*'
    }
  })
  let i = 0
  const pokeFriends = data.results.map((pokemon) => {
    i = i + 1
    return {
      name: pokemon.name,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`
    }
  })

  return {
    props: {
      pokemons: pokeFriends
    }
  }
}

export default HomePage
