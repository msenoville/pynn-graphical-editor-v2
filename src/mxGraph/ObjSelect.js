import React, { useEffect } from "react";
import SetMXObjs from "./setMXObjs";
import "../css/objselect.css"

export default function ObjSelect(props) {
	const objLists = "objectLists";
	console.log('log from before useEffect in ObjSelect', props.valid)

	// Handle parent call
	useEffect(() => {
		if (props.parentCall !== null) {
			if (props.parentCall.toLowerCase() === "setmxobjs") {
				SetMXObjs(props.graph, objLists, props.valid, props.setValid);
				console.log('log from useEffect in ObjSelect', props.valid)
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
