import {
  RECORDS_FETCHED_FAIL,
  RECORDS_FETCHED_SUCCESSS
} from "../utils/constants";



const INITAIL_STATE = { records: "", error: "", loading: false };

export default (state = INITAIL_STATE, actions) => {
  switch (actions.type) {
    case RECORDS_FETCHED_SUCCESSS:
    console.log("actions data", actions.payload);

      return { ...state, records: actions.payload };
    case RECORDS_FETCHED_FAIL:
      return { ...state, error: actions.payload };
    default:
      return state;
  }
};
