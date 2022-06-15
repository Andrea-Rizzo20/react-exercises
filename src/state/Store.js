import { combineReducers, createStore } from "redux";
import { counterState } from "./CounterState";
import { todosState } from "./TodosState";


const rootReducer = combineReducers({
    counter: counterState.reducer,
    todos: todosState.reducer
})
export const store = createStore(rootReducer)
