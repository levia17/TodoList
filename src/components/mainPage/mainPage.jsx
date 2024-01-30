// CSS
import style from "./mainPage.module.scss";

// Context
import { TodoContext } from "../../Feature/addTodo/addTodo";

// Compnents
import Header from "./components/Header/Header";
import Main from "./components/Main/main";

function MainPage() {
  return (
    <div className={style.MainPage}>
      <TodoContext>
      <Header />
        <Main />
      </TodoContext>
    </div>
  );
}

export default MainPage;
