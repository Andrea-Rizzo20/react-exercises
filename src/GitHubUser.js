import { useEffect, useState } from "react"
import useGitHubUser from "./useGitHubUser"

const GitHubUser = ({username}) =>{

    const { data, error, loading } = useGitHubUser(username)

    return(
        <div>
            {loading && <h1>Loading...</h1>}
            {data && !error && <h1>{data.login}</h1>}
            {data && !error &&<p>{data.html_url}</p>}
            {error && <h1>Error Try Again</h1>}
        </div>
    )
}

export default GitHubUser