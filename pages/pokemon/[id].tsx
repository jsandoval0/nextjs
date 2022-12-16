import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Pokemon } from '../../interfaces'
import { pokeApi } from '../../api'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react'
import { Layout } from '../../components/layouts'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const init: string = pokemon.name.charAt(0).toLocaleUpperCase()
  const title = `${init}${pokemon.name.substring(1)}`
  return (
    <Layout title={title}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4} >
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              alt={pokemon.name}
              width='100%'
              height={200}
            />

            <Container direction='row' display='flex' justify='space-between' >
              <Text h2 css={{ textGradient: '45deg, $blue600 -20%, $pink600 50%' }}>{pokemon.abilities[0].ability.name.toLocaleUpperCase()}</Text>
              <Text h2 css={{ textGradient: '45deg, $green600 -20%, $yellow600 50%' }}>{pokemon.abilities[1].ability.name.toLocaleUpperCase()}</Text>
            </Container>
          </Card>
        </Grid>
        <Grid xs={12} sm={8} >
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }} >
              <Text h1 transform='capitalize'>{pokemon.name}</Text>
              <Button color='gradient' ghost>Guardar en Favoritos</Button>
            </Card.Header>
            <Card.Body>
              <Text size={30} >Sprites:</Text>
              <Container direction='row' display='flex' >
                <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
                />
                <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={100}
                height={100}
                />
                <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
                />
                <Image
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
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
