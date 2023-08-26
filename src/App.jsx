import { useState } from "react";
import Header from "./components/Header";
import LinkButton from "./components/LinkButton";
import { Container, Box } from "@mui/material";
import { MainContent } from "./components/MainContent";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme";
import SimpleBottomNavigation from "./components/Footer";
function App() {
  return (
    <>
      <Container sx={{ display: "flex",
            justifyContent: "center",
            }} >
        <Box
          sx={{
            width:317,
            bgcolor: "#F5F5F5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ThemeProvider theme={theme}>
            <Header></Header>
            <LinkButton />
            <MainContent />
            <SimpleBottomNavigation></SimpleBottomNavigation>
          </ThemeProvider>
        </Box>
      </Container>
    </>
  );
}

export default App;
