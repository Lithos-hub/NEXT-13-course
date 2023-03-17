import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React, { FC } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useDispatch } from "react-redux";
import { onToggleSidebar } from "@/store/slices/ui";

const Navbar: FC = () => {
  const dispatch = useDispatch();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton onClick={() => dispatch(onToggleSidebar())}>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6" style={{ marginRight: "5px" }}>
          Jira
        </Typography>
        <Typography variant="h6" color="secondary">
          app
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
