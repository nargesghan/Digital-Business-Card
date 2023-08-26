import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "Roboto"].join(","),
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "h1" },
          style: {
            fontSize: 25,
            fontWeight: 700,
            letterSpacing: 0,
            textAlign: "center",
            color: "#2B283A",
           
          },
        },
        {
            props: { variant: "h2" },
            style: {
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: 0,
              textAlign: "center",
              color: "#F47D27",
             
            },
          },
          
      ],
    },
  },
});
export default theme;
