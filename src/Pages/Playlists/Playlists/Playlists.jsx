import React, { useState } from "react";
import "./playlists.css";
import getUserPlaylists from "../../../server/getUserPlaylists";
import PlaylistsPlaylistCard from "../../../Components/PlaylistsPlaylistCard/PlaylistsPlaylistCard";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

function Playlists(props) {
  //!Взимаме всички плейлисти на текущия юзър
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

      <div className="playlistsCardsContainer">
        {userPlaylists.map((pList) => (
          <PlaylistsPlaylistCard pListData={pList} key={pList.title} />
        ))}
      </div>
    </div>
  );
}

export default Playlists;
