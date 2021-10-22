import {
  SET_AUTH,
  SET_DEVICE,
  SET_DEVICES,
  SET_BRAND,
  SET_BRANDS,
  SET_ACTIVE_TYPE,
  SET_ACTIVE_BRAND,
  SET_NOTIFICATION,
  DELETE_NOTIFICATION,
} from "../../const/duckKeys";

const setAuth = payload => {
  return {
    type: SET_AUTH,
    payload: payload,
  };
};

const setDevice = payload => {
  return {
    type: SET_DEVICE,
    payload: payload,
  };
};

const setDevices = payload => {
  return {
    type: SET_DEVICES,
    payload: payload,
  };
};

const setBrand = payload => {
  return {
    type: SET_BRAND,
    payload: payload,
  };
};
const setBrands = payload => {
  return {
    type: SET_BRANDS,
    payload: payload,
  };
};

const setActiveType = payload => {
  return {
    type: SET_ACTIVE_TYPE,
    payload: payload,
  };
};

const setActiveBrand = payload => {
  return {
    type: SET_ACTIVE_BRAND,
    payload: payload,
  };
};

const setNotification = payload => {
  return {
    type: SET_NOTIFICATION,
    payload: payload,
  };
};

const deleteNotification = payload => {
  return {
    type: DELETE_NOTIFICATION,
    payload: payload,
  };
};

export {
  setAuth,
  setDevice,
  setDevices,
  setBrand,
  setBrands,
  setActiveType,
  setActiveBrand,
  setNotification,
  deleteNotification,
};
