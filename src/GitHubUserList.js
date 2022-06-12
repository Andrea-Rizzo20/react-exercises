import { useState } from "react"
import {Link, Outlet} from 'react-router-dom'

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
            <ul>
                {userList.map((name,index) =><li><Link to={`/users/${name}`}  key={index}>{name}</Link></li>)}

            </ul>
            <input name="username" value={username} onChange={inputHandle}></input>
            <button onClick={submitHandle}>Add Username</button>

            <hr/>

            <Outlet/>
        </div>

    )
}

export default GitHubUserList