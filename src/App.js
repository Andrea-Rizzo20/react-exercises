import { Routes, Route } from 'react-router-dom'
import Counter from './Counter'
import ShowGitHubUser from './ShowGitHubUser'
import { Welcome } from './Welcome'

const App = () =>{
    return(
        <Routes>
            <Route path='/' element={<Welcome name="Andrea"/>}/>
            <Route path='/Counter' element={<Counter/>}/>
            <Route path='/users/:username' element={<ShowGitHubUser/>}/>
        </Routes>
    )
}

export default App