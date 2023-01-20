import { FC } from 'react'

import Head from 'next/head'
import { Navbar } from '../ui/'

interface Props {
  children: JSX.Element | JSX.Element[]
  title: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  const origin = typeof window === 'undefined' ? '' : window.location.origin
  return (
    <>
      <Head>
        <title>{title != null ? title : 'PokemonApp'}</title>
        <meta name='author' content='HikenJos' />
        <meta name='description' content={`Informacion sobre el pokemon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Informacion sobre ${title}`}/>
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.jpg`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0 20px'
      }}>
        {children}
      </main>

    </>
  )
}
