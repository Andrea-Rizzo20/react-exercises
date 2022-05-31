import React from "react";
import { Colors } from "./Colors";

export class App extends React.Component{
    render(){
        return(
            <div>
                <Colors items={['Red','BLue','Yellow','Green','Gray','Black']}/>
            </div>
        )
    }
}