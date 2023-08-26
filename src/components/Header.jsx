import { Container } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import theme from "../assets/theme";
import { ThemeProvider, Paper } from "@mui/material";
import { Box ,Link} from "@mui/material";

const header = () => {
  return (
    <Container maxWidth="sm">
      <ThemeProvider theme={theme}>
        {" "}
        
          <Box
            sx={{
              bgcolor: "#cfe8fc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDQ2ZfHBDvkz3yW_peCZ2ZsAJMqtdN1ETmsQ&usqp=CAU"
              alt="profile image"
              
            />
            <Typography variant="h1" component="h1" >
              Narges Ghanbari
            </Typography>
            <Typography variant="h2" component="h2" >
            Frontend Developer
            </Typography>
            <Typography variant="h3" component="h3" >
            
            </Typography>
            <Link variant="p" href="googl.com" underline="hover" sx={{fontFamily:"Iner",fontWeight:400,color:"#4A4E74",fontSize:10,}}>narges.com</Link>
          </Box>
          
      </ThemeProvider>
    </Container>
  );
};

export default header;
