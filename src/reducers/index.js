import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import DashboardReducer from "./DashboardReducer";
import ProfileReducer from "./ProfileReducer";

export default combineReducers({
  auth: AuthReducer,
  records: DashboardReducer,
  profile: ProfileReducer
});
