import { SET_AUTH } from "../../const/duckKeys";

const initState = {
  IS_AUTH: false,
};

const loggedReducer = (state = initState, action) => {
  const { type } = action;
  const { IS_AUTH } = state;

  switch (type) {
    case SET_AUTH:
      return { ...state, IS_AUTH: !IS_AUTH };
    default:
      return state;
  }
};

export default loggedReducer;
