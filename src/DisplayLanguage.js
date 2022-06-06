import React from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component {

  render() {
      const textLang ={
          en:{text:'Your choise is: English'},
          it:{text: 'La tua scelta è Italiano'},
      }
    return(
        <LanguageContext.Consumer>
            {language =>{
                return (
                    <h1>{textLang[language].text}</h1>
                )
            }}
        </LanguageContext.Consumer>
    )
  }
}
