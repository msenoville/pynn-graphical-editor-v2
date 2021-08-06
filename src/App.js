import React, { useState, useEffect } from "react";

import { mxGraph, mxRubberband, mxShape, mxConnectionHandler, mxGraphModel, mxGeometry,mxPopupMenu,mxEvent } from "mxgraph-js";

import MainCanvas from "./mxGraph/MainCanvas";
import ObjSelect from "./mxGraph/ObjSelect";
import Toolbar from "./mxGraph/Toolbar";
import CreateTaskNode from "./mxGraph/CreateTaskNode";

import setStylesheet from "./mxGraph/setStylesheet";
import setAnchors from "./mxGraph/setAnchors";
import setDefault from "./mxGraph/setDefault";

import "./css/main.css";
import "./css/images.css";
import "./css/common.css";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CreateJob from './mxGraph/CreateJob.js';





function App(props) {
	// mxGraph object
	const [graph, setGraph] = useState(null);
	const [callObjSelect, setCallObjSelect] = useState(null);
	const [callToolbar, setCallToolbar] = useState(null);
	var tempProps = JSON.parse(JSON.stringify(this.props));
	props.state = {
		graph: {},
		layout: {},
		json: "",
		dragElt: null,
		createVisile: false,
		currentNode: null,
		currentTask: ""
	  };

	

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

			let handleCancel = () => {
				props.setState({ createVisile: false });
				props.state.graph.removeCells([props.state.currentNode]);
			  };
			let  handleConfirm = fields => {
				const { graph } = props.state;
				const cell = graph.getSelectionCell();
				props.applyHandler(graph, cell, "text", fields.taskName);
				props.applyHandler(graph, cell, "desc", fields.taskDesc);
				cell.setId(fields.id || 100);
				props.setState({ createVisile: false });
			  };
			let  selectionChanged = (graph, value) => {
				console.log("visible");
				props.setState({
				  createVisile: true,
				  currentNode: graph.getSelectionCell(),
				  currentTask: value
				});
			  };
			



			
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
	  {props.state.createVisile && (
          <CreateTaskNode
            currentTask={props.state.currentTask}
            visible={props.state.createVisile}
            handleCancel={props.handleCancel}
            handleConfirm={props.handleConfirm}
          />)}
		</div>
		
	);


}

// <CreateJob auth={props.auth} collab={currentCollab}  setCollab={setCurrentCollab} />
//import CreateJob from './Queue/CreateJob.js';






export default App;
