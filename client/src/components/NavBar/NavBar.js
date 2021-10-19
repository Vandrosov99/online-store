import React from "react";
// import classnames from "classnames";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE, SHOP_ROUTE } from "../../const/routeKeys";
import styles from "./NavBar.module.scss";
import { makeIsAuth } from "../../store/selectors";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import setAuth from "../../store/actions/index";
import Button from "../Button/Button";
import { useHistory } from "react-router";
import Container from "../Container/Container";

const NavBar = () => {
  const isAuth = useSelector(makeIsAuth());
  const history = useHistory();

  const onLogin = () => {
    history.push(LOGIN_ROUTE);
  };

  return (
    <header className={styles.Header}>
      <Container>
        <div className={styles.FlexContainer}>
          <NavLink to={SHOP_ROUTE} className={styles.MainLogoLink}>
            Купи Девайс
          </NavLink>
          {isAuth ? (
            <nav>
              <Button>Админ Панель</Button>
              <Button>Выйти</Button>
            </nav>
          ) : (
            <nav>
              <Button onClick={onLogin}>Войти</Button>
            </nav>
          )}
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
