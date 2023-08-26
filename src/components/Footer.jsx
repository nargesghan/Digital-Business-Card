import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";

import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{
      width: 317,
    }}>
      <BottomNavigation
        showLabels
        sx={{ backgroundColor: "#D5D4D8" }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="twitter" icon={<TwitterIcon />} />
        <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} />
      </BottomNavigation>
    </Box>
  );
}
