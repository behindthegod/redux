import {applyMiddleware, combineReducers, createStore} from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import {stoReducer} from "./stoReducer";
import thunk from "redux-thunk";


const rootReducers = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
    sto: stoReducer,
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));