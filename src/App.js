import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import { mxGraph, mxRubberband, mxShape, mxConnectionHandler, mxGraphModel, mxGeometry,mxPopupMenu,mxEvent } from "mxgraph-js";

import MainCanvas from "./mxGraph/MainCanvas";
import ObjSelect from "./mxGraph/ObjSelect";
import Toolbar from "./mxGraph/Toolbar";
import CreateJob from "./mxGraph/CreateJob";

import setStylesheet from "./mxGraph/setStylesheet";
import setAnchors from "./mxGraph/setAnchors";
import setDefault from "./mxGraph/setDefault";

import "./css/main.css";
import "./css/graph.css";
// import "./css/common.css";
import "./css/popupmenu.css";


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ModalTest from "./mxGraph/ModalTest"
import ControlledPopup from "./mxGraph/PopupMenu";
import setMXObjs from "./mxGraph/setMXObjs";





function App(props) {
	// mxGraph object
	const [graph, setGraph] = useState(null);
	const [callObjSelect, setCallObjSelect] = useState(null);
	const [callToolbar, setCallToolbar] = useState(null);
	const [currentCollab, setCurrentCollab] = React.useState(null);
	const [open, setOpen] = useState(false);
	



	//Called when the graph changes
	useEffect(() => {
		if (graph !== null && graph.init === true) {
			//Set the window global variable to be used inside mxGraph
			window["mxGraphModel"] = mxGraphModel;
			window["mxGeometry"] = mxGeometry;

			//Initialize mxGraph
			graph.init = false;
			setGraph(graph);

			//After setting this parameter, the nodes can be connected
			graph.setConnectable(true);

			//Turn on pan
			graph.setPanning(true);

			//Open range selection
			new mxRubberband(graph);

			// setStylesheet mxStylesheet
			setStylesheet(graph);

			//Set anchor point
			// Overridden to define per-shape connection points
			setAnchors(mxGraph, mxShape);

			//Some functions of Overridden mxGraph
			setDefault(graph, mxConnectionHandler);


			//Set mxGraph Object to pull into graph
			setCallObjSelect("setMXObjs");

      		//Settings toolbar
			setCallToolbar("setToolbar");






		}
	}, [graph]);

	return (
		<div id="main">
			{/* <React.Fragment> */}
			{/* <td>  */}
		  		<ObjSelect id="objectSelector" graph={graph} parentCall={callObjSelect}/>


			{/* </td> */}
			{/* </React.Fragment> */}

      {/* <Toolbar id="toolbar" graph={graph} parentCall={callToolbar}/> */}
      <MainCanvas id="canvas" setGraph={setGraph} />
	  
	 
	  
		</div>


	);


}
//<ControlledPopup open={open} setOpen={setOpen}/>





export default App;
