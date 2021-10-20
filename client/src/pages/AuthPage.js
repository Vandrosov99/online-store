import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../const/routeKeys";
import { Container, Button, Card, Form, Row } from "react-bootstrap";

const AuthPage = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputData;

  const onChange = event => {
    const inputValue = event.target.value;
    const inputName = event.target.name;

    setInputData({ ...inputData, [inputName]: inputValue });
  };

  const onSubmit = event => {
    if (email === "" || password === "") {
      alert("bad data input");
    }

    console.log(inputData);
    setInputData({
      email: "",
      password: "",
    }); //clear input values

    event.preventDefault();
  };

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: "600px" }} className='p-5'>
        <h2 className='m-auto'>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className='d-flex flex-column' onSubmit={onSubmit}>
          <Form.Control
            className='mt-3'
            placeholder='Введите ваш емейл...'
            name='email'
            type='email'
            value={email}
            onChange={onChange}
          />
          <Form.Control
            className='mt-3'
            name='password'
            type='password'
            placeholder='Введите ваш пароль...'
            value={password}
            onChange={onChange}
          />
          <Row className='d-flex justify-content-between mt-3 pe-3 ps-3'>
            {isLogin ? (
              <div style={{ width: "auto" }}>
                Нет аккаунта?
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
            ) : (
              <div style={{ width: "auto" }}>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}
            <Button
              style={{ width: "auto" }}
              variant={"outline-success"}
              type='submit'>
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default AuthPage;
