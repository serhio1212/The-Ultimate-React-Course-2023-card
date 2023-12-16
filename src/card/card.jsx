import React from "react";
import cs from './card.module.css'
import Logotype from "./logotype/logotype.jsx";
import Maininfo from "./maininfo/maininfo.jsx";
import Skills from "./skills/skills.jsx";
import Fitcha from "./skills/fitcha/fitcha.jsx";

function Card({data, emmo, cocolor}) {
    return (

        <div className={cs.borderFrame}>
            {/*<p>card</p>*/}
            <Logotype widht={550} height={350}/>
            <Maininfo data={data}/>
            <Skills  data={data} />
            <Fitcha  data={data} emmo={emmo} cocolor={cocolor}/>
        </div>
    );
}


export default Card;