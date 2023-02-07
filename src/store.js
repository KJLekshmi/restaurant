import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./reducers/restaurantReducer";

// reducer create
const reducers=combineReducers({
         restaurantReducer:restaurantListReducer
})

// middleware create
const middleware=[thunk]

//  create store
const store=createStore(reducers,applyMiddleware(...middleware))  // spread operater=> obj to arry 

export default store