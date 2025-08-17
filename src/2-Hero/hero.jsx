import './hero.css'
import { styled, useTheme } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box, Button, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#50c80bff',
    color: '#50c80bff',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export default function Hero() {
  const theme = useTheme();
  return (
    <Box sx={{width:{sm: "100%", md:"60%"}}} className='hero_section'>
      <div className="personal_img">
        <Stack direction="row" spacing={2}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar sx={{width: '70px', height: '70px', border:"1px solid #ffb74d"}} alt="Engi Eid" src="../../public/img/personalImg.jpg" />
          </StyledBadge>
        </Stack>
      </div>
      <div className="personal_description">
        <Typography variant='h4' fontWeight={600} >Data Analyst.</Typography>
        <Typography variant='body2' mt={2} color={theme.palette.text.secondary}>A highly motivated and detail-oriented professional with strong skills in data analysis, Excel, SQL, and 
data visualization tools such as Power BI. Experienced in transforming raw data into actionable insights through clear, meaningful reports and dashboards that drive strategic decision-making 
and enhance business performance.</Typography>
      </div>
      <div className="personal_links">
        {/* <a style={{color: theme.palette.text.primary}} href="#" target='_blank'><TwitterIcon/></a>
        <a style={{color: theme.palette.text.primary,margin:"0px 10px"}} href="#" target='_blank'><InstagramIcon /></a> */}
        <a style={{color: theme.palette.text.primary,marginRight:"10px"}} href="https://github.com/EngiEid" target='_blank'><GitHubIcon /></a>
        <a style={{color: theme.palette.text.primary}} href="https://www.linkedin.com/in/engi-eid-86b7632b9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bxl3I1MFORsmTfZvkiDnnKg%3D%3D" target='_blank'><LinkedInIcon /></a>
      </div>
    </Box>
  
  )
}