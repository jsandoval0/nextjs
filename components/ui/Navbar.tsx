import Image from 'next/image'
import Link from 'next/link'
import { Spacer, Text, useTheme } from '@nextui-org/react'

export default function Navbar () {
  const { theme } = useTheme()
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0 20px',
      backgroundColor: theme?.colors.gray800.value
    }}>
      <Link href="/" passHref >
      <div style={{ display: 'flex', alignItems: 'center' }} >
          <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png'
            alt = "icono de la app"
            width = {70}
            height = {70}
          />
          <Spacer />
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okemon</Text>
        </div>
      </Link>
      <Spacer css={{ flex: 1 }}/>
      <Link href='/favorites' passHref>
        <Text color='white' h3>Favoritos</Text>
      </Link>
    </div>
  )
}
