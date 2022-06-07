export function Sum( { numbers = [0,1] } ){
    return <h1>La somma è {numbers.reduce((a,b)=> a + b)}</h1>
}

// if numbers  props  of Sum components is not set, the app will broke, we can set the default value of a props by explode the props of Sum component, and set it