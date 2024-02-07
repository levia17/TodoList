// LIB
import { Fragment, useContext, useLayoutEffect } from "react";

// CSS
import style from "./btnRemoveTodo.module.scss";

// Context
import { ListContext } from "../../../../../../../Feature/addTodo/addTodo";

function BtnRemoveTodo(id) {
  const { unRemove, comRemove } = useContext(ListContext);


  const handleUnRemove = () => {
    unRemove(id.id);
  }

  const handleComRemove = () => {
    comRemove(id.id);
  }
  
  return (
    // <button
    //   className={style.btn}
    //   title={"Remove Todo"}
    //   onClick={() => {
    //     // console.log(id.id);
    //     removeTodo(id);
    //   }}
    // >
    //   Hi
    // </button>
    <Fragment>
      <button onClick={handleUnRemove}>UN</button>
      <button onClick={handleComRemove}>COM</button>
    </Fragment>
  );
}

export default BtnRemoveTodo;
