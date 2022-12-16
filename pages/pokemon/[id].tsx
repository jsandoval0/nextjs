import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Pokemon } from '../../interfaces'
import { pokeApi } from '../../api'
import { Card, Container, Image, Text } from '@nextui-org/react'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Card>
      <Card.Body>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name}
        />
      </Card.Body>
      <Card.Footer>
        <Container alignContent='center' >
          <Text h2>Name:</Text>
        <Text
          h2
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%'
          }}>
          {pokemon.name.toLocaleUpperCase()}
        </Text>
        </Container>
        <Container css={{ justifyContent: 'flex-end', textAlign: 'end' }}>
          <Text h2>Ability</Text>
        <Text
          h2
          css={{
            textGradient: '45deg, $green600 -20%, $yellow600 50%'
          }}>
            {pokemon.abilities[1].ability.name.toLocaleUpperCase()}
        </Text>
        </Container>
        {/* <Text>{pokemon.types[1]}</Text> */}
      </Card.Footer>
    </Card>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon151 = [...Array(151)].map((value, i) => `${i + 1}`)
  return {
    paths: pokemon151.map((id) => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`, {
    headers: {
      'accept-encoding': '*'
    }
  })

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage
