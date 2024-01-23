// LIB
import { Link } from "react-router-dom";
import clsx from "clsx";

// CSS

import style from "./ButtonStart.module.scss";

// Components

export default function ButtonStart() {
  return (
    <div className={clsx(style.Button, "d-flex-c")}>
      <Link to="/mainPage" className={style.btn_text}>
        Start
      </Link>
    </div>
  );
}
