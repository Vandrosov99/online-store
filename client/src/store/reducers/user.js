import {
  DELETE_NOTIFICATION,
  SET_AUTH,
  SET_NOTIFICATION,
} from "../../const/duckKeys";
import { v4 as uuid } from "uuid";

const initState = {
  IS_AUTH: false,
  notificationList: [],
};

const userReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_AUTH:
      return { ...state, IS_AUTH: payload };
    case SET_NOTIFICATION: {
      const { title, description } = payload;
      const { notificationList } = state;
      const customNotification = {
        title,
        description,
        id: uuid(),
      };

      const isThisNotificationExist = notificationList.some(
        el => el.title === title
      );

      if (isThisNotificationExist) return state;

      notificationList.push(customNotification);

      return { ...state, notificationList: [...notificationList] };
    }
    case DELETE_NOTIFICATION: {
      const { id } = payload;
      const { notificationList } = state;
      const updatedNotifications = notificationList.filter(
        notification => notification.notificationId !== id
      );

      return { ...state, notificationList: [...updatedNotifications] };
    }
    default:
      return state;
  }
};

export default userReducer;
