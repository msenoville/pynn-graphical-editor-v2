import { mxUtils, mxEvent, mxGeometry, mxDragSource, mxCell, mxPopupMenu, mxHandle } from "mxgraph-js";
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css';
import ModalTest from "./ModalTest";
// import ControlledPopup from "./ControlledPopup"
import React, { useState } from 'react';

const setMXObjs = (graph, objLists, valid, setValid) => {
	var idx = 0;

	const setObj = function (MXObjClass, width, height, value, valid, setValid) {

		//Determine whether the Drop is valid
		const dropGraph = function (evt) {
			const x = mxEvent.getClientX(evt);
			const y = mxEvent.getClientY(evt);

			//Get the element on the coordinates of the mouse click
			const elt = document.elementFromPoint(x, y);

			//If this element falls in the graph
			if (mxUtils.isAncestorNode(graph.container, elt)) {
				return graph;
			}
			return null;
		};

		//Defines the popup menu for cells 
		const createPopupMenu = function (graph, menu, cell, evt, valid, setValid) {
			if (cell) {
			  if (cell.edge === true) {
				menu.addItem("Delete Projection", null, function() {
				  graph.removeCells([cell]);
				  mxEvent.consume(evt);
				});
			  } else {
				menu.addItem("Edit Population", null, function() {
				  // mxUtils.alert('Edit child node: ');
				  // selectionChanged(graph)
				  setValid(true)
				});
				menu.addItem("Delete Population", null, function() {
				  graph.removeCells([cell]);
				  mxEvent.consume(evt);
				});
			  }
			}
		};

		const objectLists = document.getElementById(objLists);

		var li = document.createElement("li");
		var img = document.createElement("div");
		img.classList.add("MXObj");
		img.classList.add(MXObjClass);

		li.id = "MXObj_" + idx;
		idx += 1;
		li.appendChild(img);
		objectLists.appendChild(li);

		//Creates a new vertex after the drop is successful
		const dropSuccessCb = function (graph, evt, target, x, y) {
			value.MXtype = MXObjClass;
			const cell = new mxCell(value, new mxGeometry(0, 0, width, height), MXObjClass, 'test');
			cell.vertex = true;
			const cells = graph.importCells([cell], x, y, target);
			if (cells != null && cells.length > 0) {
				graph.setSelectionCells(cells);
			}
			// graph.popupMenuHandler.factoryMethod = createPopupMenu(graph, menu, cell, evt);
		};

		// Creates the element that is being for the actual preview.
		var dragElt = document.createElement("div");
		dragElt.style.border = "dashed black 1px";
		dragElt.style.width = width + "px";
		dragElt.style.height = height + "px";
		var ds = mxUtils.makeDraggable(img, dropGraph, dropSuccessCb, dragElt, null, null, graph.autoscroll, true);
		
		// Restores original drag icon while outside of graph
		ds.createDragElement = mxDragSource.prototype.createDragElement;

		// Creates the popup menu
		graph.popupMenuHandler.factoryMethod = function(menu, cell, evt, valid) {
			createPopupMenu(graph, menu, cell, evt, valid, setValid);
		};
	}

	// For now, one draggable object... 
	// We can add more shapes...  
	setObj('rectangle', 120, 80, {
		// Font
		'text': '',
		'fontsize': 12,
		'fontcolor': '#000000',

		// Block
		'fillcolor': '#FFFFFF',
		'strokecolor': '#000000',
		'strokewidth': 1,
		'opacity': 100,

		'celltype': '',
		'name': '',
		'rate': '',
		'start': '',
		'duration': '',
		'Vrest': '',
		'cm': 1,
		'vthresh': -50,
		'taurefrac': 0,
		'tausynE': 5,
		'tausynI': 5,
		'IOffset': 0,
		'taum': 20,
		'vreset': -65,
		'V': '',
		'tausynI': '',
		'Vrest': -65
	},
	valid,
	setValid
	);

}
export default setMXObjs;
