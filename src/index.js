import { incrementCounter } from './state/CounterState'
import {store} from './state/Store'
store.subscribe(()=>console.log(store.getState()))
store.dispatch(incrementCounter(10))
