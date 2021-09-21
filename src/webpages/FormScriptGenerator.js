import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';

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

  export default function FormScriptGenerator() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [filename, setFileName] = React.useState('');
    const [hardwarePlateform, setHardwarePlateform] = React.useState('');
    const [simulationTime, setSimulationTime] = React.useState('');
    const [simulationName, setSimulationName] = React.useState('');

    const handleClose = () => {
        setOpen(false);
      };
      const handleOpen = () => {
        setOpen(true);
      };

    const handleChangeFileName = (event) => {
        setFileName(event.target.value);
      };
      const handleChangeHardwarePlateform = (event) => {
        setHardwarePlateform(event.target.value);
      };
      const handleChangeSimulationTime = (event) => {
        setSimulationTime(event.target.value);
      };
      const handleChangeSimulationName = (event) => {
        setSimulationName(event.target.value);
      };

      return (
        <form className={classes.root} noValidate autoComplete="off">
        <div>
        <TextField
            label="file name"
            id="outlined-size-normal"
            defaultValue=""
            variant="outlined"
            value={filename}
            onChange={handleChangeFileName}
          /></div>
          <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Simulator</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={hardwarePlateform}
              onChange={handleChangeHardwarePlateform}
            >
            <MenuItem value="None">
            <em>None</em>
            </MenuItem>
              <MenuItem value={"NEST"}>NEST</MenuItem>
              <MenuItem value={"BrainScaleS"}>BrainScaleS</MenuItem>
              <MenuItem value={"SpiNNaker"}>SpiNNaker</MenuItem>
            </Select>
          </FormControl>
          </div>
          <div>        
              <TextField
            label="Simulation time (ms)"
            id="outlined-size-normal"
            defaultValue=""
            variant="outlined"
            value={simulationTime}
            onChange={handleChangeSimulationTime}
          /></div>
                    <div>        
              <TextField
            label="Simulation Name"
            id="outlined-size-normal"
            defaultValue=""
            variant="outlined"
            value={simulationName}
            onChange={handleChangeSimulationName}
          /></div>
          {((filename !=="") && (hardwarePlateform !=='') && (simulationTime !=='') && (simulationName !=='')  ) ?
<React.Fragment>
   <div><Button variant="contained" color="primary" >
        Confirm
      </Button>
      <Button variant="contained">Cancel</Button></div></React.Fragment> :
      <React.Fragment>
        <div><Button variant="contained" color="primary" >
        Confirm
      </Button>
      <Button variant="contained">Cancel</Button></div></React.Fragment>}</form>
          );
        }
        