import FilteredList from "./FilteredList"

const App = () => {
const myList = [
    {id:89, name:'Pino', age:9},
    {id: 2, name:'Andrea', age:29},
    {id:54, name:'Giovanni', age:18},
    {id:99, name:'Mario', age:11},
    {id:11, name:'Anna', age:38},
]

    return(
        <div>
            <FilteredList list={myList}/>
        </div>
    )
}

export default App