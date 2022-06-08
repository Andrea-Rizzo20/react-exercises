import { useState } from "react"
import GitHubUser from "./GitHubUser"

const GitHubUserList = () =>{
    const [userList, setUserList] = useState([])
    const [username, setUsername] = useState('')

    const inputHandle = (event) => {
        const value = event.target.value
        setUsername(value)
    }

    const submitHandle = () =>{
        setUserList([...userList,username])
    }

    return(
        <div>
            {userList.map((name,index) =><GitHubUser username={name} key={index}/>)}
            <input name="username" value={username} onChange={inputHandle}></input>
            <button onClick={submitHandle}>Add Username</button>

        </div>
    )
}

export default GitHubUserList