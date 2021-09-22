import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import setModalForm from "./setModalForm";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 200,
    },
  },  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
    root: {
      width: 250,
    },
    input: {
      width: 42,
    },
}));

const ProjModalForm = (props) => {
  const classes = useStyles();
	const [selected, setSelected] = useState(null);
	const [attr, setAttr] = useState(null);
  const [openModal, setOpenModal] = React.useState(props.valid);

    // maybe not useful anymore
    const handleClickOpen = () => {
        setOpenModal(true);
      };
    
    const handleCloseModal = () => {
        setOpenModal(false);
        props.setValid(false);
        props.setCellType(null);
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
			setOpenModal(true);
		}
	}, [props.valid]);

	// Render
	if (selected === null || attr === null || attr.MXtype === undefined || props.type === null || props.type === 'Population') {
		return (
			<div id={props.id}>
			</div>

		);
	} else {
		return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
            <Dialog open={openModal} onClose={handleCloseModal} aria-labelledby="form-dialog-title">
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
                <Button onClick={handleCloseModal} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleCloseModal} color="primary">
                  Validate
                </Button>
              </DialogActions>
            </Dialog>
          </div>
    </form>
    
  );
}}
export default ProjModalForm;