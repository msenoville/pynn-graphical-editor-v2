import React, { useState, useEffect } from "react";

import { mxGraph, mxRubberband, mxShape, mxConnectionHandler, mxGraphModel, mxGeometry,mxPopupMenu,mxEvent } from "mxgraph-js";

import MainCanvas from "./mxGraph/MainCanvas";
import ObjSelect from "./mxGraph/ObjSelect";
import Toolbar from "./mxGraph/Toolbar";
import ModalForm from "./mxGraph/ModalForm";
// import ProjModalForm from "./mxGraph/ProjModalForm";
import setStylesheet from "./mxGraph/setStylesheet";
import setAnchors from "./mxGraph/setAnchors";
import setDefault from "./mxGraph/setDefault";


import "./css/main.css";
import "./css/graph.css";
import "./css/images.css";
// import "./css/common.css";
import "./css/popupmenu.css";

// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import ModalTest from "./mxGraph/ModalTest"
// import ControlledPopup from "./mxGraph/PopupMenu";
// import setMXObjs from "./mxGraph/setMXObjs";



function App(props) {

	// mxGraph object
	const [graph, setGraph] = useState(null);
	const [callObjSelect, setCallObjSelect] = useState(null);
	const [callToolbar, setCallToolbar] = useState(null);
	const [callModalForm, setCallModalForm] = useState(null);

	const [callProjModalForm, setCallProjModalForm] = useState(null);
	const [validated, setValidated] = useState(false);
	const [celltype, setCellType] = useState(null);

	//Called when the graph changes
	useEffect(() => {
		if (graph !== null && graph.init === true) {
			//Set the window global variable to be used inside mxGraph
			window["mxGraphModel"] = mxGraphModel;
			window["mxGeometry"] = mxGeometry;

			//Initialize mxGraph
			graph.init = false;
			setGraph(graph);

			//The nodes can be connected
			graph.setConnectable(true);

			//Turn on pan
			graph.setPanning(true);

			//Open range selection
			new mxRubberband(graph);

			// setStylesheet
			setStylesheet(graph);

			//Set anchor point - Overridden to define per-shape connection points
			setAnchors(mxGraph, mxShape);

			//Some functions of Overridden mxGraph
			setDefault(graph, mxConnectionHandler);

			//Set mxGraph Object to pull into graph
			setCallObjSelect("setMXObjs");

      		//Settings toolbar
			setCallToolbar("setToolbar");

			setCallModalForm("setModalForm");
			setCallProjModalForm("setProjModalForm");

		}
	}, [graph]);

	return (
		
		<div id="main">
		  		<ObjSelect id="objectSelector" 	graph={graph} 
				  								valid={validated} setValid={setValidated} 
												// celltype={celltype} setCellType={setCellType}
				  								parentCall={callObjSelect}/>
      			<Toolbar id="toolbar" graph={graph} parentCall={callToolbar}/>
      			<MainCanvas id="canvas" setGraph={setGraph} />
				<ModalForm id="modalFormPop" 	graph={graph} 
											valid={validated} setValid={setValidated} 
											// celltype={celltype} setCellType={setCellType}
											parentCall={callModalForm} />
				{/* <ProjModalForm id="modalFormProj" graph={graph} 
											valid={validated} setValid={setValidated} 
											//celltype={celltype} setCellType={setCellType}
											parentCall={callProjModalForm} /> */}
		</div>
	);


}
//<ControlledPopup open={open} setOpen={setOpen}/>






export default App;
