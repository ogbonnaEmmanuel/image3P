import TabReducer from "./tab_reducer";
import OperationReducer from "./operation_reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    TabReducer: TabReducer,
    operations: OperationReducer,
})
export default rootReducer