// LIB
import clsx from "clsx";
import { memo, useState } from "react";

// CSS
import style from "./navbar.module.scss";

// Components
import BtnAdd from "./components/btnAdd/btnAdd.jsx";

function Navbar(stateNav) {
  let state = style.show;

  if (stateNav.stateNav === "show") {
    state = style.hidden;
  } else {
    state = style.show;
  }

  return (
    <div className={clsx(style.Navbar, "d-flex-c_vertical", state)}>
      <BtnAdd />
    </div>
  );
}

export default memo(Navbar);
