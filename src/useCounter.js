import { useState } from "react"

const useCounter = (initialValue, value) =>{
    const [counter, setCounter] = useState(initialValue)

    const incrementHandle = () =>{

    setCounter(counter => counter + value)
    }

    const decrementHandle = () =>{
        setCounter(counter => counter - value)
    }

    const resetHandle = () =>{
        setCounter(initialValue)
    }

    return{
        counter: counter,
        onIncrement: incrementHandle,
        onDecrement: decrementHandle,
        onReset: resetHandle
    }


}

export default useCounter