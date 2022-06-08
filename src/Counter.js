import useCounter from "./useCounter";

const Counter = ({ initialValue = 0, value = 1 }) => {

    const { counter, onIncrement, onDecrement, onReset} = useCounter(initialValue, value)





  return <div>
      <h1>{counter}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
  </div>;
};

export default Counter
