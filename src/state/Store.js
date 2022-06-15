import { combineReducers, createStore } from "redux";
import { counterReducer } from "./CounterState";
import { todosState } from "./TodosState";


const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todosState.reducer
})
export const store = createStore(rootReducer)
