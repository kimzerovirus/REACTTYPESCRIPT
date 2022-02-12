import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../_reducers";

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)