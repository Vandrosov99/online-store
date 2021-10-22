import { SET_ACTIVE_BRAND, SET_BRAND, SET_BRANDS } from "../../const/duckKeys";

const initState = {
  brands: [
    {
      id: 1,
      name: "Samsung",
    },
    {
      id: 2,
      name: "Apple",
    },
  ],
  selectedBrandId: null,
};

const brandReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_BRAND:
      state.brands.push(payload);

      return { ...state };
    case SET_BRANDS:
      state.brands.push(...payload);

      return { ...state };
    case SET_ACTIVE_BRAND:
      state.selectedBrandId =
        payload.id === state.selectedBrandId ? null : payload.id;

      return { ...state };
    default:
      return state;
  }
};

export default brandReducer;
