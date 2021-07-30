LoadGraph(data) {
    var container = ReactDOM.findDOMNode(this.refs.divGraph);
    // Checks if the browser is supported
    if (!mxClient.isBrowserSupported()) {
      // Displays an error message if the browser is not supported.
      mxUtils.error("Browser is not supported!", 200, false);
    } else {
      var graph = new mxGraph(container);
      this.setState(
        {
          graph: graph,
          dragElt: this.getEditPreview()
        },
        () => {
          console.log(this);
          // layout
          const layout = new mxCompactTreeLayout(graph, false);
          this.setState({ layout });
          this.setLayoutSetting(layout);
          this.loadGlobalSetting();
          this.setGraphSetting();
          this.initToolbar();
          this.settingConnection();
          this.createDragElement();
          var parent = graph.getDefaultParent();

          // Adds cells to the model in a single step
          graph.getModel().beginUpdate();
          try {
            var v1 = graph.insertVertex(parent, null, "Hello,", 20, 20, 80, 30);
            var v2 = graph.insertVertex(
              parent,
              null,
              "World!",
              200,
              150,
              80,
              30
            );
            var e1 = graph.insertEdge(parent, null, "", v1, v2);
          } finally {
            // Updates the display
            graph.getModel().endUpdate();
          }
        }
      );
      // Disables the built-in context menu
      mxEvent.disableContextMenu(container);
      // Trigger event after selection
      graph
        .getSelectionModel()
        .addListener(mxEvent.CHANGE, this.selectionChange);
      var parent = graph.getDefaultParent();
    }
  }
  render() {
    return (
      <div>
        <ul className="sidebar" ref="mxSidebar">
          <li className="title" data-title="Task node" data-value="Task node">
            Task node
          </li>
          <li
            className="task"
            data-title="Kafka->HDFS"
            data-value="Channel task"
          >
            rectangle
          </li>
          <li
            className="task"
            data-title="A/B test task"
            data-value="A/B test task"
          >
            A/Btest task
          </li>
          <li
            className="task"
            data-title="Hive->Email"
            data-value="Report task"
          >
            Report task
          </li>
          <li className="task" data-title="Hive->Hive" data-value="HSQL task">
            HSQL task
          </li>
          <li className="task" data-title="Shell task" data-value="Shell task">
            Shell task
          </li>
          <li id="layout123">layout</li>
        </ul>
        <div className="toolbar" ref="toolbar" />
        <div className="container-wrapper">
          <div className="container" ref="divGraph" />
        </div>
        <div className="changeInput" style={{ zIndex: 10 }} />
        {this.state.createVisile && (
          <CreateTaskNode
            currentTask={this.state.currentTask}
            visible={this.state.createVisile}
            handleCancel={this.handleCancel}
            handleConfirm={this.handleConfirm}
          />
        )}
      </div>
    );
  }

  //class App extends React.Component {
	constructor(props) {
		super(props);
	// mxGraph object
	const [graph, setGraph] = useState(null);
	const [callObjSelect, setCallObjSelect] = useState(null);
	const [callToolbar, setCallToolbar] = useState(null);

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
			
			graph.popupMenuHandler.autoExpand = true;
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
				};
					  // Disables the built-in context menu
					  mxEvent.disableContextMenu(container);
					  // Trigger event after selection
					  graph
						.getSelectionModel()
						.addListener(mxEvent.CHANGE, this.selectionChange);
					  var parent = graph.getDefaultParent();

			
		}
	}, [graph]);}
	render() {
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


}}