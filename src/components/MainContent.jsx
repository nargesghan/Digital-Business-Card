import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
const Cvevent = styled("p")({
  color: "#2B283A",
  fontWeight: 700,
  fontSize: 16,
  fontFamily: ["Inter", "Roboto"].join(","),
  padding: 8,
  borderRadius: 4,
  marginBottom:1,
  paddingBottom:0,
});
const CvParagraph = styled("p")({
  color: "#4A4E74",
  fontWeight: 400,
  fontSize: 13,
  fontFamily: ["Inter", "Roboto"].join(","),
  padding: 8,
  borderRadius: 4,
  marginBottom:0,
  paddingBottom:0
 
});
export const MainContent = () => {
  return (
    <Box>
      <Cvevent>About</Cvevent>
      <CvParagraph>
        I am a sixth semester computer science student. I am interested in
        everything related to computers, including creating a website. I am
        interested in writing, especially about scientific subjects. I want to
        work in the blockchain field in the future.
      </CvParagraph>
      <Cvevent>Interests</Cvevent>
      <CvParagraph sx={{padding:0,margin:0}}>
        <ul >
          <li>cooking</li>
          <li>coding</li>
          <li>drawing</li>
          <li>mathematics</li>
        </ul>
      </CvParagraph>
    </Box>
  );
};
