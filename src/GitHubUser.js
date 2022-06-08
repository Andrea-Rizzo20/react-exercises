import useGitHubUser from "./useGitHubUser"

const GitHubUser = ({username}) =>{

    const {data} = useGitHubUser(username)




    return(
        <div>
            <h1>{data.login}</h1>
            <p>{data.html_url}</p>
        </div>
    )
}

export default GitHubUser