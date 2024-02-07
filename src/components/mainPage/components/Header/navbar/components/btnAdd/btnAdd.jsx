// LIB
import clsx from "clsx";
import { memo, useContext } from "react";

// CSS
import style from "./btnAdd.module.scss";

// Feature
import { ListContext } from "../../../../../../../Feature/addTodo/addTodo";

function BtnAdd() {

  const context = useContext(ListContext)

  return (
    <div
      className={clsx(style.space, "d-flex-c")}
      onClick={context.add}
      title={"New TodoList"}
    >
      <button className={style.btn}></button>
      <p className={style.btn_text}>+</p>
    </div>
  );
}

export default memo(BtnAdd);
