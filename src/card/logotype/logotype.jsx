import React from "react";
import cs from './logotype.module.css'

function Logotype({width, height}) {
    return (
        <div className={cs.mainClass}>
            {/*<p>Logotype</p>*/}
        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*fNLMb7DHUQfn18w8YvyLQA.png" alt="So so" width={width} height={height}/>
        </div>
    );
}


export default Logotype;