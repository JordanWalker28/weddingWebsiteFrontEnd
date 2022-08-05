import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    UPDATE_DIET
  } from "../../actions/session";
  const _nullSession = { userId: null, username: null }
  export default (state = _nullSession, { type, user, diet }) => {
    Object.freeze(state);
    switch (type) {
      case RECEIVE_CURRENT_USER:
        return user;
      case UPDATE_DIET:
        return diet;
      case LOGOUT_CURRENT_USER:
        return _nullSession;
      default:
        return state;
    }
  };