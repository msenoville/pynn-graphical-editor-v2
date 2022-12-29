import React, { useState, useEffect } from "react";
import setRightPanel from "./setRightPanel";
import RPSelector from "./RPSelector";

// import AttributeFont from "./AttributeFont";
// import AttributeBlock from "./AttributeBlock";
// import AttributeArrow from "./AttributeArrow";
// import "../Css/input_text.css"

const RightPanel = (props) => {
	const [selected, setSelected] = useState(null);
	const [attr, setAttr] = useState(null);

	// Handle parent call
	useEffect(() => {
		if (props.parentCall !== null) {
			if (props.parentCall.toLowerCase() === "setRightPanel") {
				setRightPanel(props.graph, setSelected, setAttr);
				console.log('je suis perdu')
			}
		}
	}, [props.parentCall]);

	// When selected cell changes, update attrs that show on editor
	useEffect(() => {
		if (selected !== null) {
			var elt = { ...selected.value };
			setAttr(elt);
		}
	}, [selected]);

	// Render
	if (selected === null || attr === null || attr.UMLtype === undefined) {
		return (
			<div id={props.id}>
				<font size="6">RightPanel</font>
				<RPSelector id='RPSelector' graph={props.graph} />
			</div>

		);
	} else {
		return (
			<div id={props.id}>
				<font size="6">RightPanel</font>
				<RPSelector id='RPSelector' graph={props.graph} />
				{/* <AttributeFont attr={attr} setAttr={setAttr} selected={selected} graph={props.graph} />
				<AttributeBlock attr={attr} setAttr={setAttr} selected={selected} graph={props.graph} />
				<AttributeArrow attr={attr} setAttr={setAttr} selected={selected} graph={props.graph} /> */}
			</div>
		);
	}
}
export default RightPanel;