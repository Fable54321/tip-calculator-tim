import { Routes, Route } from "react-router-dom"
import Container from "./Container/Container"
import mainLogo from "../../images/logo.svg"

const App = () => {
  return (
    <div className="wrapper">
      <header className="wrapper__header">
        <img className="wrapper__header__logo" src={mainLogo} alt="The main logo" />
      </header>
      <Routes>
        <Route path="/" element={<Container />} />
      </Routes>
    </div>
  );
}

export default App
