import useSWR from "swr"

const fetcher = url => fetch(url).then(response => response.json())


const useGitHubUser = (username) =>{
    const {data, error, mutate} = useSWR(username ? `https://api.github.com/users/${username}` : null,fetcher)

    return{
        data,
        error,
        loading:!data &&!error

    }
}

export default useGitHubUser