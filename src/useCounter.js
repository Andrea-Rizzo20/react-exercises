import { useCallback, useState } from "react"

const useCounter = (initialValue, value) =>{
    const [counter, setCounter] = useState(initialValue)

     const incrementHandle = useCallback(function incrementHandle(){

    setCounter(counter => counter + value)
    },[value])

    const decrementHandle = useCallback(function decrementHandle(){
        setCounter(counter => counter - value)

    },[value])

    const resetHandle = useCallback(function resetHandle(){
        setCounter(initialValue)

    },[initialValue])

    return{
        counter: counter,
        onIncrement: incrementHandle,
        onDecrement: decrementHandle,
        onReset: resetHandle
    }


}

export default useCounter