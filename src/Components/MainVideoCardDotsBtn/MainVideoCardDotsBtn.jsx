import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";

import * as HiIcons from "react-icons/hi";
import { useState } from "react";

import { Divider, Button, ListItem, ListItemText } from "@mui/material";

import "./MainVideoCardDotsBtn.css";

export default function MainVideoCardDotsBtn(props) {
  const [dialogShown, setDialogShown] = useState(false);
  const [showHiddenMenu, setShowHiddenMenu] = useState(false);

  const [newPlaylistName, setNewPlaylistName] = useState("");
  const handleNewPlaylistNameInput = (e) => {
    setNewPlaylistName(e.target.value);
  };

  const handleListItemClick = (playlistName) => {
    console.log(playlistName);
  };

  const showTheHiddenMenu = () => {
    setShowHiddenMenu(!showHiddenMenu);
  };

  const createNewPlaylist = (e) => {
    console.log(e);
    console.log("New playlist name is: " + newPlaylistName);
  };

  let playlists = [
    "Playlist 1",
    "Playlist 2",
    "Playlist 3",
    "Playlist 4",
    "Playlist 5",
  ];

  return (
    <div className={props.className}>
      <IconButton
        variant="contained"
        onClick={() => setDialogShown(!dialogShown)}
      >
        <HiIcons.HiDotsHorizontal />
      </IconButton>

      <Dialog onClose={() => setDialogShown(!dialogShown)} open={dialogShown}>
        <DialogTitle> Add to playlist </DialogTitle>
        <ul>
          {playlists.map((pName) => (
            <ListItem
              button
              onClick={() => handleListItemClick(pName)}
              key={pName}
            >
              <ListItemText primary={pName} />
            </ListItem>
          ))}
        </ul>

        <Divider />

        <Button
          variant="text"
          color="primary"
          onClick={() => showTheHiddenMenu()}
        >
          Create new playlist
        </Button>

        {showHiddenMenu && (
          <div className="createNewPlaylistDiv">
            <input
              value={newPlaylistName}
              onInput={handleNewPlaylistNameInput}
              placeholder="Enter new playlist name"
              type="text"
            />
            <Button variant="text" color="primary" onClick={createNewPlaylist}>
              Add new playlist
            </Button>
          </div>
        )}
      </Dialog>
    </div>
  );
}
