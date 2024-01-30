// LIB
import clsx from 'clsx';

// CSS
import style from './Header.module.scss';

// Components
// import { Navbar } from './navbar/navbar.jsx';
import BtnDisNav from './btnNavbar/btnDisNav.jsx';

function Header() {
    return ( 
        <div className={clsx(style.header, 'd-flex-c_vertical')}>
            <BtnDisNav />
        </div>
     );
}

export default Header;