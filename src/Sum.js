export function Sum( { numbers = [0,1] } ){
    return <h1>La somma è {numbers.reduce((a,b)=> a + b)}</h1>
}