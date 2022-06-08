import { useState } from "react"
import Counter from "./Counter"
import Login from "./Login"

const App = () =>{

    const onLoginHandle = data => console.log(data)


    return(
        <div>
            <Counter incrementValue={2}/>
            <Login form={onLoginHandle}/>

        </div>
    )
}

export default App