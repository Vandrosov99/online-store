import { SET_DEVICE, SET_DEVICES } from "../../const/duckKeys";
import iphone_11 from "../../../src/assets/img/iphone_11_64.jpg";
import iphone_4 from "../../../src/assets/img/iphone_4_8.jpg";

const initState = {
  devices: [
    {
      id: 1,
      name: "12 pro max",
      price: 25000,
      rating: 5,
      img: iphone_11,
    },
    {
      id: 2,
      name: "11 pro max",
      price: 12200,
      rating: 3,
      img: iphone_4,
    },
    {
      id: 3,
      name: "apple X",
      price: 2502340,
      rating: 5,
      img: iphone_11,
    },
    {
      id: 4,
      name: "8 pro max",
      price: 15231,
      rating: 5,
      img: iphone_11,
    },
    {
      id: 5,
      name: "12 pro max",
      price: 12342,
      rating: 5,
      img: iphone_4,
    },
  ],
};

const deviceReducer = (state = initState, action) => {
  const { type, payload } = action;
  const { devices } = state;

  const isDeviceAlreadyExist = devices.find(device => {
    return device.id === payload?.id;
  });

  if (isDeviceAlreadyExist) return state;

  switch (type) {
    case SET_DEVICE:
      state.devices.push(payload);

      return { ...state };
    case SET_DEVICES:
      state.devices.push(...payload);

      return { ...state };
    default:
      return state;
  }
};

export default deviceReducer;
