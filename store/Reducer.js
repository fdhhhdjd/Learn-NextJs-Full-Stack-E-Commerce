import { ACTIONS } from "./Action";

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.NOTIFY:
      return {
        ...state,
        notify: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
