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
export default function TextFieldSizes() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [valuesimulator, setSimulator] = React.useState('');
  const [name, setName] = React.useState('');
  const [size, setSize] = React.useState('');
  const [rate, setRate] = React.useState('');
  const [start, setStart] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [Vrest, setVrest] = React.useState('');
  const [cm, setCm] = React.useState('');
  const [vtresh, setVTresh] = React.useState('');
  const [taurefrac, setTaurefrac] = React.useState('');
  const [tausynE, setTausynE] = React.useState('');
  const [tausynI, setTausynI] = React.useState('');
  const [IOffset, setIoffset] = React.useState('');
  const [taum, setTaum] = React.useState('');
  const [vreset, setVreset] = React.useState('');
  const [V, setV] = React.useState('');
  const [condition, setCondition] = React.useState(false);
  const [value, setValue] = React.useState(30);
  const handleSliderChange = (event, newValue) => {
   setValue(newValue);
   setVrest(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };
  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  const handleChangeSimulator = (event) => {
    setSimulator(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };
  const handleChangeRate = (event) => {
    setRate(event.target.value);
  };
  const handleChangeStart = (event) => {
    setStart(event.target.value);
  };
  const handleChangeDuration = (event) => {
    setDuration(event.target.value);
  };
  const handleChangeVrest = (event) => {
    setVrest(event.target.value);
  };
  const handleChangeCm = (event) => {
    setCm(event.target.value);
  };
  const handleChangeTaum = (event) => {
    setTaum(event.target.value);
  };
  const handleChangeTaurefrac = (event) => {
    setTaurefrac(event.target.value);
  };
  const handleChangeTauSynE = (event) => {
    setTausynE(event.target.value);
  };
  const handleChangeTauSynI = (event) => {
    setTausynI(event.target.value);
  };
  const handleChangeIOffset = (event) => {
    setIoffset(event.target.value);
  };
  const handleChangeVReset = (event) => {
    setVreset(event.target.value);
  };
  const handleChangeVTresh = (event) => {
    setVTresh(event.target.value);
  };
  const handleChangeV = (event) => {
    setV(event.target.value);
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
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField
          label="Name"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={name}
          onChange={handleChangeName}
        /></div>
        <div>
        <TextField
          label="Size"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={size}
          onChange={handleChangeSize}
        />
      </div>
      <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Simulator</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={valuesimulator}
          onChange={handleChangeSimulator}
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
      {valuesimulator=="SpikeSourcePoisson" &&   <React.Fragment><div>
      <FormLabel component="legend" className={classes.formControl}>Parameters</FormLabel>
      <TextField
          label="Rate"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={rate}
          onChange={handleChangeRate}
        /></div>
        <div>
        <TextField
          label="Start"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={start}
          onChange={handleChangeStart}
        /></div>
              <div>
      <TextField
          label="Duration"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={duration}
          onChange={handleChangeDuration}
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
         <p>simulator : {valuesimulator}</p>
        </div></React.Fragment>}
        {valuesimulator=="IF-curr-exp" && <React.Fragment>
        <div>
      <FormLabel component="legend" className={classes.formControl}>Parameters</FormLabel>
      <TextField
          label="V-rest"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={Vrest}
          onChange={handleChangeVrest}
        />          <Slider
        value={typeof value === 'number' ? value : 0}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
      /></div>
        <div>
        <TextField
          label="cm"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={cm}
          onChange={handleChangeCm}
        />
        <TextField
          label="tau_m"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={taum}
          onChange={handleChangeTaum}
        />
        <TextField
          label="tau_refrac"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={taurefrac}
          onChange={handleChangeTaurefrac}
        />
        <TextField
          label="tau_syn_E"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={tausynE}
          onChange={handleChangeTauSynE}
        />
        <TextField
          label="tau_syn_I"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={tausynI}
          onChange={handleChangeTauSynI}
        />
        <TextField
          label="i_offset"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={IOffset}
          onChange={handleChangeIOffset}
        />
        <TextField
          label="v_reset"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={vreset}
          onChange={handleChangeVReset}
        />
        <TextField
          label="v_tresh"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={vtresh}
          onChange={handleChangeVTresh}
        />
        <TextField
          label="v : Initial value"
          id="outlined-size-normal"
          defaultValue=""
          variant="outlined"
          value={V}
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
         <p>simulator : {valuesimulator}</p>
        </div>
</React.Fragment>}
{((rate !=="") && (start !=='') && (duration !=='') && (name !=='') && (size !=='') ) ?
<React.Fragment>
   <div><Button variant="contained" color="primary" >
        Confirm
      </Button>
      <Button variant="contained">Cancel</Button></div></React.Fragment> :
      <React.Fragment>
        <div><Button variant="contained" color="primary" >
        Confirm
      </Button>
      <Button variant="contained">Cancel</Button></div></React.Fragment>}
    </form>
  );
}





