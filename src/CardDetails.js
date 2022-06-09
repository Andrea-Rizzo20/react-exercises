import { useEffect, useRef } from "react"

const CardDetails = ({initialData = {model:'Lamborghini',year:'2018', color:'black'}}) => {

    const {model,year, color} = initialData

    const formRef = useRef(null)

    useEffect(()=>{
        formRef.current.reset()
    },[initialData])





    return(
        <form ref={formRef}>
            <input name="model" defaultValue={model}></input>
            <input name="year" defaultValue={year}></input>
            <input name="color" defaultValue={color}></input>
        </form>

    )
}

export default CardDetails