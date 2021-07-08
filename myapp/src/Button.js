import React, { useEffect, useState } from "react";
import "./Button.css";
function Button(props) {
    const [classes, setClasses] = useState('');
    const { size, type, border, shadow } = props;
    useEffect(() => {
        let cls = '';
        if (size) {
            cls = `${cls} ${size}`;
        }
        if (type) {
            cls = `${cls} ${type}`;
        }
        if (border) {
            cls = `${cls} ${border}`;
        }
        if (shadow) {
            cls = `${cls} shadow`;
        }
        setClasses(`${cls}`);
    }, [size, border, type, shadow]);
 
    return <>
        <span>{
            `Size: ${props.size}, 
             Shadow: ${props.shadow},
             Type: ${props.type}, 
             Border: ${props.border}`
        }</span>
        <button className={classes} {...props}></button>
    </>;
}
 
export default Button;

//import reportWebVitals from './reportWebVitals';
//import reportWebVitals from './reportWebVitals';