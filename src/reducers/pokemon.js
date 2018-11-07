export default(state={
  basicInfo: [],
  data: []
}, action) => {

  switch(action.type){

    case 'GET_ALL_POKEMON':
    return {
      url: action.pokemon,
      data: []}

    case 'GET_FULL_DATA':
    return [action.fullData]

    default:
    return state

  }


}
