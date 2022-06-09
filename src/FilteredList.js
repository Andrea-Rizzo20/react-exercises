import { useMemo } from "react"

const FilteredList = ({ list }) =>{

    const filtered = useMemo(() =>{
       return list.filter(item => item.age >= 18)

    },[list])
    return(
        <ul>{filtered.map(item =><li key={item.id}>{item.name}</li>)}</ul>
    )
}

export default FilteredList