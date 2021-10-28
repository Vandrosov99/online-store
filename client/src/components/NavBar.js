import React from "react";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../const/routeKeys";
import { makeIsAuth } from "../store/selectors";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const NavBar = () => {
  const isAuth = useSelector(makeIsAuth());
  const history = useHistory();

  const onLogIn = () => history.push(LOGIN_ROUTE);
  const onAdmin = () => history.push(ADMIN_ROUTE);
  const onLogout = () => history.push(LOGIN_ROUTE);

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <NavLink
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to={SHOP_ROUTE}>
          Купи Девайс
        </NavLink>
        {isAuth ? (
          <Nav className='ml-auto' style={{ color: "white" }}>
            <Button variant={"outline-light"} onClick={onAdmin}>
              Админ панель
            </Button>
            <Button
              variant={"outline-light"}
              className='ml-2'
              onClick={onLogout}>
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className='ml-auto' style={{ color: "white" }}>
            <Button variant='outline-light' onClick={onLogIn}>
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
