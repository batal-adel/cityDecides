import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from '../Types';

const NotificationReducer =  (state, action) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return [...state, action.payload];
    case REMOVE_NOTIFICATION:
      return state.filter((notification) => notification.id !== action.payload);
    default:
      return state;
  }
};

export default NotificationReducer;