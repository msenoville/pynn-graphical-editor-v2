import { mxConstants } from "mxgraph-js";

export default function setStylesheet(graph) {
    const setRectangle = function () {
	    var style = [];
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
        style[mxConstants.STYLE_STROKECOLOR] = '#000000';
        style[mxConstants.STYLE_STROKEWIDTH] = 1;
        style[mxConstants.STYLE_FILLCOLOR] = '#FFFFFF';
        style[mxConstants.STYLE_FONTCOLOR] = '#000000';
        style[mxConstants.STYLE_FONTSIZE] = 12;
        graph.getStylesheet().putCellStyle('rectangle', style);
    }

    setRectangle();

}
