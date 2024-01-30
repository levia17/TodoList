// CSS
import style from "./main.module.scss";

// Components
import TodoList from "./TodoList/TodoList";
import { ListContext } from "../../../../Feature/addTodo/addTodo";
import { useContext, useLayoutEffect, useState } from "react";

function Main() {
  const context = useContext(ListContext);
  const [listAdded, setListAdded] = useState([]);

  useLayoutEffect(() => {
    setListAdded(context.listTodo);
  }, [context.listTodo]);

  return (
    <div className={style.Main}>
      {listAdded.map((value) => (
        <TodoList id={value.id} key={value.id} />
      ))}
    </div>
  );
}

export default Main;
