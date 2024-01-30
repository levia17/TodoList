// LIB
import clsx from 'clsx';
import { memo, useState } from "react";

// CSS
import style from "./TodoList.module.scss";

function TodoList({ id, title }) {
  const [content, setContent] = useState("");
  const [job, setJob] = useState([]);

  // const todo = {
  //   id: id,
  //   title: title,
  // };

  const handleSubmit = () => {
    setJob((prev) => [...prev, content]);
    setContent("");
    console.log(job);
  };

  // console.log(content);

  return (
    <div className={style.container} id={id}>
      <h1 className={style.title}>{title || "Title!"}</h1>
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
      />
      <div className={style.containerJob}>
        <ul>
          {job &&
            job.map((value) => (
              <div className={style.job} key={value}>
                <label className={clsx(style.containerInput, 'd-flex-c_vertical')}>
                  <input id={"check"} type={"checkbox"} />
                  {value}
                </label>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default memo(TodoList);
