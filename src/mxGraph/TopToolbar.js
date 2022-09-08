// import React, { useState, useEffect } from "react";
// import setToolbar from "./setToolbar"

// const Toolbar = (props) => {


//     const [btns, setBtns] = useState(null);

//     // Handle parent call
//     useEffect(() => {
//         if (props.parentCall !== null) {
//             if (props.parentCall.toLowerCase() === 'settoptoolbar') {
//                 setToolbar(props.graph, setBtns);
//             }
//         }
//     }, [props.parentCall]);

//     if (btns === null) {
//         return (
//             <div id={props.id}></div>
//         );
//     }
//     else {
//         return (
//             <div id={props.id}>
//                 {btns.map((item, index) => (
//                     <span class='test'>
//                     <React.Fragment key={index}>
//                         <td className={`attrtool ${item.class}`} onClick={item.clickEvt}></td>
//                     </React.Fragment>
//                     </span>
//                 ))}
//             </div>
//         );
//     }

// import * as React from 'react';
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
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import SaveIcon from '@mui/icons-material/Save';
import FileOpenIcon from '@mui/icons-material/FileOpen';



const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  console.log('btns', btns)

  if (btns === null) {
      return (
          <div id={props.id}></div>
      );
  }
  else {
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            // <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography> */}
            {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> */}
              {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))} */}
  
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
              
            {/* </Box> */}

            {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    );
// };
// export default ResponsiveAppBar;
  }

}
export default TopToolbar;