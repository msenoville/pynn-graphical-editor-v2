import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import setModalForm from "./setModalForm";

const ModalForm = (props) => {
	const [selected, setSelected] = useState(null);
	const [attr, setAttr] = useState(null);
    const [open, setOpen] = React.useState(props.valid);

    // maybe not useful anymore
    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
        props.setValid(false)
      };

	// Handle parent call
	useEffect(() => {
		if (props.parentCall !== null) {
			if (props.parentCall.toLowerCase() === "setmodalform") {
				setModalForm(props.graph, setSelected, setAttr);
			}
		}
	}, [props.parentCall]);

	// When selected cell changes, update attrs that show on editor
	useEffect(() => {
		if (selected !== null) {
			var elt = { ...selected.value };
			setAttr(elt);
		}
	}, [selected]);

    useEffect(() => {
		if (props.valid == true) {
			setOpen(true);
		}
	}, [props.valid]);

	// Render
	if (selected === null || attr === null || attr.MXtype === undefined) {
		return (
			<div id={props.id}>
			</div>

		);
	} else {
		return (
            <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Modal Form</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  This is an example! ;-) -----------------------------
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="example"
                  type="example"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Validate
                </Button>
              </DialogActions>
            </Dialog>
          </div>
		);
	}
}
export default ModalForm;