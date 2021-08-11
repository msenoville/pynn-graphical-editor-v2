import {  mxUtils, mxCodec } from "mxgraph-js";
import html2canvas from 'html2canvas';
import 'js-file-download';

const setToolbar = (graph, setBtns) => {
	// Adds zoom buttons in top, left corner
	var btnsObj = [];
	const addButton = function (imgClass, funct) {
		var btnObj = {};
		btnObj['class'] = imgClass;
		btnObj['clickEvt'] = funct;
		btnsObj.push(btnObj);
	}

	const DrawGraph = function (xmlString) {
		//var xmlString = '<root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" style="text" vertex="1" parent="1"><Object text="Text" fontsize="12" fontcolor="#000000" UMLtype="text" as="value"/><mxGeometry x="510" y="240" width="50" height="30" as="geometry"/></mxCell><mxCell id="3" style="rectangle" vertex="1" parent="1"><Object text="" fontsize="12" fontcolor="#000000" fillcolor="#FFFFFF" strokecolor="#000000" strokewidth="1" opacity="100" UMLtype="rectangle" as="value"/><mxGeometry x="710" y="330" width="120" height="80" as="geometry"/></mxCell></root>';
		console.log(xmlString);
		var doc = mxUtils.parseXml(xmlString);
		var codec = new mxCodec(doc);
		var elt = doc.documentElement.firstChild;
		var cells = [];

		while (elt != null) {
			var a = codec.decodeCell(elt);
			cells.push(a);
			elt = elt.nextSibling;
		}
		graph.addCells(cells);
	}

	const SaveXml = function (xml) {
		// file name
		// var filename = document.getElementById('filename').value;
		var filename = '';
		if (filename === '') {
			filename = 'MXGraph';
		}
		var fileDownload = require('js-file-download');
		fileDownload(xml, filename + '.xml');
	}

	const ReadXml = function () {
		var fileUploader = document.createElement('input');
		fileUploader.type = 'file';

		fileUploader.click();
		var fileReader = new FileReader();
		fileUploader.addEventListener("change", function (event) {
			var xmlType = /xml.*/;
			if (this.files.length > 0 && this.files[0].type.match(xmlType)) {
				fileReader.readAsText(this.files[0]);
			} else {
				alert('File Type Error');
				return;
			}
		}, false);
		fileReader.onload = function (e) {
			DrawGraph(this.result);
			alert('Load successed!');
		}
	}

	addButton("screenshoot", function () {
		// var filename = document.getElementById('filename').value;
		var filename = '';
		if (filename == '') {
			filename = 'MXGraph';
		}
		html2canvas(document.querySelector("#canvas")).then(canvas => {
			var download = document.createElement('a');
			download.href = canvas.toDataURL("image/png");
			download.download = filename + '.png';
			download.click();
		});
	});

	addButton("save", function () {
		var encoder = new mxCodec();
		var result = encoder.encode(graph.getModel());
		var xml = mxUtils.getXml(result);
		xml = xml.substring(xml.indexOf("<mxGraphModel>") + "<mxGraphModel>".length, xml.indexOf("</mxGraphModel>"));
		SaveXml(xml);
	});

	addButton("read", function () {
		ReadXml();
	});

	addButton("navigate_plus", function () {
		graph.zoomIn();
	});

	addButton("navigate_minus", function () {
		graph.zoomOut();
	});

	setBtns(btnsObj);

}

export default setToolbar;