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
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';

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

const PopModalForm = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [celltype, setCellType] = React.useState('');
  const [name, setName] = React.useState('');
  const [size, setSize] = React.useState('');
  const [rate, setRate] = React.useState('');
  const [start, setStart] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [Vrest, setVrest] = React.useState('');
  const [cm, setCm] = React.useState('');
  const [vthresh, setVThresh] = React.useState('');
  const [taurefrac, setTaurefrac] = React.useState('');
  const [tausynE, setTausynE] = React.useState('');
  const [tausynI, setTausynI] = React.useState('');
  const [IOffset, setIoffset] = React.useState('');
  const [taum, setTaum] = React.useState('');
  const [vreset, setVreset] = React.useState(0);
  const [V, setV] = React.useState('');
  const [condition, setCondition] = React.useState(false);
    

  const handleSliderChangeRate = (event, newValue) => {
    var elt = { ...props.attr };
    elt.rate = event.target.value;
    props.setAttr(elt);
    setRate(newValue);
    props.graph.model.setValue(props.selected, elt);

  };
  const handleSliderChangeStart = (event, newValue) => {
    var elt = { ...props.attr };
    elt.start = event.target.value;
    props.setAttr(elt);
    setStart(newValue);
    props.graph.model.setValue(props.selected, elt);

   };
  const handleSliderChangeDuration = (event, newValue) => {
    var elt = { ...props.attr };
    elt.duration = event.target.value;
    props.setAttr(elt);
    setDuration(newValue);
    props.graph.model.setValue(props.selected, elt);
   };

  const handleChangeCellType = (event) => {
    var elt = { ...props.attr };
    elt.celltype = event.target.value;
    props.setAttr(elt);
    setCellType(event.target.value);
    props.graph.model.setValue(props.selected, elt);
  };
  const handleChangeName = (event) => {
    var elt = { ...props.attr };
    elt.name = event.target.value;
    props.setAttr(elt);
    // setName(event.target.value);
    props.graph.model.setValue(props.selected, elt);
  };
  const handleChangeSize = (event) => {
    var elt = { ...props.attr };
    elt.size = event.target.value;
    props.setAttr(elt);
    // setSize(event.target.value);
    props.graph.model.setValue(props.selected, elt);
  };
  const handleChangeRate = (event) => {
    var elt = { ...props.attr };
    elt.rate = event.target.value;
    props.setAttr(elt);
    // setRate(event.target.value);
    props.graph.model.setValue(props.selected, elt);
  };
  const handleChangeStart = (event) => {
    var elt = { ...props.attr };
    elt.start = event.target.value;
    props.setAttr(elt);
    // setStart(event.target.value);
    props.graph.model.setValue(props.selected, elt);
  };
  const handleChangeDuration = (event) => {
    var elt = { ...props.attr };
    elt.duration = event.target.value;
    props.setAttr(elt);
    // setDuration(event.target.value);
    props.graph.model.setValue(props.selected, elt);
  };

  const handleChangeVrest = (event, newValue) => {
    var elt = { ...props.attr };
    elt.Vrest = event.target.value;
    props.setAttr(elt);
    // setVrest(event.target.value);
    props.graph.model.setValue(props.selected, elt);
  };

  const handleChangeCm = (event) => {
    var elt = { ...props.attr };
    elt.cm = event.target.value;
    props.setAttr(elt);
    // setCm(event.target.value);
    props.graph.model.setValue(props.selected, elt);
  };
  const handleChangeTaum = (event) => {
    var elt = { ...props.attr };
    elt.taum = event.target.value;
    props.setAttr(elt);
    // setTaum(event.target.value);
    props.graph.model.setValue(props.selected, elt);
  };
  const handleChangeTaurefrac = (event) => {
    var elt = { ...props.attr };
    elt.taurefrac = event.target.value;
    props.setAttr(elt);
    // setTaurefrac(event.target.value);
    props.graph.model.setValue(props.selected, elt);
  };
  const handleChangeTauSynE = (event) => {
    var elt = { ...props.attr };
    elt.tausynI = event.target.value;
    props.setAttr(elt);
    // setTausynE(event.target.value);
    props.graph.model.setValue(props.selected, elt);
  };
  const handleChangeTauSynI = (event) => {
    var elt = { ...props.attr };
    elt.tausynI = event.target.value;
    props.setAttr(elt);
    // setTausynI(event.target.value);
    props.graph.model.setValue(props.selected, elt);
  };
  const handleChangeIOffset = (event) => {
    var elt = { ...props.attr };
    elt.IOffset = event.target.value;
    props.setAttr(elt);
    // setIoffset(event.target.value);
    props.graph.model.setValue(props.selected, elt);
  };
  const handleChangeVReset = (event) => {
    var elt = { ...props.attr };
    elt.vreset = event.target.value;
    props.setAttr(elt);
    // setVreset(event.target.value);
    props.graph.model.setValue(props.selected, elt);
  };
  const handleChangeVThresh = (event) => {
    var elt = { ...props.attr };
    elt.vthresh = event.target.value;
    props.setAttr(elt);
    // setVThresh(event.target.value);
    props.graph.model.setValue(props.selected, elt);
  };
  const handleChangeV = (event) => {
    var elt = { ...props.attr };
    elt.V = event.target.value;
    props.setAttr(elt);
    // setV(event.target.value);
    props.graph.model.setValue(props.selected, elt);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [state, setState] = React.useState({
    spikes: false,
    v: false,
  });
  const handleChange2 = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const { spikes, v } = state;
  const error = [spikes, v].filter((v) => v).length !== 2;
    const [openModal, setOpenModal] = React.useState(props.valid);

    // setset()

    // maybe not useful anymore
    const handleClickOpen = () => {
        setOpenModal(true);
      };
    
    const handleCloseModal = () => {
        setOpenModal(false);
        props.setValid(false)
        props.setSelected(null)
      };

    useEffect(() => {
		if (props.valid == true) {
			setOpenModal(true);
		}
        // if (props.valid == false) {
		// 	setOpenModal(false);
        //     props.setSelected(null)
		// }
	}, [props.valid]);

	// Render
    if (
		props.attr.MXtype === "rectangle" 
	) {
	return (
      <form className={classes.root} noValidate autoComplete="off">
        {/* <div>
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
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Validate
                </Button>
              </DialogActions>
            </Dialog>
          </div> */}
      <div>
      <Dialog open={openModal} onClose={handleCloseModal} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Population Modal Form</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  This is a prototype for setting Population().
                </DialogContentText>
                <div>

      <TextField
          label="Name"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={props.attr.name}
          onChange={handleChangeName}
        /></div>
        <div>
        <TextField
          label="Size"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={props.attr.size}
          onChange={handleChangeSize}
        />
      </div>
      <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Cell Type</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.attr.celltype}
          onChange={handleChangeCellType}
        >
        <MenuItem value="None">
        <em>None</em>
        </MenuItem>
          <MenuItem value={"SpikeSourcePoisson"}>SpikeSourcePoisson</MenuItem>
          <MenuItem value={"IF-curr-exp"}>IF-curr-exp</MenuItem>
          <MenuItem value={"IF-cond-exp"}>IF-cond-exp</MenuItem>
        </Select>
      </FormControl>
      </div>

      {celltype=="SpikeSourcePoisson" &&   <React.Fragment><div>
      <FormLabel component="legend" className={classes.formControl}>Parameters</FormLabel>
      <TextField
          label="Rate"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={props.attr.rate}
          onChange={handleChangeRate}
        />
        <div><Slider
        value={typeof rate === 'number' ? rate : 0}
        onChange={handleSliderChangeRate}
        aria-labelledby="input-slider"
      /></div></div>
        <div>
        <TextField
          label="Start"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={props.attr.start}
          onChange={handleChangeStart}
        /><Slider
        value={typeof start === 'number' ? start : 0}
        onChange={handleSliderChangeStart}
        aria-labelledby="input-slider"
      /></div>
              <div>
      <TextField
          label="Duration"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={props.attr.duration}
          onChange={handleChangeDuration}
        /><Slider
        value={typeof duration === 'number' ? duration : 0}
        onChange={handleSliderChangeDuration}
        aria-labelledby="input-slider"
      />
      </div>
      <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Recording</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={props.attr.spikes} onChange={handleChange2} name="spikes" />}
            label="spikes"
          />
          <FormControlLabel
            control={<Checkbox checked={props.attr.v} onChange={handleChange2} name="v" />}
            label="v"
          />
         </FormGroup></FormControl>
         <p>Cell Type : {celltype}</p>
        </div></React.Fragment>}
        {celltype=="IF-curr-exp" && <React.Fragment>
        <div>
      <FormLabel component="legend" className={classes.formControl}>Parameters</FormLabel>
      <TextField
          label="V-rest"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={props.attr.Vrest}
          onChange={handleChangeVrest}
        />          </div>
        <div>
        <TextField
          label="cm"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={props.attr.cm}
          onChange={handleChangeCm}
        />
        <TextField
          label="tau_m"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={props.attr.taum}
          onChange={handleChangeTaum}
        />
        <TextField
          label="tau_refrac"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={props.attr.taurefrac}
          onChange={handleChangeTaurefrac}
        />
        <TextField
          label="tau_syn_E"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={props.attr.tausynE}
          onChange={handleChangeTauSynE}
        />
        <TextField
          label="tau_syn_I"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={props.attr.tausynI}
          onChange={handleChangeTauSynI}
        />
        <TextField
          label="i_offset"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={props.attr.IOffset}
          onChange={handleChangeIOffset}
        />
        <TextField
          label="v_reset"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={props.attr.vreset}
          onChange={handleChangeVReset}
        />
        <TextField
          label="v_thresh"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={props.attr.vthresh}
          onChange={handleChangeVThresh}
        />
        <TextField
          label="v : Initial value"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={props.attr.V}
          onChange={handleChangeV}
        />
</div>
          <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Recording</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={spikes} onChange={handleChange2} name="spikes" />}
            label="spikes"
          />
          <FormControlLabel
            control={<Checkbox checked={v} onChange={handleChange2} name="v" />}
            label="v"
          />
         </FormGroup></FormControl>
         <p>Cell Type : {celltype}</p>
        </div>
</React.Fragment>}
    </DialogContent>
    <DialogActions>
            {/* {((rate !=="") && (start !=='') && (duration !=='') && (name !=='') && (size !=='') ) ?
            <React.Fragment>
            <div><Button variant="contained" color="primary" >
                    Confirm
                </Button>
                <Button variant="contained">Cancel</Button></div></React.Fragment> :
                <React.Fragment>
                    <div><Button variant="contained" color="primary" >
                    Confirm
                </Button>
                <Button variant="contained">Cancel</Button></div></React.Fragment>} */}
              
                <Button onClick={handleCloseModal} color="primary" variant="contained">
                  Cancel
                </Button>
                <Button onClick={handleCloseModal} color="primary" variant="contained">
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>
      </div>
    </form>
    
  )
} else {
    return null;
}

}
  ;

export default PopModalForm;