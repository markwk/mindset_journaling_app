import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_SUCCESSS,
  LOGIN_FAIL
} from "../utils/constants";
import { BASE_URL } from "../utils/constants";

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  console.log("username + password", email, password);
  return dispatch => {
    //dispatch({ type: LOGIN_SUCCESSS });

    fetch(BASE_URL + "mobile/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": ""
      },
      body: JSON.stringify({
        username: "saurabh_g",
        password: "Test@123",
        playerId: "123456789"
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log("Login response", response);
        dispatch({ type: LOGIN_SUCCESSS, payload: response });
      })
      .catch(error => {
        console.log("error-------------", error);
        dispatch({
          type: LOGIN_FAIL,
          payload: "Login Failed. Uanble to connect server."
        });
      });
  };
};
