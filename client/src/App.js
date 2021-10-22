import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import NotificationList from "../src/components/NotificationList/NotificationList";

const App = () => {
  return (
    <BrowserRouter>
      <NotificationList />
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
