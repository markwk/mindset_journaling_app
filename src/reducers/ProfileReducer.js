import {
  PROFILE_FETCHED_SUCCESSS,
  PROFILE_FETCHED_FAIL,
  PROFILE_FETCHING
} from "../utils/constants";

const INITAIL_STATE = { profile: "", error: "", loading: false };

export default (state = INITAIL_STATE, actions) => {
  switch (actions.type) {
    case PROFILE_FETCHED_SUCCESSS:
      console.log("actions data", actions.payload);
      return { ...state, records: actions.payload };
    case PROFILE_FETCHED_FAIL:
      return { ...state, error: actions.payload };
    default:
      return state;
  }
};
