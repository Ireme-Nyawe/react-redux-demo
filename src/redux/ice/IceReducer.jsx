import { BUY_ICE } from "./IceTypes";
const initialState = {
  numOfIces: 20,
};
const IceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE:
      return { ...state, numOfIces: state.numOfIces - 1 };
    default:
      return state;
  }
};

export default IceReducer;
