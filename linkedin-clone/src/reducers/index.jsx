import { combineReducers } from "redux";

import userReducer from './userReducer';
import { useState } from "react";

const rootReducer = combineReducers({
    useState: userReducer,
});

export default rootReducer;