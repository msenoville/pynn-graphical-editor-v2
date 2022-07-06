// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContentText from '@material-ui/core/DialogContentText';
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
import Input from '@material-ui/core/Input';

import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    TextField,
    Typography
} from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
const Container = styled.div`
    padding: 1rem;
`;
const StyledDialogTitle = styled(DialogTitle)`
    text-align: center;
`;
const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const StyledTextField = styled(TextField)``;
export const ModalForm = () => {
    const [open, setOpen] = useState(false);
    const closeModel = (event, reason) => {
        // If You Went To Prevent Model Close On OutSide Click Of Model Than Uncomment Below Code
        // if (reason === 'backdropClick') {
        //     return
        // }
        setOpen(false);
    };
    const openModel = () => {
        setOpen(true);
    };
    return (
        <Container>
            <Button onClick={openModel} color="secondary" variant="contained">
                Open
            </Button>
            <Dialog open={open} fullWidth onClose={closeModel}>
                <StyledDialogTitle>
                    <FlexContainer>
                        <Typography variant="h6">Model Example</Typography>
                        <IconButton onClick={closeModel}>
                            <CloseIcon />
                        </IconButton>
                    </FlexContainer>
                </StyledDialogTitle>
                <DialogContent>
                    <form>
                        <Grid container spacing={3} direction="column">
                            <Grid item>
                                <StyledTextField
                                    fullWidth={true}
                                    id="username"
                                    label="Username"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item>
                                <StyledTextField
                                    fullWidth={true}
                                    id="password"
                                    label="Password"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={openModel}
                                    color="primary"
                                    variant="contained"
                                >
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
            </Dialog>
        </Container>
    );
};
