import { Sum } from "./Sum";
import { Welcome } from "./Welcome";

export function App(props){
    return(
        <div>
            <Welcome name='Andrea' />
            <Sum numbers={[4,8,15,16,23,42]} />
        </div>
    )
}