import { mxUtils, mxEvent, mxCell, mxGeometry, mxDragSource,mxPopupMenu } from "mxgraph-js";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ModalTest from "./ModalTest";


const setMXObjs = (graph, objLists) => {
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
			var mxPopupMenuShowMenu = mxPopupMenu.prototype.showMenu;
			graph.popupMenuHandler.factoryMethod = function(menu, cell, evt)
			{
				menu.addItem('Item 1', null, function()
				{
					alert('Item 1');
				});
				
				menu.addItem('Item 2', null, function()
				{
					alert('Item 2');
				});

				menu.addSeparator();
				
				var submenu1 = menu.addItem('Submenu 1', null, null);
				
				menu.addItem('Subitem 1', null, function()
				{
					alert('Subitem 1');
				}, submenu1);
				menu.addItem('Subitem 1', null, function()
				{
					alert('Subitem 2');
				}, submenu1);
				menu.addItem('Test',null,function()
				{
					ModalTest();
				}, submenu1);
				mxPopupMenuShowMenu.apply(this, arguments);

				this.div.style.overflowY = 'auto';
				this.div.style.overflowX = 'hidden';
				this.div.style.maxHeight = '160px';};
		};

		// Creates the element that is being for the actual preview.
		var dragElt = document.createElement("div");
		dragElt.style.border = "dashed black 1px";
		dragElt.style.width = width + "px";
		dragElt.style.height = height + "px";

		var ds = mxUtils.makeDraggable(img, dropGraph, dropSuccessCb, dragElt, null, null, graph.autoscroll, true);
		// Restores original drag icon while outside of graph
		ds.createDragElement = mxDragSource.prototype.createDragElement;
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
export default setMXObjs;