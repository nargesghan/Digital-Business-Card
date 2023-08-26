import { Container } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import theme from "../assets/theme";
import { ThemeProvider, Paper } from "@mui/material";
import { Box } from "@mui/material";

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
          </Box>
          
      </ThemeProvider>
    </Container>
  );
};

export default header;
