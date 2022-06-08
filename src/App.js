import Counter from "./Counter"
import GitHubUser from "./GitHubUser"
import GitHubUserList from "./GitHubUserList"
import Login from "./Login"

const App = () =>{

    const onLoginHandle = data => console.log(data)


    return(
        <div>
            <Counter incrementValue={2}/>
            <Login form={onLoginHandle}/>
            <GitHubUser username='Andrea-Rizzo20'/>
            <GitHubUserList/>

        </div>
    )
}

export default App