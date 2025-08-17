import './projects.css'
import Box from '@mui/material/Box';
import { Typography, useTheme } from '@mui/material';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import GitHubIcon from '@mui/icons-material/GitHub';
import allProjects from './allProjects'
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState(allProjects);
  const filterProjects = (id) =>{
    if(!id){
      setProjects(allProjects)
    } else{
      setProjects(allProjects.filter((project)=> project.id.toLocaleLowerCase() === id))
    }
  }
  const theme = useTheme();
  return (
      <Box
      className='projects'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <div className="filter_buttons">
        <button onClick={()=> filterProjects("")}>All</button>
        <button onClick={()=> filterProjects("excel")}>Excel</button>
        <button onClick={()=> filterProjects("sql")}>SQL</button>
        <button onClick={()=> filterProjects("power_bi")}>Power BI</button>
        <button onClick={()=> filterProjects("tableau")}>Tableau</button>
        <button onClick={()=> filterProjects("python")}>Python</button>
      </div>
      <div className='proj_cards'>
        <AnimatePresence>
        {projects.map((e,index)=>{
          return(
        <motion.article
        layout
        initial={{scale: 0}}
        animate={{scale: 1}}
        // @ts-ignore
        key={index} className='single_card' style={{width:'270px', border: `1px solid ${theme.palette.border.primary}`}}>
          <img src={e.img} alt="" width={268} height={150}/>
          <Box className="card_text" px={1.2}>
            <Typography variant='h6' mt={1}>{e.title}</Typography>
            <Typography variant='body2' mt={1} fontSize={13} color={theme.palette.text.secondary}>{e.description}</Typography>
          </Box>
          <Box className="card_links" px={1.2} sx={{margin: '1rem 0px'}}>
            <Box sx={{display: 'flex', gap: '10px'}}>
              <a style={{color: theme.palette.text.primary}} target='_blank' href={e.code_link}><InsertLinkIcon /></a>
              <a style={{color: theme.palette.text.primary}} target='_blank' href={e.git_hup_link}><GitHubIcon /></a>
            </Box>
          </Box>
        </motion.article>
          )
        })}
        </AnimatePresence>
      </div>
    </Box>
  )
}