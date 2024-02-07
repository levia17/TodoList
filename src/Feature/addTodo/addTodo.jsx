import { createContext, useEffect, useReducer } from "react";

// Feature
// Remove Todo
import reducer from "../removeTodo/reducer";
// Actions
import {
  completely_remove,
  uncompletely_remove,
  _add,
} from "../removeTodo/actions";

export const ListContext = createContext();

let count = 0;

const initState = {
  listTodo: [],
};

// Logic
function TodoContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const {listTodo} = state;

  useEffect(()=>{
    console.log(state);
  })

  // console.log(state);

  // const removeTodo = (id)=>{
  //   setListTodo(prevListTodo => prevListTodo.filter(todo => todo.id !== id.id));
  //   console.log(listTodo);
  // }

  const unRemove = (id) => {
    dispatch(uncompletely_remove(id));
  };
  const comRemove = (id) => {
    dispatch(completely_remove(id));
  };

  const add = () => {
    count++;
    dispatch(_add(count));
  };

  const value = {
    listTodo,
    add,
    unRemove,
    comRemove,
  };

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
}

// Context

export { TodoContext };
