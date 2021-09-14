import React, { useEffect } from "react";
import SetMXObjs from "./setMXObjs";
import "../css/objselect.css"

export default function Footer(props) {
	const objLists = "objectLists";

	// Handle parent call
	useEffect(() => {
		if (props.parentCall !== null) {
			if (props.parentCall.toLowerCase() === "setmxobjs") {
				SetMXObjs(props.graph, objLists);
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
