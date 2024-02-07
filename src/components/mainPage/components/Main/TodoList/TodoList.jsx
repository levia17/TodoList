// LIB
import clsx from "clsx";
import { memo, useContext, useState } from "react";

// CSS
import style from "./TodoList.module.scss";

// Components
// import Setting from "./components/setting";
import BtnRemoveTodo from "./components/btnRemoveTodo/btnRemoveTodo.jsx";




function TodoList({ id }) {


  const [content, setContent] = useState("");
  const [job, setJob] = useState([]);

  // const todo = {
  //   id: id,
  //   title: title,
  // };

  // useLayoutEffect(() => {
  //   setJob(job);
  // }, [job]);

  const handleSubmit = () => {
    setJob((prev) => [...prev, content]);
    setContent("");
  };


  return (
    <div className={style.container} id={id}>
      <div className={clsx(style.wrapHead, "d-flex-c")}>
        <h1
          className={style.title}
          suppressContentEditableWarning={true}
          contentEditable={true}
        >
          {"Click here to edit title!"}
        </h1>
        {/* <Setting /> */}
      </div>
      <div className={clsx(style.containerAddJob)}>
        <button className={style.btnAddWork} onClick={handleSubmit}>
          <p className={style.btnText}>+</p>
        </button>
        <input
          className={style.input}
          type="text"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
          placeholder={"Put your task there..."}
        />
        <BtnRemoveTodo id={id}/>
      </div>

      <div className={style.containerJob}>
        <ul>
          {job &&
            job.map((value) => (
              <div className={clsx(style.job, "d-flex-c")} key={value}>
                <label
                  className={clsx(style.containerInput, "d-flex-c_vertical")}
                >
                  <input id={style.check} type={"checkbox"} />
                  <p className={style.text}>{value}</p>
                </label>
                <div
                  className={clsx(style.btnDelete, "d-flex-c")}
                  onClick={() => {
                    job.splice(job.indexOf(value), 1);
                    console.log(job);
                    setJob((prev) => [...prev]);
                  }}
                >
                  X
                </div>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default memo(TodoList);
