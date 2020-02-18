import { combineReducers } from 'redux'
import { throws } from 'assert';

export const rootReducer   = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      if(action.id !== undefined)

        return state = {menuselected: action.id}
       else{
        state = {menuselected: "Staff"};
       return state;
       }
    break;
  default:
     //  alert("redggg")
      // if(state !== undefined)
      // alert(state.menuselected)
      // alert(action.id);
      
     return null;
  }
}

export default combineReducers({
    rootReducer
  })
