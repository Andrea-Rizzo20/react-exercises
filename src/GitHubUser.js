import { useEffect, useState } from "react"

const GitHubUser = ({username}) =>{
    const [data, setData] = useState('')

    useEffect(() =>{
        fetch(`https://api.github.com/users/${username}`)
        .then(data => data.json())
        .then(response => setData(response))
    },[username])
    return(
        <div>
            <h1>{data.login}</h1>
            <p>{data.html_url}</p>
        </div>
    )
}

export default GitHubUser