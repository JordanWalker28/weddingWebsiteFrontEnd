import * as apiUtil from '../utils/session';
import { receiveErrors } from "./error";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const UPDATE_DIET = 'UPDATE_DIET';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});
const receiveCurrentUserDiet = diet => ({
  type: UPDATE_DIET,
  diet
});
const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const getUser = () => {
    return receiveCurrentUser();
};

export const login = user => async dispatch => {
    const response = await apiUtil.login(user);
    const data = await response.json();
  if (response.ok) {
      return dispatch(receiveCurrentUser(data));
    }
    return dispatch(receiveErrors(data));
};
  export const signup = user => async dispatch => {
    const response = await apiUtil.signup(user);
    const data = await response.json();
    
    if (response.ok) {
      return dispatch(receiveCurrentUser(data));
    }
    return dispatch(receiveErrors(data));
};

  export const logout = () => async dispatch => {
    const response = await apiUtil.logout();
    const data = await response.json();
    if(response.status == "422"){
      window.location.reload(false);
    }
    if (response.ok) {
      return dispatch(logoutCurrentUser());
    }
    return dispatch(receiveErrors(data));
};