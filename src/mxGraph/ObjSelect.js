import React, { useEffect } from "react";
import SetMXObjs from "./setMXObjs";
import "../css/objselect.css"

export default function ObjSelect(props) {
	const objLists = "objectLists";
	console.log('log from before useEffect in ObjSelect', props.MXValid)

	// Handle parent call
	useEffect(() => {
		if (props.parentCall !== null) {
			console.log('props.parentCall', props.parentCall)
			if (props.parentCall.toLowerCase() === "setmxobjs") {
				SetMXObjs(props.graph, objLists, props.MXValid, props.setMXValid, props.setValidProj, props.MXValid);
				console.log('log from useEffect in ObjSelect', props.MXValid)
			}
		}
	}, [props.parentCall]);

	return (
		<div id={props.id}>
			<div className="float_center">
				<ul id={objLists}></ul>
			</div>
		 </div>
	);
}
