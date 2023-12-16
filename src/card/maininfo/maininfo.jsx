import React from "react";
import cs from './maininfo.module.css'

function Maininfo({data}) {
    return (
        <>
        {/*<p>Maininfo</p>*/}
            <b><h3>{data.description[0].name} {data.description[0].surname}</h3> </b>

            <p></p>
        </>
    );
}


export default Maininfo;