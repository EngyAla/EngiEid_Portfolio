// @ts-nocheck
import React from 'react'
import './header.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useTheme } from '@mui/material/styles';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const pages = ['About','Projects', 'Skills', 'Education', 'Contact'];

export default function Header({setMode}) {
    const theme = useTheme();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
            <Box className='header' id='Header' sx={{marginLeft:{sm: '20px', md:"auto"}}}>
            <AppBar position="static" className='nav_bar' style={{
                backgroundColor:theme.palette.background.paper,
                color:theme.palette.text.primary,
                borderRadius:"35px", display: "flex", alignItems: 'center', justifyContent:"center", height: "50px",marginLeft:'20px' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: { md: 'flex', lg: 'none' } }}>
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
                    sx={{ display: { md: 'block', lg: 'none' } }}
                    >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <a href={`#${page}`}
                        key={page}  style={{ marginTop: 2, color: theme.palette.text.primary, display: 'block', padding:"0px 30px", textDecoration:"none",textAlign:'center' }}>{page}</a>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                {/* <BarChartIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    mr: 0,
                    display: { md: 'flex', lg: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 600,
                    fontSize: "20px",
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                Engi-Eid
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
                {pages.map((page) => (
                    <a href={`#${page}`}
                        key={page}
                        onClick={handleCloseNavMenu}
                        style={{ marginTop: 2, color: theme.palette.text.primary, display: 'block', padding:"0px 30px", textDecoration:"none" }}
                    >
                        {page}
                    </a>
                    ))}
                </Box>
                </Toolbar>
            </Container>
        </AppBar>
            <Box className="switch_mode_btn" mt={1} ml={5} sx={{ borderRadius:"50%", backgroundColor: theme.palette.background.paper}}>
                {
                        theme.palette.mode == "light" ? 
                        (<IconButton aria-label="light_mood" sx={{color:"#ffb74d"}} onClick={() => 
                            {
                                setMode(theme.palette.mode === "light" ? "dark" : "light")
                                // toggle the theme
                                localStorage.setItem("currentMood", theme.palette.mode === "dark" ? "light": "dark")
                            }
                        }>
                            <LightModeOutlinedIcon />
                        </IconButton>) :
                        (<IconButton aria-label="dark_mood" color="inherit" onClick={() =>
                            {
                                setMode(theme.palette.mode === "light" ? "dark" : "light")
                                localStorage.setItem("currentMood", theme.palette.mode === "dark" ? "light": "dark")
                            }
                        }>
                            <BedtimeOutlinedIcon />
                        </IconButton>)
                    }
            </Box>
        </Box>
    )
}
