import { SET_AUTH } from "../../const/duckKeys";

const setAuth = payload => {
  return {
    type: SET_AUTH,
    payload: payload,
  };
};

export default setAuth;
