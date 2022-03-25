

export const pokemonsReducers = (state,action) => {
  switch(action.type){
    case 'some':
      return {
        ...state,
        text: action.payload
      }
    default:
      return {
        state
      }
  }
}