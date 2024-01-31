// LIB
import clsx from "clsx";
import { memo, useState } from "react";

// CSS
import style from "./TodoList.module.scss";

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
    console.log(job);
  };

  // console.log(content);

  return (
    <div className={style.container} id={id}>
      <h1
        className={style.title}
        suppressContentEditableWarning={true}
        contentEditable={true}
      >
        {"Click here to edit title!"}
      </h1>
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
        placeholder={"Put your jobs there..."}
      />
      <div className={style.containerJob}>
        <ul>
          {job &&
            job.map((value) => (
              <div className={style.job} key={value}>
                <label
                  className={clsx(style.containerInput, "d-flex-c_vertical")}
                >
                  <input id={"check"} type={"checkbox"} />
                  {value}
                </label>
                <div
                  className={clsx(style.btnDelete, "d-flex-c")}
                  onClick={() => {
                    job.splice(job.indexOf(value), 1);
                    console.log(job);
                    setJob(prev => [...prev])
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
