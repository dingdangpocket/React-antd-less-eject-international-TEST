import { applyMiddleware, legacy_createStore as createStore} from "redux";
import bigReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxLogger from "redux-logger";
const store = createStore(
  bigReducer,
  composeWithDevTools(applyMiddleware(reduxLogger))
);
export default store;
