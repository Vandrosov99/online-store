import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import Container from "./components/Container/Container";

const App = () => (
  <BrowserRouter>
    <NavBar />
    <AppRouter />
  </BrowserRouter>
);

export default App;
