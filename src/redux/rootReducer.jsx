import { combineReducers } from "redux";
import IceReducer from "./ice/IceReducer";
import CakeReducer from "./cake/CakeReducer";
const RootReducer = combineReducers({
  cake: CakeReducer,
  ice: IceReducer,
});

export default RootReducer;
