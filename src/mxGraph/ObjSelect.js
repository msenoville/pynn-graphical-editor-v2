import React, { useState, useEffect } from "react";
import SetMXObjs from "./setMXObjs";
import "../css/objselect.css"

export default function ObjSelect(props) {
	const objLists = "objectLists";
	console.log('log from before useEffect in ObjSelect', props.MXValid)

	var modal = '' 
	// const [modal, setModal] = useState('')
	// const [valid, setValid] = useState(props.MXValid);

	// Handle parent call
	useEffect(() => {
		if (props.parentCall !== null) {
			console.log('props.parentCall', props.parentCall)
			if (props.parentCall.toLowerCase() === "setmxobjs") {
				console.log('ok, je debug')
				// console.log(SetMXObjs(props.graph, objLists, valid, setValid));
				// modal = SetMXObjs(props.graph, objLists, valid, setValid)
				SetMXObjs(props.graph, objLists, props.MXValid, props.setMXValid)
				// setModal(await SetMXObjs(props.graph, objLists, props.MXValid, props.setMXValid));
				// console.log('modal', modal)
				console.log('log from useEffect in ObjSelect', props.MXValid, props.setMXValid)
			}
		}
	}, [props.parentCall]);

	// useEffect(() => {
	// 	console.log(modal, props.MXValid)
	// 	if(modal === 'pop-editor') props.setMXValid(true)
	// }, [modal]);

	// useEffect(() => {
	// 	console.log(modal, props.MXValid)
	// }, [props.MXValid]);

	return (
		<div id={props.id}>
			<div className="float_center">
				{console.log('chance?',props.MXValid)}
				<ul id={objLists}></ul>
			</div>
		 </div>
	);
}
