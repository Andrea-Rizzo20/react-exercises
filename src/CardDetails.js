import { useEffect, useRef } from "react"

const CardDetails = ({initialData = {model:'Lamborghini',year:'2018', color:'black'}}) => {


    const formRef = useRef(initialData)


    return(
        <form ref={formRef}>
            <input name="model" defaultValue={formRef.model}></input>
            <input name="year" defaultValue={formRef.year}></input>
            <input name="color" defaultValue={formRef.color}></input>
        </form>

    )
}

export default CardDetails