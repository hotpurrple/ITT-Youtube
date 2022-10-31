import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { Divider, Button, ListItem, ListItemText } from "@mui/material";
import "./MainVideoCardDotsBtn.css";
import { NotificationSnackbar } from "../";

import createNewPlaylist from "../../server/createNewPlaylist";
import addVideoToExistingPlaylist from "../../server/addVideoToExistingPlaylist";
import getUserPlaylistsNames from "../../server/getUserPlaylistsNames";

//!В props има целите данни за конкретното видео
export default function MainVideoCardDotsBtn(props) {
  // console.log(props);
  const [dialogShown, setDialogShown] = useState(false);
  const [showHiddenMenu, setShowHiddenMenu] = useState(false);

  const [openNotification, setOpenNotification] = useState(false);
  const [playlistNotificationName, setPlaylistNotificationName] = useState("");

  const [newPlaylistName, setNewPlaylistName] = useState("");
  const handleNewPlaylistNameInput = (e) => {
    setNewPlaylistName(e.target.value);
  };

  const handleListItemClick = (playlistName) => {
    //!от текущото видео отива, отива към user.playlists в избрания playlist
    addVideoToExistingPlaylist(playlistName, props.vidData);
    setDialogShown(!dialogShown);

    setPlaylistNotificationName(playlistName);
    setOpenNotification(true);
  };

  const showTheHiddenMenu = () => {
    setShowHiddenMenu(!showHiddenMenu);
  };

  const handleCreateNewPlaylist = () => {
    if (newPlaylistName) {
      //!от тук новия playlist, заедно с първото видео в него, отива към user.playlists
      createNewPlaylist(newPlaylistName, props.vidData);
      setDialogShown(!dialogShown);

      setOpenNotification(true);
      setPlaylistNotificationName(newPlaylistName);
    } else {
      alert("No name chosen");
    }
  };

  const handleCloseNotification = () => {
    setOpenNotification(false);
  };

  let userPlaylistsNames = getUserPlaylistsNames() || [];

  return (
    <div className={props.className}>
      <IconButton
        className="threeDotsVideoCard"
        variant="contained"
        onClick={() => setDialogShown(!dialogShown)}
        color={"success"}
      >
        {props.icon}
      </IconButton>

      <Dialog
        onClose={() => setDialogShown(!dialogShown)}
        open={dialogShown}
        PaperProps={{ sx: { width: "200px" } }}
      >
        <DialogTitle> Add to playlist </DialogTitle>
        <ul>
          {userPlaylistsNames.map((pName) => (
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
          sx={{
            padding: "15px",
          }}
        >
          Create new playlist
        </Button>

        {showHiddenMenu && (
          <div className="createNewPlaylistDiv">
            <input
              className="dotsDialogInput"
              value={newPlaylistName}
              onInput={handleNewPlaylistNameInput}
              placeholder="Enter new playlist name"
              type="text"
            />
            <Button
              variant="text"
              color="primary"
              onClick={handleCreateNewPlaylist}
              sx={{
                padding: "15px",
              }}
            >
              Create
            </Button>
          </div>
        )}
      </Dialog>

      <NotificationSnackbar
        open={openNotification}
        handleCloseNotification={handleCloseNotification}
        severity="success"
        playlistName={playlistNotificationName}
      />
    </div>
  );
}
