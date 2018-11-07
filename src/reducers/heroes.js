export default(state=[], action) => {

  switch(action.type){
    case 'GET_ALL_HEROES':
    return action.heroes

    default:
    return state

  }


}
