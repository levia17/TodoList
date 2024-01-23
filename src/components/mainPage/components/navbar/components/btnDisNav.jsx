// LIB
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// CSS
import style from './btnDisNav.module.scss';    


export function BtnDisNav() {
    return ( 
        <div className={clsx(style.btn, 'd-flex-c')}>
            <FontAwesomeIcon icon="fa-solid fa-eye" />
        </div>
     );
}

export default BtnDisNav;