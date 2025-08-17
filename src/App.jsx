// @ts-nocheck
import * as React from 'react';
import Header from './1-Header/header'
import Hero from './2-Hero/hero'
import Skills from './3-Skills/skills';
import Education from './4-Education/education';
import Projects from './5-Projects/projects'
import Contact from './6-ContactUS/contact'
import './App.css'
import {  cyan,grey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';



function App() {

const getDesignToken = (mode)=>({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode colors
          primary: {
            main: cyan[500],   // اللون الأساسي
            light: cyan[100],  // لون أفتح للهوفر مثلاً
            dark: cyan[700],   // لون أغمق للعناصر البارزة
          },
          background: {
            default: '#e2e2e276', // خلفية الصفحة
            paper: '#fbf9f9',   // خلفية الكروت والقوائم
          },
          text: {
            primary: grey[900],
            secondary: grey[700],
          },
          border: {
            primary: "#d5d5d5ff",  // تمت الإضافة هنا
          },
          card:{
            primary: grey[400],
          }
        }
      : {
          // Dark mode colors
          primary: {
            main: cyan[300],   // درجة أفتح من cyan في الوضع الليلي
            light: cyan[200],
            dark: cyan[500],
          },
          background: {
            paper: '#252525', // خلفية داكنة
            default: '#0d0d0dff',
          },
          text: {
            primary: '#ffffff',
            secondary: grey[400],
          },
          border: {
            primary: "#3b3a3a",  // ✅ أو لون مختلف للوضع الداكن
          },
          card:{
            primary: '#363736',
          }
        }),
  },
})
const  [mode, setMode] = React.useState(localStorage.getItem("currentMood") !== null ? localStorage.getItem("currentMood") : "light" );
const theme = React.useMemo(()=> createTheme(getDesignToken(mode)), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{width: '80%',
        backgroundColor: theme.palette.background.paper,
        // padding: "1.3rem 5%",
        border:`1px solid ${theme.palette.border.primary}`,
        marginLeft:'auto', marginRight: 'auto', display:'flex', flexDirection:'column', alignItems:'start', justifyContent:'center'}}>
        

        <Header setMode={setMode}/>

        <div id="Home">
          <Hero />
        </div>
        <div style={{width:'100%', height:"1px", backgroundColor: theme.palette.border.primary}} />

        <div id="Projects" style={{width:"100%"}}>
          <Projects />
        </div>
        <div style={{width:'100%', height:"1px", backgroundColor: theme.palette.border.primary}} />


        <div id="Skills">
          <Skills />
        </div>
        <div style={{width:'100%', height:"1px", backgroundColor: theme.palette.border.primary}} />


        <div id="Education" style={{width:"100%"}}>
          <Education />
        </div>
        <div style={{width:'100%', height:"1px", backgroundColor: theme.palette.border.primary}} />


        <div id="Contact">
          <Contact />
        </div>

      </Box>
    </ThemeProvider>
  )
}

export default App
