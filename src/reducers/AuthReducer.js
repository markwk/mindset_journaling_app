import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_SUCCESSS,
  LOGIN_FAIL
} from "../utils/constants";
const INITAIL_STATE = { email: "", password: "", user: "", error: "" };

export default (state = INITAIL_STATE, actions) => {
  console.log("actions", actions);
  switch (actions.type) {
    case EMAIL_CHANGED:
      return { ...state, email: actions.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: actions.payload };
    case LOGIN_SUCCESSS:
      return { ...state, user: actions.payload };
    case LOGIN_FAIL:
      return { ...state, error: actions.payload };
    default:
      return state;
  }
};
