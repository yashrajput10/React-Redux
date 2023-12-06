import { combineReducers } from "redux";
import { employeeReducer } from "./reducer/employee.reducer";

export const rootReducer = combineReducers({
   employeeReducer
});
