import { useEffect, useState } from "react";

const Counter = ({ initialValue = 0, incrementValue = 1 }) => {

    const [counter, setCounter] = useState(initialValue)

    const onCounterChange = value => console.log(value)

    useEffect(() =>{
        onCounterChange(counter)
    },[counter])


    const incrementHandle = () =>{
        setCounter(counter => counter + incrementValue)
    }
  return <div>
      <h1>{counter}</h1>
      <button onClick={incrementHandle}>Increment</button>
  </div>;
};

export default Counter
