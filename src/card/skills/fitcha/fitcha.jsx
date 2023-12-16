import React from "react";
import cs from './fitcha.module.css'
import {logDOM} from "@testing-library/react";

function Fitcha({data, emmo, cocolor}) {
    let i = 1;
    const nn = new Date().toLocaleDateString();
    return (
        <div>
            {console.log(nn)}

            <p></p>
            {data.skills.map((sk) => (

                <span key={sk.name}
                      style={{backgroundColor: sk.emoji === 'junior' ? cocolor.junior : sk.emoji === 'middle' ? cocolor.middle : sk.emoji === 'advanced' ? cocolor.advanced : " "}}>
                {sk.name} {" "}
                    {sk.emoji === 'junior' ? emmo.junior : " "}
                    {sk.emoji === 'middle' ? emmo.middle : " "}
                    {sk.emoji === 'advanced' ? emmo.advanced : " "}

            </span>
            ))}

        </div>
    );
}


export default Fitcha;