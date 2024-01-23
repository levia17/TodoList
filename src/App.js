// LIB
import clsx from "clsx";

// LIB
import { Route, Routes } from "react-router-dom";
// CSS
import GlobalStyle from "./GlobalStyle/GlobalStyle.jsx";
import style from "./App.module.scss";

// Components
import { Intro } from "./components/intro.jsx";
import MainPage from "./components/mainPage/mainPage.jsx";

function App() {
  return (
    <GlobalStyle>
      <div className={clsx(style.App)}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/mainPage" element={<MainPage />} />
        </Routes>
      </div>
    </GlobalStyle>
  );
}

export default App;
