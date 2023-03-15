import { combineReducers } from 'redux'
import { RouterState, connectRouter } from 'connected-react-router'
import counterReducer from './counter'
import {BrowserHistory} from "history";

const rootReducer = (history: BrowserHistory) => combineReducers({
    count: counterReducer,
    router: connectRouter(history)
})

export interface State {
    count: number
    router: RouterState
}

export default rootReducer