import { combineReducers } from 'redux'

const initialState = {
  menuselected: "Orders",
  viewselected: "Grid"
}

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_TODO":
      if(action.id !== undefined){
        if(state === null){
          state = initialState
        }
        return {...state, 
          menuselected: action.id
        }
      }
    break;
    case "TOGGLE_VIEW":
      if(action.id !== undefined){
        if(state === null){
          state = initialState
        }
        return {...state, 
          viewselected: action.id
        }
      }
    break;
  default:
     return null;
  }
}

export default combineReducers({
    rootReducer
  })
