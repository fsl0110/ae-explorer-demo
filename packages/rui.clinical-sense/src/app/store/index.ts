import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {persistStore} from "redux-persist";
import {counterReducer, counterState, CounterState} from "./reducers/counter.reducers";
import {formReducer} from "./reducers/form.reducers";

const rootReducer = combineReducers({counter: counterReducer, form: formReducer});

export interface AppState {
  counter: CounterState;
}

export const initialState: AppState = {
  counter: counterState,
};

export const store = createStore(rootReducer, initialState, composeWithDevTools());

export const persistor = persistStore(store);
