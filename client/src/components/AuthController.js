import React, { useEffect, useState } from "react";
import { authCheck } from "../../src/http/userApi";
import { setAuth, setUser } from "../store/actions";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router";
import { SHOP_ROUTE } from "../const/routeKeys";

const AuthController = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const checkUser = async () => {
    try {
      const user = await authCheck();
      setUser(user);
      setAuth(true);
      history.push(SHOP_ROUTE);
    } catch (e) {
      console.log(e);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    checkUser();
  }, []);

  if (isLoading) {
    return <Spinner animation='grow' />;
  }

  return { children };
};

export default AuthController;
