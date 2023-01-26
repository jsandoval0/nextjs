import { pokeApi } from '../api'
import { Pokemon } from '../interfaces'

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`, {
      headers: {
        'accept-encoding': '*'
      }
    })

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
      abilities: data.abilities
    }
  } catch (error) {
    return null
  }
}
