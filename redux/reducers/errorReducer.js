import { actionTypes } from "../types";


const initialState = {
  error: false,
  message: ''
};

export const errorReducers = (state = initialState ,action) => {
  switch(action.type){
    case actionTypes.SET_NEW_ERROR:
      return {
        error:true,
        message: action.payload,
      }
    case actionTypes.REMOVE_ERROR:
      return{
        error: false,
        message: ''
      }
    default:
      return {
        ...state
      }
  }
}