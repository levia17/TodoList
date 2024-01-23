// LIB
import clsx from "clsx";

// CSS
import style from "./navbar.module.scss";

// Components
import BtnDisNav from "./components/btnDisNav";

export function Navbar() {
  return (
    <div className={clsx(style.Navbar, 'd-flex-c_vertical')}>
        <BtnDisNav />
    </div>
  );
}
