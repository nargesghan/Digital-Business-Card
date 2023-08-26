import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
const LinkButton = () => {
  return (
    <Stack spacing={2} direction="row">
       <Button  variant="contained" sx={{backgroundColor:"#FFFFFF",borderRadius:2,color:"#374151",borderColor:"#D1D5DB",width:115,height:34 , fontSize:14}} startIcon={<EmailIcon />}><Link color="#374151" underline="hover" href="mailto:nargesghanbarigorji@gmail.com">Email</Link></Button>
    <Button variant="contained" startIcon={<LinkedInIcon/>} fontSize="14"sx={{width:115,height:34 ,borderRadius:2}}><Link color="#FFFFFF" underline="hover" href="https://www.linkedin.com/in/narges-ghanbari-gorji-8997811bb/">LinkedIn</Link></Button>

  </Stack>
  )
}

export default LinkButton