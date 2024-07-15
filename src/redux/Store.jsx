import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "./rootReducer";

const Store = createStore(RootReducer,applyMiddleware(logger));

export default Store;
