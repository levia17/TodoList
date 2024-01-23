// CSS
import style from './mainPage.module.scss';

// Compnents
import { Navbar } from './components/navbar/navbar';

function MainPage(){
    return <div className={style.MainPage}>
        <Navbar></Navbar>
    </div>
}

export default MainPage;