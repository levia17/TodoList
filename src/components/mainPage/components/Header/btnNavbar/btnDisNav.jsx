// LIB
import clsx from "clsx";
import { Fragment, memo, useState} from "react";

// CSS
import style from "./btnDisNav.module.scss";
import  Navbar  from "../navbar/navbar.jsx";

export function BtnDisNav() {
  const [state,setState] = useState('show');


  const handleClick = ()=>{
    if(state === 'show'){
      setState('hidden');
    } else {
      setState('show');
    }
  };

  return (
    <Fragment>
      <button className={clsx(style.btn)} onClick={handleClick}></button>
      <Navbar stateNav={state}/>
    </Fragment>
  );
}

export default memo(BtnDisNav);
