import { useRouter } from 'next/router'
import { Card, Grid } from '@nextui-org/react'

interface Props {
  id: number
}

const FavoritePokemon: React.FC<Props> = ({ id }) => {
  const router = useRouter()

  const onClick = () => {
    router.push(`/pokemon/${id}`).catch((e) => console.log(e))
  }
  return (
      <Grid xs={6} sm={3} md={2} xl={1}>
        <Card
          isHoverable isPressable
          onClick={onClick}
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
  )
}

export default FavoritePokemon
