import {
  SUBMIT_FORM_DATA,
  RESET_FORM_DATA
} from './step2Actions'

const step2Reducer = (state, action) => {
  const {type, payload} = action;
  switch (type) {
    case SUBMIT_FORM_DATA:
     return payload;
    case RESET_FORM_DATA: 
     return {};
    default:
      return state;
  }

};

export default step2Reducer;