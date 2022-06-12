import { Routes, Route } from 'react-router-dom'
import Counter from './Counter'
import { Welcome } from './Welcome'

const App = () =>{
    return(
        <Routes>
            <Route path='/' element={<Welcome name="Andrea"/>}/>
            <Route path='/Counter' element={<Counter/>}/>
        </Routes>
    )
}

export default App