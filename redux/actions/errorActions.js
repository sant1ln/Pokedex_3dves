import { actionTypes } from "../types"

export const setNewError = (error) =>{
  return{
    type: actionTypes.SET_NEW_ERROR,
    payload: error
  }
}