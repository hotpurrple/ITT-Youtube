import React, { useState } from "react";
import "./playlists.css";
import Sidebar from "../Sidebar/Sidebar";
import getUserPlaylists from "../../server/getUserPlaylists";
import PlaylistsPlaylistCard from "../PlaylistsPlaylistCard/PlaylistsPlaylistCard";

import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

function Playlists(props) {
  const [userPlaylists, setUserPlaylists] = useState(getUserPlaylists());
  const currentUser = useSelector((state) => state.loggedUser.user);

  return (
    <div className="playlistsPageContainer">
      <Typography
        variant="h4"
        color="initial"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {currentUser.username}'s playlists:
      </Typography>
      {/* <Sidebar
        theClass={
          props.showSideBar
            ? `sidebar-menu-SearchFeed active`
            : `sidebar-menu-SearchFeed`
        }
      /> */}

      <div className="playlistsCardsContainer">
        {userPlaylists.map((pList) => (
          <PlaylistsPlaylistCard pListData={pList} key={pList.title} />
        ))}
      </div>
    </div>
  );
}

export default Playlists;
