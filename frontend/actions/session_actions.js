import * as SessionAPIUtil from "../util/session_api_util";

export const LOGIN_CURRENT_USER = "LOGIN_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_UPDATE = "RECEIVE_USER_UPDATE";

const loginCurrentUser = (user) => {
  return {
    type: LOGIN_CURRENT_USER,
    user,
  };
};

// asdff
//  arry typed this on 1.19.2021@6:51 :)

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const receiveUserUpdate = (payload) => {
  return {
    type: RECEIVE_USER_UPDATE,
    payload,
  };
};

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};

export const createNewUser = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.postUser(user).then(
      (user) => {
        return dispatch(loginCurrentUser(user));
      },
      (errors) => {
        return dispatch(receiveSessionErrors(errors.responseJSON));
      }
    );
  };
};

export const login = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.postSession(user).then(
      (user) => {
        return dispatch(loginCurrentUser(user));
      },
      (errors) => {
        return dispatch(receiveSessionErrors(errors.responseJSON));
      }
    );
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionAPIUtil.deleteSession().then(() => {
      dispatch(logoutCurrentUser());
    });
  };
};
