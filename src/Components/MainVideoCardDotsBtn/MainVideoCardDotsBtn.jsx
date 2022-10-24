import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import * as HiIcons from "react-icons/hi";
import { useState } from "react";
import { Divider, Button, ListItem, ListItemText } from "@mui/material";
import "./MainVideoCardDotsBtn.css";

import createNewPlaylist from "../../server/createNewPlaylist";
import addVideoToExistingPlaylist from "../../server/addVideoToExistingPlaylist";
import getUserPlaylistsNames from "../../server/getUserPlaylistsNames";

//!В props има целите данни за конкретното видео
export default function MainVideoCardDotsBtn(props) {
  const [dialogShown, setDialogShown] = useState(false);
  const [showHiddenMenu, setShowHiddenMenu] = useState(false);

  const [newPlaylistName, setNewPlaylistName] = useState("");
  const handleNewPlaylistNameInput = (e) => {
    setNewPlaylistName(e.target.value);
  };

  const handleListItemClick = (playlistName) => {
    console.log(playlistName);
    //!от текущото видео отива, отива към user.playlists в избрания playlist
    addVideoToExistingPlaylist(playlistName, props.vidData);
    setDialogShown(!dialogShown);
  };

  const showTheHiddenMenu = () => {
    setShowHiddenMenu(!showHiddenMenu);
  };

  const handleCreateNewPlaylist = () => {
    if (newPlaylistName) {
      //   console.log("New playlist name is: " + newPlaylistName);
      //!от тук новия playlist, заедно с първото видео в него, отива към user.playlists
      createNewPlaylist(newPlaylistName, props.vidData);
      setDialogShown(!dialogShown);
    } else {
      console.log("no name chosen");
    }
  };

  let userPlaylistsNames = getUserPlaylistsNames() || [];
  //let userPlaylistsNames = ["Playlist 1", "Playlist 2", "Playlist 3"];
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
            <Button
              variant="text"
              color="primary"
              onClick={handleCreateNewPlaylist}
            >
              Add new playlist
            </Button>
          </div>
        )}
      </Dialog>
    </div>
  );
}

/*

props.video = {
  "kind": "youtube#searchResult",
  "id": {
      "kind": "youtube#video",
      "videoId": "oMR0E1Yijvs"
  },
  "snippet": {
      "publishedAt": "2022-10-13T12:03:48Z",
      "channelId": "UCupvZG-5ko_eiXAupbDfxWw",
      "title": "Video reveals a major problem for new Russian soldiers",
      "description": "In a new video posted to social media, newly mobilized Russian soldiers are complaining about their lack of training before being ...",
      "thumbnails": {
          "default": {
              "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/default.jpg",
              "width": 120,
              "height": 90
          },
          "medium": {
              "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/mqdefault.jpg",
              "width": 320,
              "height": 180
          },
          "high": {
              "url": "https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg",
              "width": 480,
              "height": 360
          }
      },
      "channelTitle": "CNN",
      "liveBroadcastContent": "none",
      "publishTime": "2022-10-13T12:03:48Z"
  }
}

*/
