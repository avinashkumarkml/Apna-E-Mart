import { applyMiddleware, combineReducers } from "redux";
import { Reducer } from "./reducer";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./login/loginReducer";

const reducer =combineReducers({
    cloth :Reducer,
    electronics :Reducer,
    appliances :Reducer,
    books:Reducer,
    cart:Reducer,
    isLogin:loginReducer
})

export const store =createStore(
    reducer,
    applyMiddleware(thunk)
)

