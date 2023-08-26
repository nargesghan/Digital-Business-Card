
import React from "react";
import Typography from "@mui/material/Typography";

import { Box ,Link} from "@mui/material";

const header = () => {
  return (
    
    
      <>
        
       
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDQ2ZfHBDvkz3yW_peCZ2ZsAJMqtdN1ETmsQ&usqp=CAU"
              alt="profile image"
              width={317}
            />
            <Typography variant="h1" component="h1" >
              Narges Ghanbari
            </Typography>
            <Typography variant="h2" component="h2" >
            Frontend Developer
            </Typography>
            <Typography variant="h3" component="h3" >
            
            </Typography>
            <Link variant="p" href="googl.com" underline="hover" sx={{fontFamily:"Iner",fontWeight:400,color:"#4A4E74",fontSize:13,marginBottom:2}}>narges.com</Link>
          
            </>
    
    
  );
};

export default header;
