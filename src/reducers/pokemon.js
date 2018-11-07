export default(state={
  basicInfo: [],
  data: []
}, action) => {

  switch(action.type){

    case 'GET_ALL_POKEMON':
    return {
      basicInfo: action.pokemon,
      data: []}

    case 'GET_FULL_DATA':
    return {
      basicInfo: state.basicInfo,
      data: action.fullData
    }


    default:
    return state

  }


}
