import { incrementCounter } from './state/CounterState'
import {store} from './state/Store'
import { todosState } from './state/TodosState'
store.subscribe(()=>console.log(store.getState()))
store.dispatch(incrementCounter(10))
store.dispatch(todosState.actions.add({ id:1, title:"Andare in palestra", completed:true}))
store.dispatch(todosState.actions.add({ id:2, title:"Andare a Pranzo", completed:true}))
store.dispatch(todosState.actions.add({ id:3, title:"Andare a Cena", completed:false}))
store.dispatch(todosState.actions.edit({id:2, completed:false }))
store.dispatch(todosState.actions.remove({id:3}))
