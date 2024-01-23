// LIB
import clsx from "clsx";


// CSS
import style from "./intro.module.scss";

// Components
import ButtonStart from "./introComponents/btnStart/ButtonStart";

export function Intro() {
  return (
    <div className={clsx(style.Intro)}>
      <div className={clsx(style.container, "d-flex-c")}>
        <p className={style.intro_tittle}>TodoList</p>
      </div>
      <p className={style.intro_text}>Let we help your plan!</p>
      <ButtonStart />
    </div>
  );
}
