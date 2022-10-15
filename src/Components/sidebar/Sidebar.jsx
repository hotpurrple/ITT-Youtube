import React from "react";
import { Box } from "@mui/material";

import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function Sidebar(props) {
  return (
    <Box sx={{ bgcolor: "#ffffff" /*"#212121"*/ }}>
      <nav>
        <List>
          <ListItem disablePadding component={Link} to="/">
            <ListItemIcon>
              <HomeIcon
                sx={{
                  color: "#fff",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PlayCircleIcon
                  sx={{
                    color: "#fff",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Shorts" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Link to={"/"}>
                  <SubscriptionsIcon />
                </Link>
              </ListItemIcon>
              <ListItemText primary="Subscriptions" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav>
        <ListItem disablePadding component={Link} to="/library">
          <ListItemIcon>
            <HomeIcon
              sx={{
                color: "#fff",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Library" />
        </ListItem>
        <ListItem disablePadding component={Link} to="/history">
          <ListItemIcon>
            <HomeIcon
              sx={{
                color: "#fff",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="History" />
        </ListItem>
      </nav>
    </Box>
  );
}

export default Sidebar;
