import React from "react";
import cs from './skills.module.css'

function Skills({data}) {
    return (
        <>
            {/*<p>Skills</p>*/}
            <span>{data.description[0].resume} </span>

        </>
    );
}


export default Skills;