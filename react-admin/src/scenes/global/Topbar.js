import { Box, IconButton, InputBase,useTheme } from "@mui/material";

import { ColorModeContext, tokens } from "../../theme";
import  LightModeOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import  DarkModeOutlinedIcon  from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon  from "@mui/icons-material/SettingsOutlined";
import  PersonOutlinedIcon  from "@mui/icons-material/PersonOutlined";
import  SearchIcon from "@mui/icons-material/Search";

import React, { useContext } from "react";
function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display='flex' backgroundColor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={
          {
            ml:2,
            flex:1,
            placeholder:"search",
          }
        }/>
        <IconButton type="button" sx={
          {
            p:1
          }

        }></IconButton>
      </Box>
        <Box display="flex">
          <IconButton>
            <NotificationsOutlinedIcon></NotificationsOutlinedIcon>
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon></SettingsOutlinedIcon>
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon></PersonOutlinedIcon>
          </IconButton>
          <IconButton onClick={colorMode.toggleColorMode}>
            {
              theme.palette.mode === "dark" ?
              <LightModeOutlinedIcon></LightModeOutlinedIcon>
              :
              <DarkModeOutlinedIcon></DarkModeOutlinedIcon>
            }
          </IconButton>
        </Box>
    </Box>
  );
}

export default Topbar;
