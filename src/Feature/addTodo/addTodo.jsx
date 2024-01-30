import { createContext, useState } from "react";


export const ListContext = createContext();

let count = 0;

// Logic

function TodoContext({ children }) {
  const [listTodo, setListTodo] = useState([]);

  //   console.log(listTodo);

  const addTodo = () => {
    count++;
    setListTodo([...listTodo, { id: count }]);
    // console.log("Added!");
  };

  const value = {
    listTodo,
    addTodo
  };

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
}

// Context

export {TodoContext};
