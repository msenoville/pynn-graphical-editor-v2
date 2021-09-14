import { mxUtils, mxEvent, mxCell, mxGeometry, mxDragSource, mxPopupMenu, mxHandle } from "mxgraph-js";

const SetMXObjs = (graph, objLists) => {
	var idx = 0;

	const setObj = function (MXObjImgClass, width, height, value) {

		//Determine whether the Drop is valid
		const dropGraph = function (evt) {
			const x = mxEvent.getClientX(evt);
			const y = mxEvent.getClientY(evt);

			//Get the topmost element on the coordinates of the mouse click
			const elt = document.elementFromPoint(x, y);

			//If this element falls in the graph
			if (mxUtils.isAncestorNode(graph.container, elt)) {
				return graph;
			}
			return null;
		};

		const createPopupMenu = function (graph, menu, cell, evt) {
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
		img.classList.add(MXObjImgClass);

		li.id = "MXObj_" + idx;
		idx += 1;
		li.appendChild(img);
		objectLists.appendChild(li);

		//Create a new vertex after the drop is successful
		const dropSuccessCb = function (graph, evt, target, x, y) {
			value.MXtype = MXObjImgClass;
			const cell = new mxCell(value, new mxGeometry(0, 0, width, height), MXObjImgClass);
			cell.vertex = true;
			const cells = graph.importCells([cell], x, y, target);
			if (cells != null && cells.length > 0) {
				graph.setSelectionCells(cells);
			}
		};

		// Creates the element that is being for the actual preview.
		var dragElt = document.createElement("div");
		dragElt.style.border = "dashed black 1px";
		dragElt.style.width = width + "px";
		dragElt.style.height = height + "px";

		var ds = mxUtils.makeDraggable(img, dropGraph, dropSuccessCb, dragElt, null, null, graph.autoscroll, true);
		// Restores original drag icon while outside of graph
		ds.createDragElement = mxDragSource.prototype.createDragElement;

		graph.popupMenuHandler.factoryMethod = function(menu, cell, evt) {
			createPopupMenu(graph, menu, cell, evt);
		};
	}

	setObj('rectangle', 120, 80, {
		// Font
		'text': '',
		'fontsize': 12,
		'fontcolor': '#000000',

		// Block
		'fillcolor': '#FFFFFF',
		'strokecolor': '#000000',
		'strokewidth': 1,
		'opacity': 100
	});

}
export default SetMXObjs;