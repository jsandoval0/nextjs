import { FC } from 'react'
import { useRouter } from 'next/router'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { SmallPokemon } from '../../interfaces'

interface Props {
  pokemon: SmallPokemon
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter()

  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`).catch((e) => console.log(e))
  }

  return (
    <Grid xl={1} xs={6} sm={3} md={2}>
      <Card isHoverable isPressable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between' >
            <Text>{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}

export default PokemonCard
