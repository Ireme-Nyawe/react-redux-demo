import { combineReducers } from "redux";
import IceReducer from "./ice/IceReducer";
import CakeReducer from "./cake/CakeReducer";
import UserReducer from "./user/UserReducers";
const RootReducer = combineReducers({
  cake: CakeReducer,
  ice: IceReducer,
  user: UserReducer,
});

export default RootReducer;
