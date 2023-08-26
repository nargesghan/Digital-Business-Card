import { useState } from 'react'
import Header from './components/Header';
import LinkButton from './components/LinkButton';
import { Container,Box } from "@mui/material";
function App() {


  return (
    <>
    <Container maxWidth="sm">
    <Box
            sx={{
              bgcolor: "#cfe8fc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
     <Header></Header>
     <LinkButton/>
     </Box>
     </Container>
    </>
  )
}

export default App
