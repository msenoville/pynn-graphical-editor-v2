import React, { useState, useEffect } from "react";
import setToolbar from "./setToolbar"

const Toolbar = (props) => {
    const [btns, setBtns] = useState(null);

    // Handle parent call
    useEffect(() => {
        if (props.parentCall !== null) {
            if (props.parentCall.toLowerCase() === 'settoolbar') {
                setToolbar(props.graph, setBtns);
            }
        }
    }, [props.parentCall]);

    if (btns === null) {
        return (
            <div id={props.id}></div>
        );
    }
    else {
        return (
            <div id={props.id}>
                {btns.map((item, index) => (
                    <span class='test'>
                    <React.Fragment key={index}>
                        <td className={`attrtool ${item.class}`} onClick={item.clickEvt}></td>
                    </React.Fragment>
                    </span>
                ))}
            </div>
        );
    }
}
export default Toolbar;