import { Box, Button, Typography, useTheme } from '@mui/material'

const Education = ()=> {
    const theme = useTheme()
    return (
    <Box sx={{width:{sm: "100%", md:"60%"}, padding:'20px'}}  className="education">
        <div className="Education_title">
            <Typography variant='h4' mb={2} fontWeight={700}>Education.</Typography>
            <Typography variant='body1' className='edu_dates' fontWeight={500}>2023-2027</Typography>
            <Typography variant='body2' mt={1} color={theme.palette.text.secondary} fontSize={"16px"}>Bachelor of Computer And Information Sciences (FCIS) 2023-2027 Cumulative Grade (Up to third level): Excellent – 95.90% Department : Computer Science</Typography>
        </div>
    </Box>
    )
}

export default Education