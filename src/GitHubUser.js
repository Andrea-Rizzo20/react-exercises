import useGitHubUser from "./useGitHubUser"

const GitHubUser = ({username}) =>{

    const {data, error, loading} = useGitHubUser(username)




    return(
        <div>
            {loading && <h1>Loading...</h1>}
            {error !=='' && <p>Errore, utente non trovato</p>}
            {data && <div><h1>{data.login}</h1><p>{data.html_url}</p></div>}
        </div>
    )
}

export default GitHubUser