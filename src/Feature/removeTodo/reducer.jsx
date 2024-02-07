import { COMPLETELY_REMOVE, UNCOMPLETELY_REMOVE, ADD } from "./actions";

let count = 0;

const initState = {
  listTodo: [],
};

function reducer(state, actions) {
  let newState, newListTodo;
  console.log(actions);

  switch (actions.type) {
    case ADD:
      // console.log(actions.id);
      newState = {
        listTodo: [...state.listTodo, { id: actions.id }],
      };
      console.log(state.listTodo);
      break;
    case COMPLETELY_REMOVE:
      console.log("hi");
      // newState = {
      //   listTodo: state.listTodo.filter((todo) => todo.id !== actions.id),
      // };
      break;

    case UNCOMPLETELY_REMOVE:
      console.log("hi");
      // newListTodo = [...state.listTodo];
      // newListTodo.filter((todo) => todo.id !== actions.id);
      // console.log(newListTodo);
      // newState = {
      //   newListTodo,
      // };
      break;

    default:
      return state;
  }

  return newState;
}

export { initState };
export default reducer;
