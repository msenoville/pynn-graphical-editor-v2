import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import setModalForm from "./setModalForm";
import PopModalForm from "./PopModalForm";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { FormatLineSpacing } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';

const ModalForm = (props) => {

	const [selected, setSelected] = useState(null);
	const [attr, setAttr] = useState(null);

	// Handle parent call
	useEffect(() => {
		if (props.parentCall !== null) {
			if (props.parentCall.toLowerCase() === "setmodalform") {
				setModalForm(props.graph, setSelected, setAttr);
			}
		}
	}, [props.parentCall]);

	// When selected cell changes, update attrs
	useEffect(() => {
		if (selected !== null && props.valid == true) {
			var elt = { ...selected.value };
			setAttr(elt);
		}
	}, [selected, props.valid]);


	// Render
	if (selected === null || attr === null || attr.MXtype === undefined || props.type === null || props.type === 'Projection') {
		return (
			<div id={props.id}>
			</div>

		);
	} else {
		return (
      <div id={props.id}>
          <PopModalForm attr={attr} setAttr={setAttr} 
                        selected={selected}  setSelected={setSelected}
                        valid={props.valid}  setValid={props.setValid}
                        graph={props.graph} />
      </div>
  );
}
}

export default ModalForm;