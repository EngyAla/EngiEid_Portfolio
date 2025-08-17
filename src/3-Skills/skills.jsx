import { Box, Button, Typography } from '@mui/material';
import './skills.css'

const Skills = ()=> {
    let skillsArr = ["Excel", "Power Bi","Tableau","SQL","Python","Statistical analysis"];
    return (
    <Box sx={{width:{sm: "100%", md:"70%"}, padding:'20px'}}  className="personal_skills">
        <div className="Skills_title">
            <Typography variant='h4' mb={2} fontWeight={700}>Skills.</Typography>
        </div>
        
        <div>
            {
                skillsArr.map((skill, index)=>(
                <Button key={index} variant="outlined">{skill}</Button>
                ))
            }
        </div>
    </Box>
    )
}

export default Skills;