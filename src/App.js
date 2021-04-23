import React,{useReducer} from "react"
import ComponentsManager from "./Components/ComponentsManager"

import Test from "./Test"
import Mails from "./Components/data"


export const UserContext = React.createContext()

const initialState = {
  pranavState: 0,
  isSearchOn: false,
  active:null,
  delete: [],
  data: [],
}

const Reducer = (state, action) => {
  switch(action.type){
    case 'Pranav':
      return { pranavState: state.pranavState + 1 }
    case 'search': 
      return {isSearchOn : !state.isSearchOn }
    case 'mails':
      return { ...state, data: action.value }
    case 'active':
      return {...state, active: action.value}
    case 'delete':
      return { ...state, delete: [...state.delete, action.delete]}
    default: return state
  }
}

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <>
    <UserContext.Provider value={{state : state, dispatch: dispatch}}>
      <ComponentsManager />
      {/* <Test /> */}
    </UserContext.Provider>
    </>
  );
}

export default App;
