import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobsList";

let locall = ""
if(navigator.language=="es-ES"){
    locall = localeEsMessages
}else{
    //Se asume que el default es inglés
    locall = localeEnMessages
}
ReactDOM.render(
    <IntlProvider locale={navigator.language} messages= {locall}>
        <JobsList locale={locall}/>
    </IntlProvider>, document.getElementById("root")
);