import { useContext, useLayoutEffect, useState } from "react";
// CSS
import style from "./main.module.scss";

// Components
import TodoList from "./TodoList/TodoList";
import { ListContext } from "../../../../Feature/addTodo/addTodo";
import Garbage from "./Garbage/garbage";

function Main() {
  const context = useContext(ListContext);
  const [listAdded, setListAdded] = useState([]);

  // console.log(context.listTodo);

  useLayoutEffect(() => {
    setListAdded(context.listTodo);
    // console.log(context.listTodo);
  }, [context.listTodo]);

  return (
    <div className={style.Main}>
      {listAdded.map((value) => (
        <TodoList id={value.id} key={value.id} />
      ))}
      <Garbage />
    </div>
  );
}

export default Main;
