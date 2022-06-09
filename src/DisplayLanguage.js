import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

 const DisplayLanguage = () => {

    const language = useContext(LanguageContext)

      const textLang ={
          en:{text:'Your choise is: English'},
          it:{text: 'La tua scelta è Italiano'},
      }

    return(
    <h1>{textLang[language].text}</h1>)
  }

  export default DisplayLanguage
