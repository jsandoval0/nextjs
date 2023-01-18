import { Container, Image, Text } from '@nextui-org/react'

const NoFavorite = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 100px)',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
    }}>
      <Text h1>Aun no hay Favoritos</Text>
      <Image
        src='https://static.pokemonpets.com/images/monsters-images-800-800/8252-Mega-Shadow-Lugia.webp'
        alt='Dark Lugia'
      />
    </Container>
  )
}

export default NoFavorite
