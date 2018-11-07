export default(state=[], action) => {

  switch(action.type){
    case 'GET_ALL_POKEMON':
    return action.pokemon

    default:
    return state

  }


}
