import { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Pokemon } from '../../interfaces'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react'
import { Layout } from '../../components/layouts'
import { pokemonInFavorite, toggleFavorite } from '../../utils'
import confetti from 'canvas-confetti'
import { getPokemonInfo } from '../../utils/getPokemonInfo'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const init: string = pokemon.name.charAt(0).toLocaleUpperCase()
  const title = `${init}${pokemon.name.substring(1)}`

  const [isInFavorite, setIsInFavorite] = useState(false)

  useEffect(() => {
    setIsInFavorite(pokemonInFavorite(pokemon.id))
  }, [pokemon.id])

  function randomInRange (min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  const onToggleFavorite = () => {
    toggleFavorite(pokemon.id)
    setIsInFavorite(pokemonInFavorite(pokemon.id))

    if (!isInFavorite) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: randomInRange(55, 125),
        origin: {
          x: 0.5,
          y: 0.5
        }
      })?.catch()
    }
  }

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
              <Text h2 css={{ textGradient: '45deg, $blue600 -20%, $pink600 50%' }}>
                {pokemon.abilities[0].ability.name.toLocaleUpperCase()}
              </Text>
              <Text h2 css={{ textGradient: '45deg, $green600 -20%, $yellow600 50%' }}>
                {pokemon.abilities.length === 2 ? pokemon.abilities[1].ability.name.toLocaleUpperCase() : 'No-ability'}
              </Text>
            </Container>
          </Card>
        </Grid>
        <Grid xs={12} sm={8} >
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }} >
              <Text h1 transform='capitalize'>{pokemon.name}</Text>
              <Button color='gradient' ghost={!isInFavorite} onPress={onToggleFavorite}>
                {isInFavorite ? 'Eliminar de Favoritos' : 'Guardar en Favoritos'}
              </Button>
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
  const pokemon251 = [...Array(251)].map((value, i) => `${i + 1}`)
  return {
    paths: pokemon251.map((id) => ({
      params: { id }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const pokemon = await getPokemonInfo(id)

  if (pokemon == null) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {
      pokemon,
      revadilate: 86400
    }
  }
}

export default PokemonPage
