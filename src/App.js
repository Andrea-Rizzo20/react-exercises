import React, { useState } from "react";
import  DisplayLanguage  from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

 const App = () => {


    const [language, setLanguage] = useState('en')

    const languageChangeHandle = event =>{
        setLanguage(event.target.value)
    }

        return(
            <div>
                <select value={language} onChange={languageChangeHandle}>
                    <option value='en'>English</option>
                    <option value='it'>Italiano</option>
                </select>
                <LanguageContext.Provider value={language}>
                    <DisplayLanguage />
                </LanguageContext.Provider>
            </div>
        )
    }


export default App