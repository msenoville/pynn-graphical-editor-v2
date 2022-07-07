// import {
//   Button,
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   Grid,
//   IconButton,
//   TextField,
//   Typography
// } from '@material-ui/core';
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import CloseIcon from '@material-ui/icons/Close';

// const Container = styled.div`
//   padding: 1rem;
// `;

// const StyledDialogTitle = styled(DialogTitle)`
//   text-align: center;
// `;

// const FlexContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const StyledTextField = styled(TextField)``;

// export const ProjModalForm = () => {
//   const [open, setOpen] = useState(false);

//   const closeModel = (event, reason) => {
//       // If You Went To Prevent Model Close On OutSide Click Of Model Than Uncomment Below Code
//       // if (reason === 'backdropClick') {
//       //     return
//       // }
//       setOpen(false);
//   };

//   const openModel = () => {
//       setOpen(true);
//   };

//   return (
//       <Container>
//           <Button onClick={openModel} color="secondary" variant="contained">
//               Open
//           </Button>

//           <Dialog open={open} fullWidth onClose={closeModel}>
//               <StyledDialogTitle>
//                   <FlexContainer>
//                       <Typography variant="h6">Edit Projection</Typography>
//                       <IconButton onClick={closeModel}>
//                           <CloseIcon />
//                       </IconButton>
//                   </FlexContainer>
//               </StyledDialogTitle>

//               <DialogContent>
//                   <form>
//                       <Grid container spacing={3} direction="column">
//                           <Grid item>
//                               <StyledTextField
//                                   fullWidth={true}
//                                   id="id"
//                                   label="label"
//                                   variant="outlined"
//                               />
//                           </Grid>

//                           <Grid item>
//                               <StyledTextField
//                                   fullWidth={true}
//                                   id="id2"
//                                   label="label2"
//                                   variant="outlined"
//                               />
//                           </Grid>

//                           <Grid item>

//                           </Grid>
//                       </Grid>
//                   </form>
//               </DialogContent>
//           </Dialog>
//       </Container>
//   );
// };
// export default ProjModalForm;

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
import Input from '@material-ui/core/Input';


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
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [selected, setSelected] = useState(null);
  const [attr, setAttr] = useState(null);
  const [openModal, setOpenModal] = React.useState(props.valid);


const handleChangeName = (event) => {
  var elt = { ...props.attr };
  elt.name = event.target.value;
  props.setAttr(elt);
  setName(event.target.value);
  props.graph.model.setValue(props.selected, elt);
  };

// const handleClose = () => {
//     setOpen(false);
//   };
// const handleOpen = () => {
//     setOpen(true);
//   }
// const handleChange = (event) => {
//   setState({ ...state, [event.target.name]: event.target.checked });
// };


  // maybe not be useful anymore
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

    else {
      setOpenModal(false);
      props.setSelected(null)
    }

	}, [props.valid]);

	// Render
	if (selected === null || attr === null || attr.MXtype === undefined || props.type === null || props.type === 'Population') {
		return (
			<div> 
        id={props.id}
			</div>

		);
	} else {
		return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
            <Dialog open={openModal} onClose={handleCloseModal} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Projection Modal Form</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  This is a prototype for setting Projection()
                </DialogContentText>
                <div>

                <TextField
                  label="Name"
                  id="outlined-size-normal"
                  defaultValue=""
                  variant="outlined"
                  value="changeme"
                  // onChange="changeme"
                  margin="dense"
                /></div>

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
 }
}
export default ProjModalForm;