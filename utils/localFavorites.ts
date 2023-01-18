const toggleFavorite = (id: number) => {
  let favorite: number[] = JSON.parse(localStorage.getItem('favorite') ?? '[]')

  if (favorite.includes(id)) {
    favorite = favorite.filter(pokeId => pokeId !== id)
  } else {
    favorite.push(id)
  }

  localStorage.setItem('favorite', JSON.stringify(favorite))
  console.log(favorite)
}

const pokemonInFavorite = (id: number): boolean => {
  if (typeof window === 'undefined') {
    return false
  }
  const favorite: number[] = JSON.parse(localStorage.getItem('favorite') ?? '[]')

  return favorite.includes(id)
}

export { toggleFavorite, pokemonInFavorite }
