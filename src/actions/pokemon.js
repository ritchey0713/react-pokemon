const API_URL = "https://pokeapi.co/api/v2/pokemon"

const getAllPokemon = (pokemon) => {
  return {
    type: 'GET_ALL_POKEMON',
    pokemon
  }
}


export const fetchAllPokemon = () => {
  return dispatch => {
    return fetch(API_URL)
    .then(resp => resp.json())
    .then(pokemon => dispatch(getAllPokemon(pokemon.results)))
  }
}

export const getData = (pokemon) => {
  debugger
  return dispatch => {
    return fetch(`${pokemon.url}`)
    .then(resp => resp.json())
    .then(pokemon => console.log(pokemon))
  }
}
