import React, { useState, useEffect } from "react";
import setTopToolbar from "./setTopToolbar"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import AdbIcon from '@mui/icons-material/Adb';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import SaveIcon from '@mui/icons-material/Save';
import FileOpenIcon from '@mui/icons-material/FileOpen';

import ObjSelect from "./ObjSelect";

const TopToolbar = (props) => {

    const [btns, setBtns] = useState(null);

    console.log('props', props)
    // Handle parent call
    useEffect(() => {
        if (props.parentCall !== null) {
            console.log('i am here')
            if (props.parentCall.toLowerCase() === 'settoptoolbar') {
                setTopToolbar(props.graph, setBtns);
            }
        }
    }, [props.parentCall]);

  if (btns === null) {
      return (
          <div id={props.id}></div>
      );
  }
  else {
    return (
      <AppBar position="static">
        {/* <Container maxWidth="xl"> */}
          <Toolbar disableGutters>

            <Box 
            // sx={{ 
              // width: '10%',
              // display: { xs: 'none', md: 'flex' },
              // mr: 1
              // }}
              >

              <ObjSelect id="objectSelector" 	graph={props.graph} 
				  								MXValid={props.MXValidated} setValid={props.setMXValidated} 
												// celltype={celltype} setCellType={setCellType}
				  								parentCall={props.parentObjCall}/>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>



              {btns.map((item, index) => (
                <IconButton
                  key={index}
                  onClick={item.clickEvt}
                  sx={{ my: 2, color: 'white', display: 'block'}}
                >
                  {(item.class === 'zoom_in') && <ZoomInIcon sx={{fontsize:100}}></ZoomInIcon>} 
                  {(item.class === 'zoom_out') && <ZoomOutIcon fontsize="large"></ZoomOutIcon>} 
                  {(item.class === 'read') && <FileOpenIcon fontsize="large"></FileOpenIcon>} 
                  {(item.class === 'save') && <SaveIcon fontsize="large"></SaveIcon>} 
                  {(item.class === 'screenshoot') && <ScreenshotMonitorIcon fontsize="large"></ScreenshotMonitorIcon>} 

                </IconButton>
              ))}
              
            </Box>

          </Toolbar>
        {/* </Container> */}
      </AppBar>
    );

  }

}
export default TopToolbar;