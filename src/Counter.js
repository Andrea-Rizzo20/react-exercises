import { useEffect, useState } from "react";

const Counter = ({ initialValue = 0, incrementValue = 1 }) => {

    const [counter, setCounter] = useState(initialValue)


    useEffect(() =>{
        incrementHandle();
        console.log('timer partito')

        return () => {
            clearInterval(incrementHandle)
            console.log('fine counter')
        }
    },[])


    const incrementHandle = () =>{
        setInterval(() => {
            setCounter(counter => counter + incrementValue)

        },1000)
    }


  return <div>
      <h1>{counter}</h1>
  </div>;
};

export default Counter
